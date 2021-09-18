import React, {useState} from "react"
import {Button, Form, Input} from "antd";
import Modal from "antd/es/modal/Modal";
import {useDispatch, useSelector} from "react-redux";
import Text from "antd/es/typography/Text";
import {clearBox} from "../../../../store/productsReduser";
import {orderAPI} from "../../../../api/api";


export const ConfirmModalWindow = () => {
  const dispatch = useDispatch()

  const [order, setOrder] = useState()
  const productsForSell = useSelector(state => state.productsPage.productsToSell)
  const [visible, setVisible] = React.useState(false);
  const [confirmLoading, setConfirmLoading] = React.useState(false);

  const onFinish = (values) => {
    setOrder(values)
  };
  const showModal = () => {
    setVisible(true);
  };

  const handleOk = () => {
    setConfirmLoading(true);
    setTimeout(() => {
      orderAPI.newOrder(order,productsForSell)
      setOrder(null)
      dispatch(clearBox([]))
      setVisible(false);
      setConfirmLoading(false);
    }, 2000);
  };
  const handleCancel = () => {
    setVisible(false);
  };
  return <div>

    {productsForSell.length > 0 && <Button type="primary" onClick={showModal}>
      Оформить заказ
    </Button>}
    <Modal
      title="Оформление заказа"
      visible={visible}
      onOk={handleOk}
      confirmLoading={confirmLoading}
      onCancel={handleCancel}
    >
      <Form name="nest-messages" onFinish={onFinish}>
        <Form.Item name={['order', 'name']} label="Ваше имя" rules={[{required: true}]}>
          <Input/>
        </Form.Item>
        <Form.Item name={['order', 'email']} label="Email" rules={[{type: 'email'}]}>
          <Input/>
        </Form.Item>
        <Form.Item name={['order', 'phone']} label="Номер телефона" rules={[{required: true}]}>
          <Input/>
        </Form.Item>
        <Form.Item name={['order', 'introduction']} label="Пожелания к заказу">
          <Input.TextArea/>
        </Form.Item>
        <Form.Item>
          {!order ? <Button type="primary" htmlType="submit">
            Подтвердить контакты
          </Button> : <Text type="success">Нажмите OK для отправки заказа</Text>
          }
        </Form.Item>
      </Form>
    </Modal>
  </div>

}