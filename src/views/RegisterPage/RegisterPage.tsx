import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Form } from 'react-bootstrap';
import FormInput from '../../components/FormInput/FormInput';

const RegisterPage: React.FC = (props) => {
    const [user, setUser] = useState({
        username: '',
        email: '',
        password: '',
        passwordConfirm: '',
    });

    const [error, setError] = useState({
        usernameError: '',
        emailError: '',
        password: '',
        passwordConfirm: '',
    });

    const { username, email, password, passwordConfirm } = user;

    const onChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        console.log(event.target.value);
        const { name, value } = event.target;
        setUser((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    return (
        <div className="container">
            <Form className="card col-md-4">
                <FormInput
                    controlId="formUsername"
                    label="Username"
                    name="username"
                    placeholder="Username"
                    value={username}
                    onChange={onChange}
                    disabled={false}
                />
                <FormInput
                    controlId="formEmail"
                    label="Email"
                    name="email"
                    placeholder="Email"
                    value={email}
                    onChange={onChange}
                    disabled={false}
                />
                <FormInput
                    controlId="formPassword"
                    label="Password"
                    name="password"
                    placeholder="Password"
                    value={password}
                    onChange={onChange}
                    disabled={false}
                />
                <FormInput
                    controlId="formPasswordConfirm"
                    label="Password Confirm"
                    name="passwordConfirm"
                    placeholder="Password Confirm"
                    value={passwordConfirm}
                    onChange={onChange}
                    disabled={false}
                />
                <Button variant="primary" type="submit">
                    Sign Up
                </Button>
            </Form>
        </div>
    );
};

RegisterPage.propTypes = {};

export default RegisterPage;