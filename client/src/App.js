import './App.css';
import React, {useEffect} from "react"
import 'antd/dist/antd.css'
import Header from "./components/header/header";
import Content from "./components/content/Content";
import {Footer} from "./components/footer/Footer";
import {useDispatch} from "react-redux";
import {getAllProducts, setProductsToSell} from "./store/productsReduser";
import {getOrders} from "./store/orders";
import {Badge, Carousel} from "antd";
import {NavLink, Route, Switch} from "react-router-dom";
import AboutMe from "./components/content/ContentItems/aboutMe/AboutMe";
import Box from "./components/content/ContentItems/Box/Box";
import Delivery from "./components/content/ContentItems/Delivery/Delivery";
import Comments from "./components/content/ContentItems/Comments/Comments";
import Contacts from "./components/content/ContentItems/Cotacts/Cotacts";
import {Admin} from "./components/content/ContentItems/admin/admin";


const App = (props) => {


  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getOrders())
    dispatch(getAllProducts())
    dispatch(setProductsToSell(JSON.parse(localStorage.getItem("productsToSell")) || []))

  }, [])
  return <div>

    <Header/>
    <Content/>
    <Footer/>
  </div>
}

export default App;