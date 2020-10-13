import _ from 'lodash';
import { Reducer } from 'react';

import { AUTHENTICATE_USER, AuthActionTypes } from '../constants/authTypes';
import { IAuthState } from '../states/authState';

export const initialState = {
    loggedIn: false,
    username: '',
    email: '',
    role: '',
    profileImage: '',
};

const authReducer: Reducer<IAuthState, AuthActionTypes> = (state = initialState, action): IAuthState => {
    switch (action.type) {
        case AUTHENTICATE_USER: {
            return {
                ...state,
                loggedIn: !_.isEmpty(action.payload),
                username: action.payload.username || '',
                email: action.payload.email || '',
                role: action.payload.role || '',
                profileImage: action.payload.profileImage || '',
            };
        }
        default:
            return state;
    }
};

export default authReducer;
