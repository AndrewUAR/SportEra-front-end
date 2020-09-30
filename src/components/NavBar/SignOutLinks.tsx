import React from 'react';
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

export default SignOutLinks;
