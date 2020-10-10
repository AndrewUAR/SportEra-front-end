import { Action } from 'redux';
import { IErrorState } from '../states/errorState';

export const SET_ERROR = 'SET_ERROR';
export const HIDE_ERROR = 'HIDE_ERROR';

export interface ISetErrorAction extends Action<typeof SET_ERROR> {
    type: typeof SET_ERROR;
    payload: IErrorState;
}

export interface IHideErrorAction extends Action<typeof HIDE_ERROR> {
    type: typeof HIDE_ERROR;
}

export type ErrorActionTypes = ISetErrorAction | IHideErrorAction;
