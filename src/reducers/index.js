import { combineReducers } from 'redux';

import usersListReducer from './usersListReducer';

const rootReducer = combineReducers({
  usersList: usersListReducer
});

export default rootReducer;