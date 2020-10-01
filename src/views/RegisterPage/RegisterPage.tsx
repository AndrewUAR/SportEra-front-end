import React, { useState } from 'react';
import PropTypes, { InferProps } from 'prop-types';
import { Container, Form, Row, Col, Nav, Button } from 'react-bootstrap';
import { createUseStyles } from 'react-jss';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUserCircle, faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import FormInput from '../../components/FormInput/FormInput';
import styles from '../../assets/jss/views/registerLoginPageStyles.jss';
import CardBody from '../../components/Card/CardBody';
import Card from '../../components/Card/Card';

import CardHeader from '../../components/Card/CardHeader';
import CardFooter from '../../components/Card/CardFooter';

library.add(faUserCircle, faEnvelope, faLock);

type UserState = {
    username: string;
    email: string;
    password: string;
    passwordConfirm: string;
};

type ErrorState = {
    usernameError: string;
    emailError: string;
    passwordError: string;
    passwordConfirmError: string;
};

const useStyles = createUseStyles(styles);

// type InferredProps = InferProps<typeof RegisterPage.propTypes>;

const RegisterPage: React.FC = (props) => {
    const classes = useStyles();

    const [user, setUser] = useState<UserState>({
        username: '',
        email: '',
        password: '',
        passwordConfirm: '',
    });

    const [error, setError] = useState<ErrorState>({
        usernameError: '',
        emailError: '',
        passwordError: '',
        passwordConfirmError: '',
    });

    const { username, email, password, passwordConfirm } = user;
    const { usernameError, emailError, passwordError, passwordConfirmError } = error;

    const onChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        const { name, value } = event.target;
        setUser((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const onSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        console.log('Click');
        // const isValid = validateInputs(user, setError);
        // if (isValid) {
        //     console.log('valid')
        // }
    };

    return (
        <Container className={classes.pageHeader}>
            <Row className={classes.row}>
                <Col sm={11} md={8} lg={5}>
                    <Card loginRegisterCard>
                        <CardHeader loginRegisterHeader>
                            <h3 className={`${classes.cardTitle} ${classes.loginRegisterTitle}`}>SIGN UP</h3>
                        </CardHeader>
                        <CardBody>
                            <Form onSubmit={onSubmit}>
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
                                    controlId="formEmail"
                                    label="Email"
                                    name="email"
                                    placeholder="Please enter your email"
                                    value={email}
                                    type="email"
                                    onChange={onChange}
                                    disabled={false}
                                    icon={<FontAwesomeIcon icon={faEnvelope} size="lg" />}
                                    isValid={!emailError && !!email}
                                    isInvalid={!!emailError}
                                    error={emailError}
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
                                <FormInput
                                    controlId="formPasswordConfirm"
                                    label="Password Confirm"
                                    name="passwordConfirm"
                                    placeholder="Please confirm your password"
                                    value={passwordConfirm}
                                    type="password"
                                    onChange={onChange}
                                    disabled={false}
                                    icon={<FontAwesomeIcon icon={faLock} size="lg" />}
                                    isValid={!passwordConfirmError && !!passwordConfirm}
                                    isInvalid={!!passwordConfirmError}
                                    error={passwordConfirmError}
                                />
                                <Button className={classes.submitButton} type="submit" size="sm">
                                    Sign Up
                                </Button>
                            </Form>
                        </CardBody>
                        <CardFooter loginRegisterFooter>
                            <p>Already have an account?</p>
                            <Nav.Link href="/login">Sign In</Nav.Link>
                        </CardFooter>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

// RegisterPage.propTypes = {

// };

export default RegisterPage;
