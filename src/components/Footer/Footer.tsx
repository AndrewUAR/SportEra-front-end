import React from 'react';
import PropTypes from 'prop-types';
import { createUseStyles } from 'react-jss';
import { Nav, Navbar } from 'react-bootstrap';
import styles from '../../assets/jss/components/footerStyles.jss';

const useStyles = createUseStyles(styles);

const Footer: React.FC = (props) => {
    const classes = useStyles();
    return (
        <Navbar className={classes.footer} sticky="bottom">
            <Nav className={classes.footerLinks}>
                <Nav.Link href="#home">About</Nav.Link>
                <Nav.Link href="#link">Privacy Policy</Nav.Link>
                <Nav.Link href="#link">Contact Us</Nav.Link>
            </Nav>
            <Navbar.Text className={classes.text}>
                &copy; All rights reserved. This project was built by Andrew Riznyk.
            </Navbar.Text>
        </Navbar>
    );
};

Footer.propTypes = {};

export default Footer;
