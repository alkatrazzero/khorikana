import { orderAPI} from "../api/api";

const SET_ORDERS = "SET_ORDERS"
const REMOVE_ORDER="REMOVE_ORDER"
let initialState = {
  orders: null
}


export const ordersReduser = (state = initialState, action) => {
  switch (action.type) {
    case SET_ORDERS:
      return {
        ...state, orders: action.orders
      }

    default:
      return state
  }
}
export const setOrders = (orders) => {
  return {type: SET_ORDERS, orders}
}


export const getOrders = () => {
  return async (dispatch) => {
    let response = await orderAPI.getOrders()

    dispatch(setOrders(response.data))
  }
}
