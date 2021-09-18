import './App.css';
import React, {useEffect} from "react"
import 'antd/dist/antd.css'
import Header from "./components/header/header";
import Content from "./components/content/Content";
import {Footer} from "./components/footer/Footer";
import {useDispatch} from "react-redux";
import {getAllProducts} from "./store/productsReduser";



const App = (props) => {
  const dispatch=useDispatch()
  dispatch(getAllProducts)
  useEffect(()=>{
    dispatch(getAllProducts())

  },[])
  return <div>
    <Header/>
    <Content/>
    <Footer/>
  </div>
}

export default App;