import React, {useEffect} from "react"
import {RenderComment} from "./RenderComment";
import {commentsAPI} from "../../../../api/api";
import {useDispatch} from "react-redux";
import {setAllComments} from "../../../../store/commentsReduser";


const Comments = (props) => {
  const dispatch=useDispatch()
useEffect(()=>{
  dispatch(setAllComments())
},[])

  return <div className={"contentWrapper"}>
    <RenderComment/>
  </div>

}

export default Comments;