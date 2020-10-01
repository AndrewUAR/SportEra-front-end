import React, { useState } from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import { createUseStyles } from 'react-jss';
import * as Yup from 'yup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Form, Formik } from 'formik';
import Card from '../../components/Card/Card';
import CardHeader from '../../components/Card/CardHeader';
import CardBody from '../../components/Card/CardBody';
import FormInput from '../../components/FormInput/FormInput';
import styles from '../../assets/jss/views/registerLoginPageStyles.jss';

library.add(faEnvelope);

const useStyles = createUseStyles(styles);

const schema = Yup.object().shape({
    email: Yup.string()
      .email('Provided email is invalid')
      .required('Please provide your recovery email'),
});

const ForgotPasswordPage: React.FunctionComponent = (props) => {
    const classes = useStyles();

    const [email, setEmail] = useState<string>('');

    const onChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        const { value } = event.target;
        setEmail(value);
    };

    return (
        <Container className={classes.pageHeader}>
            <Row className={classes.row}>
                <Col sm={11} md={8} lg={5}>
                    <Card loginRegisterCard>
                        <CardHeader loginRegisterHeader>
                            <h3 className={`${classes.cardTitle} ${classes.forgotResetTitle}`}>Reset Password</h3>
                        </CardHeader>
                        <CardBody>
                            <Formik
                                validationSchema={schema}
                                onSubmit={(values, actions) => {
                                    console.log(values);
                                    actions.setSubmitting(false);
                                }}
                                initialValues={{ email }}
                                enableReinitialize
                            >
                                {({ values, touched, errors, isSubmitting }) => (
                                    <Form noValidate>
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
                                        <Button
                                            className={classes.submitButton}
                                            type="submit"
                                            disabled={isSubmitting}
                                            size="sm"
                                        >
                                            Send password reset email
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

export default ForgotPasswordPage;
