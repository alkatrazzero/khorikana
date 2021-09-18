import React, {useState} from "react"
import {useDispatch, useSelector} from "react-redux";
import {Button, Comment, Form, Input} from "antd";
import Avatar from "antd/es/avatar/avatar";
import {getComment} from "../../../../store/commentsReduser";
import TextArea from "antd/es/input/TextArea";
import './comments.css'

export const RenderComment = () => {
  const [inputValue, setValue] = useState("f")
  const comments = useSelector(state => state.commentsPage.comments)
  const dispatch = useDispatch()
  const onFinish = (value) => {
    setValue("")
    dispatch(getComment(value))

  }
  return <div className={"wrapper"}>
    <div className={"comments"}>
    <div className={"container"}>
      <div className={"comments_row"}>

          {comments.map(c =>
            <Comment className={"comment"}

              author={<a>Anonimus</a>}
              avatar={
                <Avatar
                  src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                  alt="Han Solo"
                />
              }
              content={
                <p>
                  {c.comment}
                </p>
              }
            />
          )}

      </div>
    </div>
    <div>
      <Form name="nest-messages" onFinish={onFinish}>
        <div className={"commentInput__title"}>Ваш отзыв</div>
        <Form.Item name='value' >
          <TextArea  style={{width:400}} value={inputValue}/>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Отправить
          </Button>
        </Form.Item>
      </Form>
    </div>
    </div>
  </div>
}