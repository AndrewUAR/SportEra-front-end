import React from 'react';
import PropTypes from 'prop-types';
import { createUseStyles } from 'react-jss';
import Navbar from 'react-bootstrap/esm/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faVolleyballBall } from '@fortawesome/free-solid-svg-icons';
import { connect, ConnectedProps } from 'react-redux';
import SignOutLinks from './SignOutLinks';
import styles from '../../assets/jss/components/navBarStyles.jss';
import { RootState } from '../../app/reducers/rootReducer';
import SignInLinks from './SignInLinks';

library.add(faVolleyballBall);

const useStyles = createUseStyles(styles);

const mapStateToProps = (state: RootState) => ({
    loggedIn: state.auth.loggedIn,
});

const connector = connect(mapStateToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;
type NavBarProps = PropsFromRedux;

const NavBar: React.FC<NavBarProps> = (props: NavBarProps) => {
    const { loggedIn } = props;
    const classes = useStyles();

    return (
        <Navbar className={classes.navBar} sticky="top">
            <Navbar.Brand className={classes.brand} href="/">
                Sp
                <FontAwesomeIcon icon="volleyball-ball" size="lg" />
                rtEra
            </Navbar.Brand>
            {loggedIn ? <SignInLinks /> : <SignOutLinks />}
        </Navbar>
    );
};

NavBar.propTypes = {};

export default connector(NavBar);
