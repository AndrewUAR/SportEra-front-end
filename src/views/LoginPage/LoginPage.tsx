import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Col, Container, Form, Nav, Row } from 'react-bootstrap';
import { createUseStyles } from 'react-jss';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUserCircle, faLock } from '@fortawesome/free-solid-svg-icons';
import Card from '../../components/Card/Card';
import CardHeader from '../../components/Card/CardHeader';
import CardFooter from '../../components/Card/CardFooter';
import CardBody from '../../components/Card/CardBody';
import FormInput from '../../components/FormInput/FormInput';
import Button from '../../components/Button/Button';
import styles from '../../assets/jss/views/registerLoginPageStyles.jss';

library.add(faUserCircle, faLock);

const useStyles = createUseStyles(styles);

type UserState = {
    username: string;
    password: string;
};

type ErrorState = {
    usernameError: string;
    passwordError: string;
};

const LoginPage: React.FunctionComponent = (props) => {
    const classes = useStyles();

    const [user, setUser] = useState<UserState>({
        username: '',
        password: '',
    });

    const [error, setError] = useState<ErrorState>({
        usernameError: '',
        passwordError: '',
    });

    const { username, password } = user;

    const { usernameError, passwordError } = error;

    const onChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        const { name, value } = event.target;
        setUser((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    return (
        <Container className={classes.pageHeader}>
            <Row className={classes.row}>
                <Col sm={11} md={8} lg={5}>
                    <Card loginRegisterCard>
                        <CardHeader loginRegisterHeader>
                            <h3 className={`${classes.cardTitle} ${classes.loginRegisterTitle}`}>SIGN IN</h3>
                        </CardHeader>
                        <CardBody>
                            <Form>
                                <FormInput
                                    controlId="formUsername"
                                    label="Username"
                                    name="username"
                                    placeholder="Please enter your username"
                                    value={username}
                                    onChange={onChange}
                                    disabled={false}
                                    icon={<FontAwesomeIcon icon={faUserCircle} size="lg" />}
                                    isValid={!usernameError && !!username}
                                    isInvalid={!!usernameError}
                                    error={usernameError}
                                />
                                <FormInput
                                    controlId="formPassword"
                                    label="Password"
                                    name="password"
                                    placeholder="Please enter your password"
                                    value={password}
                                    type="password"
                                    onChange={onChange}
                                    disabled={false}
                                    icon={<FontAwesomeIcon icon={faLock} size="lg" />}
                                    isValid={!passwordError && !!password}
                                    isInvalid={!!passwordError}
                                    error={passwordError}
                                />
                                <Button type="submit" size="sm" disabled={false} fullWidth color="blue" rounded>
                                    Sign In
                                </Button>
                            </Form>
                        </CardBody>
                        <CardFooter loginRegisterFooter>
                            <Nav.Link href="/forgot-password">Forgot Password</Nav.Link>
                            <Nav.Link href="/register">Sign Up</Nav.Link>
                        </CardFooter>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

LoginPage.propTypes = {};

export default LoginPage;
