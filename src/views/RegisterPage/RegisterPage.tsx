import React, { useState } from 'react';
import PropTypes, { InferProps } from 'prop-types';
import { Container, Row, Col, Nav, Button } from 'react-bootstrap';
import { createUseStyles } from 'react-jss';
import classNames from 'classnames';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
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

const useStyles = createUseStyles(styles);

const schema = Yup.object().shape({
    username: Yup.string()
        .min(4, 'Username is too short! Minimum 4 characters')
        .max(25, 'Username is too long! Maximum 25 characters')
        .required('Please enter a username'),
    email: Yup.string().email('Provided email is invalid').required('Please enter a valid email'),
    password: Yup.string()
        .min(8, 'Password is too short! Minimum 8 characters')
        .max(255, 'Password is too long! Maximum 255 characters')
        .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).*$/,
            'Password must contain at least one uppercase letter, one lowercase letter and one number',
        )
        .required('Please enter a valid password'),
    passwordConfirm: Yup.string()
        .when('password', {
            is: (password) => !!(password && password.length > 0),
            then: Yup.string().oneOf([Yup.ref('password')], "Password doesn't match"),
        })
        .required('Password confirm is required'),
});

type UserState = {
    username: string;
    email: string;
    password: string;
    passwordConfirm: string;
};

// type InferredProps = InferProps<typeof RegisterPage.propTypes>;

const RegisterPage: React.FC = (props) => {
    const classes = useStyles();

    const [user, setUser] = useState<UserState>({
        username: '',
        email: '',
        password: '',
        passwordConfirm: '',
    });

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
                            <h3 className={`${classes.cardTitle} ${classes.loginRegisterTitle}`}>SIGN UP</h3>
                        </CardHeader>
                        <CardBody>
                            <Formik
                                validationSchema={schema}
                                onSubmit={(values, actions) => {
                                    console.log(values);
                                    actions.setSubmitting(false);
                                }}
                                initialValues={{ ...user }}
                                enableReinitialize
                            >
                                {({ values, touched, errors, isSubmitting }) => (
                                    <Form noValidate>
                                        <FormInput
                                            controlId="formUsername"
                                            label="Username"
                                            name="username"
                                            placeholder="Please enter your username"
                                            value={values.username}
                                            onChange={onChange}
                                            disabled={false}
                                            icon={<FontAwesomeIcon icon={faUserCircle} size="lg" />}
                                            isValid={touched.username && !errors.username}
                                            isInvalid={!!errors.username}
                                            error={errors.username}
                                        />
                                        <FormInput
                                            controlId="formEmail"
                                            label="Email"
                                            name="email"
                                            placeholder="Please enter your email"
                                            value={values.email}
                                            type="email"
                                            onChange={onChange}
                                            disabled={false}
                                            icon={<FontAwesomeIcon icon={faEnvelope} size="lg" />}
                                            isValid={touched.email && !errors.email}
                                            isInvalid={!!errors.email}
                                            error={errors.email}
                                        />
                                        <FormInput
                                            controlId="formPassword"
                                            label="Password"
                                            name="password"
                                            placeholder="Please enter your password"
                                            value={values.password}
                                            type="password"
                                            onChange={onChange}
                                            disabled={false}
                                            icon={<FontAwesomeIcon icon={faLock} size="lg" />}
                                            isValid={touched.password && !errors.password}
                                            isInvalid={!!errors.password}
                                            error={errors.password}
                                        />
                                        <FormInput
                                            controlId="formPasswordConfirm"
                                            label="Password Confirm"
                                            name="passwordConfirm"
                                            placeholder="Please confirm your password"
                                            value={values.passwordConfirm}
                                            type="password"
                                            onChange={onChange}
                                            disabled={false}
                                            icon={<FontAwesomeIcon icon={faLock} size="lg" />}
                                            isValid={touched.passwordConfirm && !errors.passwordConfirm}
                                            isInvalid={!!errors.passwordConfirm}
                                            error={errors.passwordConfirm}
                                        />
                                        <Button
                                            className={classes.submitButton}
                                            type="submit"
                                            size="sm"
                                            disabled={isSubmitting}
                                        >
                                            Sign Up
                                        </Button>
                                    </Form>
                                )}
                            </Formik>
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
