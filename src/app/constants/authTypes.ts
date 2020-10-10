import { Action } from 'redux';
import { IAuthState } from '../states/authState';

export const REGISTER_USER = 'REGISTER_USER';
export const AUTHENTICATE_USER = 'AUTHENTICATE_USER';
export const CONFIRM_ACCOUNT = 'CONFIRM_ACCOUNT';
export const LOGOUT = 'LOGOUT';

export type UserRegisterState = {
    username: string;
    email: string;
    password: string;
    passwordConfirm: string;
};

export type UserLoginState = {
    username: string;
    password: string;
};

// export interface IRegisterUserAction extends Action<typeof REGISTER_USER> {
//     type: typeof REGISTER_USER;
// }

export interface IAuthenticateUserAction extends Action<typeof AUTHENTICATE_USER> {
    type: typeof AUTHENTICATE_USER;
    payload: IAuthState;
}

export interface LogoutAction extends Action<typeof LOGOUT> {
    type: typeof LOGOUT;
}

// export interface ConfirmAccountAction extends Action<typeof CONFIRM_ACCOUNT> {
//     type: typeof CONFIRM_ACCOUNT;
// }

export type AuthActionTypes = IAuthenticateUserAction | LogoutAction;
