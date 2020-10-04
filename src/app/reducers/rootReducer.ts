import { CombinedState, combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { AuthActionTypes, LOGOUT } from '../constants/auth';
import authReducer from './authReducer';

const persistConfig = {
    key: 'root',
    storage,
};

export const appReducers = combineReducers({
    auth: authReducer,
});

export type RootState = ReturnType<typeof appReducers>;

const rootReducer = (state: CombinedState<RootState> | undefined, action: AuthActionTypes) => {
    if (action.type === LOGOUT) {
        state = undefined;
        localStorage.clear();
    }
    return appReducers(state, action);
};

export const persistedReducer = persistReducer(persistConfig, rootReducer);
