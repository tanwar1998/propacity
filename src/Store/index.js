import { createStore, applyMiddleware } from "redux";
import rootReducer from "./Reducers/index.js";
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';


const persistConfig = {
    key: 'storage',
    storage: storage,
    whitelist: ['storage']
};
const pReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(pReducer, window.REDUX_INITIAL_DATA, applyMiddleware(thunk));
const persistor = persistStore(store);

export { store, persistor };
