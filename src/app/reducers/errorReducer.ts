import _ from 'lodash';
import { Reducer } from 'react';
import { ErrorActionTypes, HIDE_ERROR, SET_ERROR } from '../constants/errorTypes';
import { IErrorState } from '../states/errorState';

export const initialState = {
    error: '',
    validationErrors: {
        username: '',
        email: '',
        password: '',
    },
};

const errorReducer: Reducer<IErrorState, ErrorActionTypes> = (state = initialState, action): IErrorState => {
    switch (action.type) {
        case SET_ERROR: {
            return {
                ...state,
                error: action.payload.error || '',
                validationErrors: {
                    username: _.hasIn(action.payload, 'validationErrors')
                        ? action.payload.validationErrors.username
                        : '',
                    email: _.hasIn(action.payload, 'validationErrors') ? action.payload.validationErrors.email : '',
                    password: _.hasIn(action.payload, 'validationErrors')
                        ? action.payload.validationErrors.password
                        : '',
                },
            };
        }
        case HIDE_ERROR: {
            return {
                ...state,
                error: '',
                validationErrors: {
                    username: '',
                    email: '',
                    password: '',
                },
            };
        }
        default:
            return state;
    }
};

export default errorReducer;
