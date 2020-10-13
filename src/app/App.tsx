import React, { lazy, Suspense } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import { createUseStyles } from 'react-jss';

import styles from '../assets/jss/sportEraStyles.jss';
import NavBar from '../components/NavBar/NavBar';
import Footer from '../components/Footer/Footer';
import RestrictedRoute from '../components/RestrictedRoute/RestrictedRoute';
import LoadingComponent from '../components/LoadingComponent/LoadingComponent';

const HomePage = lazy(() => import('../views/HomePage/HomePage'));
const LoginPage = lazy(() => import('../views/LoginPage/LoginPage'));
const RegisterPage = lazy(() => import('../views/RegisterPage/RegisterPage'));
const ForgotPasswordPage = lazy(() => import('../views/ForgotPasswordPage/ForgotPasswordPage'));
const ResetPasswordPage = lazy(() => import('../views/ResetPasswordPage/ResetPasswordPage'));
const NotFoundPage = lazy(() => import('../views/NotFoundPage/NotFoundPage'));

const useStyles = createUseStyles({ '@global': styles });

const App: React.FC = () => {
    useStyles();
    return (
        <>
            <NavBar />
            <Suspense fallback={<LoadingComponent />}>
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <RestrictedRoute path="/login" component={LoginPage} />
                    <RestrictedRoute path="/register" component={RegisterPage} />
                    <RestrictedRoute path="/forgot-password" component={ForgotPasswordPage} />
                    <RestrictedRoute path="/reset-password/:token" component={ResetPasswordPage} />
                    <Route path="*" component={NotFoundPage} />
                </Switch>
            </Suspense>
            <Footer />
        </>
    );
};

export default App;
