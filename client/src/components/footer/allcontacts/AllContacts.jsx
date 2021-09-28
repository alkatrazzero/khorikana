import React from "react"
import "./AllContacts.css"
import {YoutubeOutlined} from "@ant-design/icons";
import instagram from "../../../assets/favIconContacts/instagram.svg"
import viber from "../../../assets/favIconContacts/viber.svg"
import tiktok from "../../../assets/favIconContacts/tiktok.svg"
import youtube from "../../../assets/favIconContacts/youtube.svg"

import {NavLink} from "react-router-dom";

export const AllContacts = () => {

  return <div className={"AllContacts"}>
    <div>
      <a href={"http://instagram.com/khorikana"}>
        <img style={{width: 44}} src={viber} alt=""/>
      </a>
    </div>
    <div>
      <a href={"http://instagram.com/khorikana"}>
        <img style={{width: 44}} src={instagram} alt=""/>
      </a>
    </div>
    <div>
      <a href={"http://instagram.com/khorikana"}>
        <img style={{width: 44}} src={youtube} alt=""/>
      </a>
    </div>
    <div>
      <a href={"http://instagram.com/khorikana"}>
        <img style={{width: 44}} src={tiktok} alt=""/>
      </a>
    </div>


  </div>
}