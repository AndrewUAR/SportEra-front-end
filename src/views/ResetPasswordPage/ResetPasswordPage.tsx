import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Col, Container, Form, Nav, Row } from 'react-bootstrap';
import { createUseStyles } from 'react-jss';
import Card from '../../components/Card/Card';
import CardHeader from '../../components/Card/CardHeader';
import CardFooter from '../../components/Card/CardFooter';
import CardBody from '../../components/Card/CardBody';
import FormInput from '../../components/FormInput/FormInput';
import Button from '../../components/Button/Button';
import styles from '../../assets/jss/views/registerLoginPageStyles.jss';

const useStyles = createUseStyles(styles);

const ResetPasswordPage: React.FunctionComponent = (props) => {
    const classes = useStyles();

    const [user, setUser] = useState({
        password: '',
        passwordConfirm: '',
    });

    const [error, setError] = useState({
        passwordError: '',
        passwordConfirmError: '',
    });

    const { password, passwordConfirm } = user;
    const { passwordError, passwordConfirmError } = error;

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
                            <Form>
                                <FormInput
                                    controlId="formPassword"
                                    label="Password"
                                    name="password"
                                    placeholder="Please enter your password"
                                    value={password}
                                    type="password"
                                    onChange={onChange}
                                    disabled={false}
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
                                    isValid={!passwordConfirmError && !!passwordConfirm}
                                    isInvalid={!!passwordConfirmError}
                                    error={passwordConfirmError}
                                />
                                <Button type="submit" size="sm" disabled={false} fullWidth color="blue">
                                    Reset password
                                </Button>
                            </Form>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

ResetPasswordPage.propTypes = {};

export default ResetPasswordPage;
