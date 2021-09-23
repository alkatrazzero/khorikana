import React, {useEffect, useState} from "react"
import {Button, Form, Image, Input, InputNumber, Upload} from "antd";
import {UploadOutlined} from "@ant-design/icons";
import { setProduct} from "../../../../store/productsReduser";
import {useDispatch, useSelector} from "react-redux";
import "./admin.css"
import { getOrders} from "../../../../store/orders";
import {orderAPI} from "../../../../api/api";
const props1 = {

  name: "filedata",
  action: '/api/products/upload',
  method:"post",
  encType:"multipart/form-data"

}
const layout = {
  labelCol: {span: 8},
  wrapperCol: {span: 16},
};

export const Admin = () => {
  const dispatch = useDispatch()
  const orders = useSelector(state => state.ordersPage.orders)
  const [edit,setEdit]=useState(false)
  const[deleted,setDeleted]=useState()
const deleteCurrentOrder=async (id)=>{
  await orderAPI.deleteOrder(id)
}
useEffect( ()=>{
 dispatch( getOrders())
},[deleted])
  const onFinish = (values) => {
    setEdit(false)
    console.log( values)
    dispatch(setProduct(values))
  };
  return <div>
    <div className={"adminContainer"}>
      <div className={"admin__row"}>
        <div className={"admin_orderStatistic"}>
          <div>СТАТИСТИКА</div>
          <div className={"order_row"} >
            {orders && orders.order.map((o => <div className={"order_card"}>
              <Button onClick={ ()=>{
                setDeleted(true)
                deleteCurrentOrder(o._id)
                setDeleted(false)


              }}>delete</Button>
              <div>Данные покупателя:
              <div>Имя покупателя: {o.order.name}</div>
              <div>Номер телефона: {o.order.phone}</div>
              <div>Пожелание к заказу: {o.order.introduction}</div>
              </div>
              <div> Заказ: <div> {o.product.map(p => <div>
                <div> Название товара: {p.name}</div>
                <div>Цена товара: {p.price}</div>
              </div>)}</div></div>
            </div>))}


          </div>
        </div>


        <div className={"admin__addProductForm"}>
          {!edit?<Button onClick={()=>{setEdit(true)}}>Добавить товар</Button>:
            <div>
          <Form  {...layout} name="nest-messages" onFinish={onFinish}>
            <Form.Item name={['product', 'name']} label="Название товара" rules={[{required: true}]}>
              <Input/>
            </Form.Item>
            <Form.Item name={['product', 'category']} label="Категория">
              <Input/>
            </Form.Item>
            <Form.Item name={['product', 'aboutProduct']} label="О товаре">
              <Input.TextArea/>
            </Form.Item>
            <Form.Item type={"number"} name={['product', 'price']} label="Цена"  >
              <InputNumber/>
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
          }
        </div>
      </div>

    </div>
  </div>
}