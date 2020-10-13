import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Col, Container, Row, Button } from 'react-bootstrap';
import { createUseStyles } from 'react-jss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import Card from '../../components/Card/Card';
import CardHeader from '../../components/Card/CardHeader';
import CardBody from '../../components/Card/CardBody';
import FormInput from '../../components/FormInput/FormInput';
import styles from '../../assets/jss/views/registerLoginPageStyles.jss';

library.add(faLock);

const useStyles = createUseStyles(styles);

const schema = Yup.object().shape({
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
    password: string;
    passwordConfirm: string;
};

const ResetPasswordPage: React.FC = (props) => {
    const classes = useStyles();

    const [user, setUser] = useState<UserState>({
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
                            <h3 className={`${classes.cardTitle} ${classes.forgotResetTitle}`}>Update Password</h3>
                        </CardHeader>
                        <CardBody>
                            <Formik
                                validationSchema={schema}
                                // eslint-disable-line
                                onSubmit={(values, actions) => {
                                    actions.setSubmitting(false);
                                }}
                                initialValues={{ ...user }}
                                enableReinitialize
                            >
                                {({ values, touched, errors, isSubmitting }) => (
                                    <Form noValidate>
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
                                            Reset password
                                        </Button>
                                    </Form>
                                )}
                            </Formik>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

ResetPasswordPage.propTypes = {};

export default ResetPasswordPage;
