import { BrowserRouter as Route, Switch } from "react-router-dom";
import React from "react";
import WelcomeBody from "../components/WelcomePage/WelcomeBody";
import Register from "../components/Auth/Register";
import Login from "../components/Auth/Login";

export const Routes = (
    <Switch>
        <Route exact path="/" component={WelcomeBody} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
    </Switch>
);
