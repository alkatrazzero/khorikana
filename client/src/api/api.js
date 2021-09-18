import axios from "axios";

//api calls for autorization
export const authAPI = {}
export const commentsAPI = {
  setComment(comment) {
    return axios.post('/api/comments/addComment', comment).then((res) => {
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
  }

}
export const orderAPI={
  newOrder(order,product){
    return axios.post('/api/order/newOrder',{order,product})
  }
}