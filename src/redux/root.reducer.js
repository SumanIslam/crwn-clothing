import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import CartReducer from './cart/cart.reducer';
import UserReducer from './user/user.reducer';
import directoryReducer from './directory/directory.reducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart'],
};

const rootReducer = combineReducers({
  user: UserReducer,
  cart: CartReducer,
  directory: directoryReducer,
});

export default persistReducer(persistConfig, rootReducer);
