import React, { useState } from 'react';
import { Col, Container, Form, Nav, Row } from 'react-bootstrap';
import { createUseStyles } from 'react-jss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Card from '../../components/Card/Card';
import CardHeader from '../../components/Card/CardHeader';
import CardFooter from '../../components/Card/CardFooter';
import CardBody from '../../components/Card/CardBody';
import FormInput from '../../components/FormInput/FormInput';
import Button from '../../components/Button/Button';
import styles from '../../assets/jss/views/registerLoginPageStyles.jss';

library.add(faEnvelope);

const useStyles = createUseStyles(styles);

const ForgotPasswordPage: React.FunctionComponent = (props) => {
    const classes = useStyles();

    const [email, setEmail] = useState<string>('');

    const [emailError, setEmailError] = useState<string>('');

    const onChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        const { name } = event.target;
        setEmail(email);
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
                            <Form>
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
                                <Button type="submit" size="sm" disabled={false} fullWidth color="blue" rounded>
                                    Send password reset email
                                </Button>
                            </Form>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default ForgotPasswordPage;
