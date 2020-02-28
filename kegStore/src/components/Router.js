import {BrowserRouter,Route,Switch} from "react-router-dom";
import StoreChoose from "./StoreChoose";
import React from "react";
import App from "./App";
import NotFound from "./NotFound";
const Router = () =>
(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={StoreChoose} /> 
                <Route path="/store/:storeId" component={App}/> 
                <Route component={NotFound}/>
            </Switch>
        </BrowserRouter>
        
);
export default Router;