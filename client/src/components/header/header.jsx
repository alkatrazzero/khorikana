import React from "react"
import "./header.css"
import { NavLink} from "react-router-dom";

const Header = (props) => {

  return <div className={"headerWrapper"}>
    <div className={"content"}>
      <div className={"title"}>
        <div> KHORIKANA</div>
      </div>
      <div className={"navMenu"}>

       <div><NavLink  activeClassName={"active"} to={"/AboutMe"}> О себе</NavLink></div>
        <div><NavLink activeClassName={"active"} to={"/Box"}>корзина</NavLink></div>
        <div><NavLink activeClassName={"active"} to={"/Delivery"}>доставка</NavLink></div>
        <div><NavLink activeClassName={"active"} to={"/Comments"}> отзывы</NavLink></div>
        <div><NavLink activeClassName={"active"} to={"/Contacts"}> контакты</NavLink></div>
        <div><NavLink activeClassName={"active"} to={"/Registr"}> регистрация</NavLink></div>

      </div>
    </div>
  </div>

}

export default Header;