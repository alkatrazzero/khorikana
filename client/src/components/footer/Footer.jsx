import React from "react"
import Showcase from "./showcase/ShowCase";
import {AllContacts} from "./allcontacts/AllContacts";
import "./footer.css"

export const Footer = () => {

  return <div className={"footer"}>
    <Showcase/>
    <AllContacts/>
  </div>
}