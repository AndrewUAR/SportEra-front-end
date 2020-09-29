import React from 'react';
import PropTypes from 'prop-types';
import { Nav } from 'react-bootstrap';
import { createUseStyles } from 'react-jss';
import styles from '../../assets/jss/components/navBarStyles.jss';

const useStyles = createUseStyles(styles);

const SignOutLinks: React.FC = (props) => {
    const classes = useStyles();

    return (
        <Nav className={classes.navLinks}>
            <Nav.Link href="/register">Sign Up</Nav.Link>
            <Nav.Link href="/login">Sign In</Nav.Link>
        </Nav>
    );
};

SignOutLinks.propTypes = {};

export default SignOutLinks;
