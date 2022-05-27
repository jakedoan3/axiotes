import React from "react";
import AboutMe from "./AboutMe";
import Home from './Home'
import AustinGallery from "./AustinGallery";
import ArtGallery from "./ArtGallery";
import ConsultingServices from "./ConsultingServices";
import { hot } from "react-hot-loader/root";
import { BrowserRouter, Link, Switch, Route } from "react-router-dom";

const App = () => {

  return (
    <BrowserRouter>
      <div>
        <div
          id="navbar">
          <Link to="/">Margaret Doan</Link>
          <Link to="/aboutme">About Me</Link>  
          <Link to="/austingallery">Austin</Link>
          <Link to="/artgallery">Art Gallery</Link>
          <Link to="/consulting">Consulting Services</Link>
        </div>

        <div
          id="main">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>

            <Route path="/aboutme">
              <AboutMe />
            </Route>

            <Route path="/austingallery">
              <AustinGallery />
            </Route>

            <Route path="/consulting">
              <ConsultingServices />
            </Route>
            
            <Route path="/artgallery">
              <ArtGallery />
            </Route>

          </Switch>
        </div>
      </div>
    </BrowserRouter>
    
  )
}

export default hot(App);
