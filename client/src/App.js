import './App.css';
import React, {useEffect} from "react"
import 'antd/dist/antd.css'
import Header from "./components/header/header";
import Content from "./components/content/Content";
import {Footer} from "./components/footer/Footer";
import {useDispatch} from "react-redux";
import {getAllProducts} from "./store/productsReduser";
import {getOrders} from "./store/orders";



const App = (props) => {
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(getOrders())
    dispatch(getAllProducts())

  },[])
  return <div>
    <Header/>
    <Content/>
    <Footer/>
  </div>
}

export default App;