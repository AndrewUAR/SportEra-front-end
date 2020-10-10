import { createStore, applyMiddleware, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { persistStore } from 'redux-persist';
import { number } from 'yup';
import { persistedReducer, RootReducer, RootState } from '../reducers/rootReducer';
import { IErrorState } from '../states/errorState';
import { IAuthState } from '../states/authState';
import { initialState as authInitialState } from '../reducers/authReducer';
import { initialState as errorInitialState } from '../reducers/errorReducer';

const initialState: RootState = {
    auth: authInitialState,
    error: errorInitialState,
    _persist: {
        version: 1,
        rehydrated: false,
    },
};

const middlewares = [thunk];

const configureStore = (): Store<RootReducer> => {
    const store = createStore(persistedReducer, initialState, composeWithDevTools(applyMiddleware(...middlewares)));
    return store;
};

const store = configureStore();
const persistor = persistStore(store);

export { store, persistor };
