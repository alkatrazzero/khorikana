import {commentsAPI} from "../api/api";

const SET_ALL_COMMENTS = "SET_ALL_COMMENTS"
const SET_COMMENT = "SET_COMMENT"

let initialState = {
  comments: []
}


export const commentsReduser = (state = initialState, action) => {
  switch (action.type) {
    case SET_COMMENT:
      return {
        ...state, comments: state.comments.concat([action.comment])
      }
    case SET_ALL_COMMENTS:
      return {
        ...state, comments: action.comments

      }

    default:
      return state
  }
}
export const setComments = (comments) => {
  return {type: SET_ALL_COMMENTS, comments}
}
export const setComment = (comment) => {
  return {type: SET_COMMENT, comment}
}
export const getComment = ({value,newNow}) => {
  return async (dispatch) => {
    console.log({value,newNow})
    let response = await commentsAPI.setComment({value,newNow})
    dispatch(setComment(response.comment))
  }
}
export const setAllComments = () => {
  return async (dispatch) => {
    let response = await commentsAPI.getAllComments()
    dispatch(setComments(response.data.comment))
  }
}
