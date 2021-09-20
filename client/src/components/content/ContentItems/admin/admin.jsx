import React, {useEffect} from "react"
import {Button, Form, Input, Upload} from "antd";
import {UploadOutlined} from "@ant-design/icons";
import { setProduct} from "../../../../store/productsReduser";
import {useDispatch, useSelector} from "react-redux";
import "./admin.css"
import { getOrders} from "../../../../store/orders";
import {orderAPI} from "../../../../api/api";

const props1 = {
  name: 'file2',
  action: '6',
}
const layout = {
  labelCol: {span: 8},
  wrapperCol: {span: 16},
};

export const Admin = () => {
  const dispatch = useDispatch()
  const orders = useSelector(state => state.ordersPage.orders)
const deleteCurrentOrder=async (id)=>{
  await orderAPI.deleteOrder(id)
}
useEffect( ()=>{
 dispatch( getOrders())
},[orders])
  const onFinish = (values) => {
    dispatch(setProduct(values))
  };
  return <div>
    <div className={"adminContainer"}>
      <div className={"admin__row"}>
        <div className={"admin_orderStatistic"}>
          <div>СТАТИСТИКА</div>
          <div className={"order_row"} >
            {orders && orders.order.map((o => <div className={"order_card"}>
              <Button onClick={()=>{deleteCurrentOrder(o._id)}}>delete</Button>
              <div>Имя покупателя: {o.order.name}</div>
              <div>Номер телефона: {o.order.phone}</div>
              <div>Пожелание к заказу: {o.order.introduction}</div>
              <div> Заказ: <div> {o.product.map(p => <div>
                <div> Название товара: {p.name}</div>
                <div>Цена товара: {p.price}</div>
              </div>)}</div></div>
            </div>))}


          </div>
        </div>


        <div className={"admin__addProductForm"}>
          <Form {...layout} name="nest-messages" onFinish={onFinish}>
            <Form.Item name={['product', 'name']} label="Название товара" rules={[{required: true}]}>
              <Input/>
            </Form.Item>
            <Form.Item name={['product', 'category']} label="Категория">
              <Input/>
            </Form.Item>
            <Form.Item name={['product', 'aboutProduct']} label="О товаре">
              <Input.TextArea/>
            </Form.Item>
            <Form.Item name={['product', 'price']} label="Цена">
              <Input/>
            </Form.Item>
            <Form.Item name={['product', 'photo']} label="Фотография">

              <Upload {...props1} >
                <Button icon={<UploadOutlined/>}>Загрузка картинки</Button>
              </Upload>
            </Form.Item>
            <Form.Item wrapperCol={{...layout.wrapperCol, offset: 8}}>
              <Button type="primary" htmlType="submit">
                добавить товар
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>

    </div>
  </div>
}