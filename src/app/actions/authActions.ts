import { ActionCreator, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { AUTHENTICATE_USER, IAuthenticateUserAction, UserLoginState, UserRegisterState } from '../constants/authTypes';
import { forgotPassword, signInUser, signOutUser, signUpUser } from '../services/auth.service';
import { RootState } from '../reducers/rootReducer';
import { SET_ERROR } from '../constants/errorTypes';

export const registerUser: ActionCreator<ThunkAction<
    Promise<void>,
    RootState,
    UserRegisterState,
    IAuthenticateUserAction
>> = (userData: UserRegisterState) => async (dispatch: Dispatch) => {
    try {
        await signUpUser(userData);
    } catch (error) {
        dispatch({
            type: SET_ERROR,
            payload: {
                error: error.response.data.message,
                validationErrors: error.response.data.validationErrors,
            },
        });
    }
};

export const authenticateUser: ActionCreator<ThunkAction<
    Promise<void>,
    RootState,
    UserLoginState,
    IAuthenticateUserAction
>> = (userData: UserLoginState) => async (dispatch: Dispatch) => {
    try {
        const user = await signInUser(userData);
        dispatch({
            type: AUTHENTICATE_USER,
            payload: user.data,
        });
    } catch (error) {
        console.log(error.response.data.message);
        dispatch({
            type: SET_ERROR,
            payload: {
                error: error.response.data.message,
            },
        });
    }
};

export const logout: ActionCreator<ThunkAction<Promise<void>, RootState, null, IAuthenticateUserAction>> = () => async (
    dispatch: Dispatch,
) => {
    try {
        await signOutUser();
        dispatch({ type: 'LOGOUT' });
    } catch (error) {
        console.log(error.response.data.message);
        dispatch({
            type: SET_ERROR,
            payload: {
                error: error.response.data.message,
            },
        });
    }
};

export const forgotUserPassword: ActionCreator<ThunkAction<
    Promise<void>,
    RootState,
    { userEmail: string },
    IAuthenticateUserAction
>> = (userEmail: string) => async (dispatch: Dispatch) => {
    try {
        await forgotPassword(userEmail);
    } catch (error) {
        dispatch({
            type: SET_ERROR,
            payload: {
                error: error.response.data.message,
                validationErrors: error.response.data.validationErrors,
            },
        });
    }
};
