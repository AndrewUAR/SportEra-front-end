import React from 'react';
import PropTypes from 'prop-types';
import { createUseStyles } from 'react-jss';
import Navbar from 'react-bootstrap/esm/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faVolleyballBall } from '@fortawesome/free-solid-svg-icons';
import SignOutLinks from './SignOutLinks';
import styles from '../../assets/jss/components/navBarStyles.jss';

library.add(faVolleyballBall);

const useStyles = createUseStyles(styles);

const NavBar: React.FC = (props) => {
    const classes = useStyles();

    return (
        <Navbar className={classes.navBar} sticky="top">
            <Navbar.Brand className={classes.brand} href="/">
                Sp
                <FontAwesomeIcon icon="volleyball-ball" size="lg" />
                rtEra
            </Navbar.Brand>
            <SignOutLinks />
        </Navbar>
    );
};

NavBar.propTypes = {};

export default NavBar;
