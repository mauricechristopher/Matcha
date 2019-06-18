import { BrowserRouter as Route, Switch } from "react-router-dom";
import React from "react";

export const Routes = (
    <Switch>
        <Route path="/" />
        <Route path="/login" />
        <Route path="/register" />
        <Route render={() => <h1>Page not found</h1>} />
    </Switch>
);
