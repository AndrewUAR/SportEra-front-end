import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import LoginPage from '../views/LoginPage/LoginPage';
import RegisterPage from '../views/RegisterPage/RegisterPage';
import HomePage from '../views/HomePage/HomePage';

const App: React.FunctionComponent = () => {
    return (
        <div className="App">
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/login" component={LoginPage} />
                <Route path="/register" component={RegisterPage} />
            </Switch>
        </div>
    );
};

export default App;
