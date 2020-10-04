import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { persistStore } from 'redux-persist';
import { persistedReducer } from '../reducers/rootReducer';

const initialState = {};
const middlewares = [thunk];

function configureStore() {
    const store = createStore(persistedReducer, initialState, composeWithDevTools(applyMiddleware(...middlewares)));
    return store;
}

const store = configureStore();
const persistor = persistStore(store);

export { store, persistor };
