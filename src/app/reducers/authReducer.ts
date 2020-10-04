import _ from 'lodash';
import { Reducer } from 'react';

import { AUTHENTICATE_USER, AuthActionTypes, REGISTER_USER, LOGOUT } from '../constants/auth';
import { IAuthState } from '../states/authState';

const initialState: IAuthState = {
    loggedIn: false,
    username: '',
    email: '',
    role: '',
    profileImage: '',
    loading: false,
};

const authReducer: Reducer<IAuthState, AuthActionTypes> = (state = initialState, action) => {
    switch (action.type) {
        case AUTHENTICATE_USER: {
            console.log(action);
            // const {username, email} = action.payload;
            return {
                ...state,
                ...action.payload,
                loggedIn: true,
            };
        }
        default:
            return state;
    }
};

export default authReducer;
