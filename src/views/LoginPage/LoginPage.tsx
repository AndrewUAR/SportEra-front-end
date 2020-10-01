import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Col, Container, Nav, Row, Button } from 'react-bootstrap';
import { createUseStyles } from 'react-jss';
import classNames from 'classnames';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUserCircle, faLock } from '@fortawesome/free-solid-svg-icons';
import Card from '../../components/Card/Card';
import CardHeader from '../../components/Card/CardHeader';
import CardFooter from '../../components/Card/CardFooter';
import CardBody from '../../components/Card/CardBody';
import FormInput from '../../components/FormInput/FormInput';
import styles from '../../assets/jss/views/registerLoginPageStyles.jss';

library.add(faUserCircle, faLock);

const useStyles = createUseStyles(styles);

const schema = Yup.object().shape({
    username: Yup.string().required('Username is missing'),
    password: Yup.string().required('Password is missing'),
});

type UserState = {
    username: string;
    password: string;
};

const LoginPage: React.FC = (props) => {
    const classes = useStyles();

    const [user, setUser] = useState<UserState>({
        username: '',
        password: '',
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
                            <h3 className={`${classes.cardTitle} ${classes.loginRegisterTitle}`}>SIGN IN</h3>
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
                                    <Form>
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
                                        <Button
                                            className={classes.submitButton}
                                            type="submit"
                                            size="sm"
                                            disabled={isSubmitting}
                                        >
                                            Sign In
                                        </Button>
                                    </Form>
                                )}
                            </Formik>
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
