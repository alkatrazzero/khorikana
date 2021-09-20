import React, {useEffect, useState} from "react"
import "./header.css"
import {NavLink} from "react-router-dom";
import {Badge} from "antd";
import {useSelector} from "react-redux";

const Header = (props) => {
  const productsForSell=useSelector(state=>state.productsPage.productsToSell)
  useEffect(()=>{
    setCount(productsForSell.length)
  },[productsForSell])
  const [count,setCount]=useState()
  return <div className={"headerWrapper"}>
    <div className={"content"}>
      <div className={"title"}>
        <div> KHORIKANA</div>
      </div>
      <div className={"navMenu"}>

        <div><NavLink activeClassName={"active"} to={"/AboutMe"}> О себе</NavLink></div>
        <Badge className={"box"} count={count} >
          <div ><NavLink activeClassName={"active"} to={"/Box"}>корзина</NavLink></div>
        </Badge>
        <div><NavLink activeClassName={"active"} to={"/Delivery"}>доставка</NavLink></div>
        <div><NavLink activeClassName={"active"} to={"/Comments"}> отзывы</NavLink></div>
        <div><NavLink activeClassName={"active"} to={"/Contacts"}> контакты</NavLink></div>
        <div><NavLink activeClassName={"active"}
                      to={"/khorikana_adminpanelAnastasiya_aRkadiEvna1992"}> ADMINKA</NavLink></div>

      </div>
    </div>
  </div>

}

export default Header;