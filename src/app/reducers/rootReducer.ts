import { combineReducers, Reducer } from 'redux';
import { PersistConfig, persistReducer, PersistState } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { AuthActionTypes, LOGOUT } from '../constants/authTypes';
import { ErrorActionTypes } from '../constants/errorTypes';
import { IAuthState } from '../states/authState';
import { IErrorState } from '../states/errorState';
import authReducer from './authReducer';
import errorReducer from './errorReducer';

export type RootState = {
    auth: IAuthState;
    error: IErrorState;
    _persist?: PersistState;
};

export type RootAction = AuthActionTypes | ErrorActionTypes;

export type RootReducer = Reducer<RootState, RootAction>;

const persistConfig: PersistConfig<RootReducer> = {
    key: 'root',
    storage,
};

export const appReducers = combineReducers<RootReducer>({
    auth: authReducer,
    error: errorReducer,
});

const rootReducer = (state: RootReducer | undefined, action: RootAction) => {
    if (action.type === LOGOUT) {
        localStorage.clear();
        return appReducers(undefined, action);
    }
    return appReducers(state, action);
};

export const persistedReducer = persistReducer(persistConfig, rootReducer);
