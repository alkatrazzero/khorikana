import axios from "axios";

//api calls for autorization
export const authAPI = {}
export const commentsAPI = {
  setComment({value,newNow}) {
    return axios.post('/api/comments/addComment', {value,newNow}).then((res) => {
      return res.data
    })
  },
  getAllComments(){
    return axios.get('/api/comments/getComments')
  }
}

export const productAPI= {
  addNewProduct(product) {
    return axios.post('/api/products/addProduct', product).then((res) => {
      return res.data
    })
  },
  getAllProducts() {
    return axios.get('/api/products/getAllProducts')
  },
  updateProduct(price,id){
    return axios.post('/api/products/updateProduct',{price,id})
  }

}
export const orderAPI={
  newOrder(order,product){
    return axios.post('/api/order/newOrder',{order,product})
  },
  getOrders(){
    return axios.get('/api/order/getOrders')
  },
  deleteOrder(id){
    return axios.delete(`/api/order/deleteOrder/${id}`)
  }
}
