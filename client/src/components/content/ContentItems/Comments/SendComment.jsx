import React, {useState} from "react";
import {getComment} from "../../../../store/commentsReduser";
import {useDispatch} from "react-redux";
import {Comment, Avatar, Form, Button, Input} from 'antd';

const {TextArea} = Input;

const Editor = ({onChange, onSubmit, submitting, value}) => {
  return <div>
    <Form.Item>
      <TextArea rows={4} onChange={onChange} value={value}/>
    </Form.Item>
    <Form.Item>
      <Button htmlType="submit" loading={submitting} onClick={onSubmit} type="primary">
        Оставить комментарий
      </Button>
    </Form.Item>
  </div>
}

export const SendComments = () => {
  const [submitting, setSubmitting] = useState()
  const [value, setValue] = useState()
  const dispatch = useDispatch()
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'
  };
  const handleSubmit = () => {
    if (!value) {
      return;
    }
    setSubmitting(true)
    setTimeout(() => {
      let now = new Date();
      let newNow= now.toLocaleString("ru",options)

      dispatch(getComment({value:value,newNow}))


      setSubmitting(false)
      setValue('')



    }, 1000);
  };

  const handleChange = e => {
    setValue(e.target.value)

  };

  return <div>
    <Comment
      avatar={
        <Avatar
          src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
          alt="Han Solo"
        />
      }
      content={
        <Editor
          onChange={handleChange}
          onSubmit={handleSubmit}
          submitting={submitting}
          value={value}
        />
      }
    />
  </div>


}