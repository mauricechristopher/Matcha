import React from "react";
import WelcomeBody from "./components/WelcomePage/WelcomeBody";
import Register from "./components/Auth/Register";
import Login from "./components/Auth/Login";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Header/Navbar";
import { Routes } from "./routes/Routes";
import { Provider } from "react-redux";
import store from "./store";

class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <div className="App">
                        <Navbar />
                        <Route exact path="/" component={WelcomeBody} />
                        <Route exact path="/register" component={Register} />
                        <Route exact path="/login" component={Login} />
                    </div>
                    {Routes}
                </Router>
            </Provider>
        );
    }
}

export default App;
