import React, {useState} from "react"
import {useDispatch, useSelector} from "react-redux";
import {Button, Comment, Form, Input} from "antd";
import Avatar from "antd/es/avatar/avatar";
import {getComment} from "../../../../store/commentsReduser";
import TextArea from "antd/es/input/TextArea";
import './comments.css'
import {SendComments} from "./SendComment";

export const RenderComment = () => {
  const comments = useSelector(state => state.commentsPage.comments)

  return <div className={"wrapper"}>
    <div className={"comments"}>
      <div className={"container"}>

        <div className={"comments_row"}>
          {comments.map(c =>
            <Comment className={"comment"}

                     author={<a>Анон</a>}
                     avatar={
                       <Avatar
                         src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                         alt="Han Solo"
                       />
                     }
                     content={<div>
                       <p style={{fontSize:10}}>{c.newNow}</p>
                       <p style={{width:300 ,height:200}}>
                         {c.comment}
                       </p>
                     </div>
                     }
            />
          )}

        </div>
      </div>
      <div>
        <SendComments/>
        {/*<Form name="nest-messages" onFinish={onFinish}>*/}
        {/*  <div className={"commentInput__title"}>Ваш отзыв</div>*/}
        {/*  <Form.Item name={"value"} >*/}
        {/*    <TextArea  style={{width:400}} onChange={onChange}  />*/}
        {/*  </Form.Item>*/}
        {/*  <Form.Item>*/}
        {/*    <Button type="primary" htmlType="submit">*/}
        {/*      Отправить*/}
        {/*    </Button>*/}
        {/*  </Form.Item>*/}
        {/*</Form>*/}
      </div>
    </div>
  </div>
}