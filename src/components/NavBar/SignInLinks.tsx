import React from 'react';
import { Nav } from 'react-bootstrap';
import { createUseStyles } from 'react-jss';
import styles from '../../assets/jss/components/navBarStyles.jss';

const useStyles = createUseStyles(styles);

const SignInLinks: React.FC = () => {
    const classes = useStyles();

    return (
        <Nav className={classes.navLinks}>
            <Nav.Link href="/logout">Sign Out</Nav.Link>
        </Nav>
    );
};

export default SignInLinks;
