import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import { createUseStyles } from 'react-jss';
import LoginPage from '../views/LoginPage/LoginPage';
import RegisterPage from '../views/RegisterPage/RegisterPage';
import HomePage from '../views/HomePage/HomePage';
import styles from '../assets/jss/sportEraStyles.jss';
import NavBar from '../components/NavBar/NavBar';
import Footer from '../components/Footer/Footer';
import ForgotPasswordPage from '../views/ForgotPasswordPage/ForgotPasswordPage';
import ResetPasswordPage from '../views/ResetPasswordPage/ResetPasswordPage';
import NotFoundPage from '../views/NotFoundPage/NotFoundPage';

const useStyles = createUseStyles({ '@global': styles });

const App: React.FC = () => {
    useStyles();
    return (
        <>
            <NavBar />
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/login" component={LoginPage} />
                <Route path="/register" component={RegisterPage} />
                <Route path="/forgot-password" component={ForgotPasswordPage} />
                <Route path="/reset-password/:token" component={ResetPasswordPage} />
                <Route path="*" component={NotFoundPage} />
            </Switch>
            <Footer />
        </>
    );
};

export default App;
