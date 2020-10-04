import React from "react";
import Home from "./component/pages/Home";
import About from "./component/pages/About";
import Menus from "./component/pages/Menu";
import BLogs from "./component/pages/Blogs";
import Contact from "./component/pages/Contact";
import { Switch, Route } from "react-router-dom";

export default function MainRoute() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/menu" component={Menus} />
      <Route path="/blog" component={BLogs} />
      <Route path="/contact" component={Contact} />
    </Switch>
  );
}
