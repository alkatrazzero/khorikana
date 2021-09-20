import React from "react"

import AboutMe from "./ContentItems/aboutMe/AboutMe";
import Box from "./ContentItems/Box/Box";
import Delivery from "./ContentItems/Delivery/Delivery";
import Comments from "./ContentItems/Comments/Comments";
import Cotacts from "./ContentItems/Cotacts/Cotacts";
import {Link, Redirect, Route, Switch} from "react-router-dom";
import Contacts from "./ContentItems/Cotacts/Cotacts";
import {Admin} from "./ContentItems/admin/admin";

const Content = (props) => {

  return <div className={"contentWrapper"}>
    <Switch>
      <Route exact path={"/AboutMe"} render={() =>  <AboutMe/>}/>
      <Route exact path={"/Box"} render={() =>   <Box/>}/>
      <Route exact path={"/Delivery"} render={() =>  <Delivery/>}/>
      <Route exact path={"/Comments"} render={() =>   <Comments/>}/>
      <Route exact path={"/Contacts"} render={() =>    <Contacts/>}/>
      <Route exact path={"/khorikana_adminpanelAnastasiya_aRkadiEvna1992"} render={() =><Admin/>}/>
    </Switch>
  </div>

}

export default Content;


