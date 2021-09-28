import React, {useState} from "react"
import {Button, Form, Input} from "antd";
import {useDispatch, useSelector} from "react-redux";
import Text from "antd/es/typography/Text";
import {clearBox} from "../../../../store/productsReduser";
import {orderAPI} from "../../../../api/api";
import "./box.css"

export const ConfirmModalWindow = (props) => {
  const layout = {
    labelCol: {span: 10},
    wrapperCol: {span: 16},
  };
  const dispatch = useDispatch()
  const [start, setStart] = useState()
  const [order, setOrder] = useState()
  const productsForSell = useSelector(state => state.productsPage.productsToSell)

  const onFinish = (values) => {
    console.log(values)
    orderAPI.newOrder(values, productsForSell)
    setOrder(null)
    dispatch(clearBox([]))
    props.setSucces(true)
  };


  return <div className={"box_container"}>
    <div className={"box_form"}>
      {productsForSell.length > 0 && <div className={"confitmForm"}><Form {...layout} name="nest-messages" onFinish={onFinish}>
        <Form.Item name={['name']} label="Ваше имя" rules={[{required: true}]}>
          <Input/>
        </Form.Item>
        <Form.Item name={['email']} label="Email" rules={[{type: 'email'}]}>
          <Input/>
        </Form.Item>
        <Form.Item name={['phone']} label="Номер телефона" rules={[{required: true}]}>
          <Input/>
        </Form.Item>
        <Form.Item name={['introduction']} label="Пожелания к заказу">
          <Input.TextArea/>
        </Form.Item>
        <Form.Item>
          {!order ? <div className={"confirm_button"}><Button type="primary" htmlType="submit">
            Отправить заказ
          </Button></div> : <Text type="success">Нажмите OK для отправки заказа</Text>
          }

        </Form.Item>
      </Form></div>}

    </div>
  </div>

}