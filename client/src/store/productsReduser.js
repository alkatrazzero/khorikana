import {productAPI as productsAPI} from "../api/api";

const ADD_NEW_PRODUCT="ADD_NEW_PRODUCT"
const ADD_PRODUCT_TO_SELL="ADD_PRODUCT_TO_SELL"
const SET_ALL_PRODUCTS="SET_ALL_PRODUCTS"
const REMOVE_FROM_BOX="REMOVE_FROM_BOX"
const CLEAR_BOX="CLEAR_BOX"
let initialState = {
  products:[],
  productsToSell:[]
}


export const productsReduser = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEW_PRODUCT:
      return {
        ...state,products:state.products.concat([action.product])
          // state.comments.concat([action.comment])
      }
    case ADD_PRODUCT_TO_SELL:
      return{
        ...state,productsToSell: state.productsToSell.concat([action.product])
      }
    case SET_ALL_PRODUCTS:
      return{
        ...state,products: action.products
      }
    case REMOVE_FROM_BOX:
      const productToRemove = action.product.name
      return{
        ...state,productsToSell:state.productsToSell.filter((p)=>p.name!== productToRemove)
      }
    case CLEAR_BOX:
      // const RemoveAll;
      return{
        ...state,productsToSell:action.clear
      }

    default:
      return state
  }
}
export const removeFromBox=(product)=>{
  return {type:REMOVE_FROM_BOX,product}
}
export const setAllProducts=(products)=>{
  return {type:SET_ALL_PRODUCTS,products}
}
export const addNewProduct = (product) => {
  return {type: ADD_NEW_PRODUCT, product}
}
export const addProductToSell=(product)=>{
  return{type:ADD_PRODUCT_TO_SELL,product}
}
export const clearBox=(clear)=>{
  return {type:CLEAR_BOX,clear}
}
export const setProduct=(product)=>{
  return async (dispatch)=>{
    let response = await productsAPI.addNewProduct(product)
    dispatch(addNewProduct(product))
  }
}
export const getAllProducts=()=>{
  return async (dispatch)=>{
    let response = await productsAPI.getAllProducts()
    dispatch(setAllProducts(response.data.products))
  }
}

