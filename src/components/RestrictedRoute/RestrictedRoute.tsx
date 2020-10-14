import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';
import { RootState } from '../../app/reducers/rootReducer';

type RestrictedRouteProps = {
    component: React.ElementType;
    path: string;
};

const mapStateToProps = (state: RootState) => ({
    isLoggedIn: state.auth.loggedIn,
});

const connector = connect(mapStateToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;
type RestrictedRouteTypes = PropsFromRedux & RestrictedRouteProps;

const RestrictedRoute: React.FC<RestrictedRouteTypes> = (props: RestrictedRouteTypes) => {
    const { isLoggedIn, component: Component, ...rest } = props;
    return (
        <Route
            {...rest}
            render={(routeProps) => (!isLoggedIn ? <Component {...routeProps} /> : <Redirect to={{ pathname: '/' }} />)}
        />
    );
};

export default connector(RestrictedRoute);
