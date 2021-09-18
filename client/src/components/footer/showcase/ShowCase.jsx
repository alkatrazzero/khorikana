import React from "react"
import {Button, Form, InputNumber, Input, Upload} from "antd";
import {UploadOutlined} from "@ant-design/icons";
import {useDispatch, useSelector} from "react-redux";
import {addProductToSell, setProduct} from "../../../store/productsReduser";
import {Card} from 'antd';
import "./ShowCaseStyle.css"

const {Meta} = Card;
const props1 = {
  name: 'file2',
  action: '6',
}
const layout = {
  labelCol: {span: 8},
  wrapperCol: {span: 16},
};
const Showcase = (props) => {
  const products = useSelector(state => state.productsPage.products)
  const dispatch = useDispatch()
  const onFinish = (values) => {
    dispatch(setProduct(values))
  };

  return <div className={"headerWrapper"}>
    <div className={"container"}>
      <div className={"products_row"}>

        {products.length > 0 && products.map((p => <div className={"productCard_container"}> <Card className={"product_card"}
                                                              hoverable
                                                              style={{width: 240}}
            // cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
          >
            <Meta title={p.product.name} description={p.product.price
            }/>
            <div> {p.product.aboutProduct}</div>
            <Button onClick={() => (dispatch(addProductToSell(p.product)))}>Добавить в корзину</Button>
          </Card></div>
        ))}
      </div>
    </div>


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
          <Button icon={<UploadOutlined/>}>Click to Upload</Button>
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

export default Showcase;