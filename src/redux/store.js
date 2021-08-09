import createSagaMiddleware from '@redux-saga/core';
import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import { persistStore } from 'redux-persist';
import rootReducer from './root.reducer';
import rootSaga from './root.saga';

const sagaMiddleWares = createSagaMiddleware();
const middlewares = [sagaMiddleWares];
if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
}
export const store = createStore(rootReducer, applyMiddleware(...middlewares));

sagaMiddleWares.run(rootSaga);
export const persistor = persistStore(store);
