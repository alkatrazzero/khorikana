import './App.css';
import React, {useEffect} from "react"
import 'antd/dist/antd.css'
import Header from "./components/header/header";
import Content from "./components/content/Content";
import {Footer} from "./components/footer/Footer";
import {useDispatch} from "react-redux";
import {getAllProducts, setProductsToSell} from "./store/productsReduser";
import {getOrders} from "./store/orders";

const App = (props) => {


  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getOrders())
    dispatch(getAllProducts())
    dispatch(setProductsToSell(JSON.parse(localStorage.getItem("productsToSell")) || []))

  }, [])
  return <div className={"app_wrapper"}>

    <Header/>
    <Content/>
    <Footer />

  </div>
}

export default App;