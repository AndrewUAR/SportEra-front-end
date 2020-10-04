import { ActionCreator, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import {
    AUTHENTICATE_USER,
    IAuthenticateUserAction,
    IRegisterUserAction,
    REGISTER_USER,
    UserLoginState,
    UserRegisterState,
} from '../constants/auth';
import { signInUser, signUpUser } from '../services/auth.service';
import { RootState } from '../reducers/rootReducer';

export const registerUser: ActionCreator<ThunkAction<
    Promise<void>,
    RootState,
    UserRegisterState,
    IRegisterUserAction
>> = (userData: UserRegisterState) => async (dispatch: Dispatch) => {
    try {
        await signUpUser(userData);
        const message = 'Your account was successfully created. Verification email was sent to your email address.';
        dispatch({
            type: REGISTER_USER,
            payload: message,
        });
    } catch (error) {
        console.log(error);
    }
};

export const authenticateUser: ActionCreator<ThunkAction<
    Promise<void>,
    RootState,
    UserRegisterState,
    IAuthenticateUserAction
>> = (userData: UserLoginState) => async (dispatch: Dispatch) => {
    try {
        const user = await signInUser(userData);
        dispatch({
            type: AUTHENTICATE_USER,
            payload: user.data,
        });
    } catch (error) {
        console.log(error);
    }
};
