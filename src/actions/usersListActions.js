import { compareNum, compareStr } from 'utils/sortingMethods';
import updateLocationQuery from 'utils/updateLocationQuery';

export const GET_USERS_LIST = 'GET_USERS_LIST';
export const GET_USERS_LIST_SUCCESS = 'GET_USERS_LIST_SUCCESS';
export const GET_USERS_LIST_FAILURE = 'GET_USERS_LIST_FAILURE';
export const UPDATE_USERS_LIST = 'UPDATE_USERS_LIST';
export const SORT_USERS_LIST = 'SORT_USERS_LIST';
export const REVERSE_USERS_LIST = 'REVERSE_USERS_LIST';

export const getUsersList = () => ({
  type: GET_USERS_LIST
});
export const getUsersListSuccess = (list) => ({
  type: GET_USERS_LIST_SUCCESS,
  payload: list
});
export const getUsersListFailure = () => ({
  type: GET_USERS_LIST_FAILURE
});
export const updateFavorite = (userId, usersList) => {
  const usersListClone = JSON.parse(JSON.stringify(usersList));

  usersListClone.forEach(currUser => {
    if (currUser.id === userId) {
      currUser.favourite = !currUser.favourite;
    }
  })

  return {
    type: UPDATE_USERS_LIST,
    payload: usersListClone
  };
};

export const sortUsersList = ({usersList, type, isReversed, isSortingValueStr, shouldUpdate}) => {
  const usersListClone = JSON.parse(JSON.stringify(usersList));

  usersListClone.sort(
    (a, b) => isSortingValueStr ? compareStr(a[type], b[type]) : compareNum(a[type], b[type])
  );

  if (isReversed) {
    usersListClone.reverse();
  }

  updateLocationQuery('sorting_type', type);

  return {
    type: SORT_USERS_LIST,
    payload: {list: usersListClone, sortingType: type, shouldUpdate: shouldUpdate}
  };
};

export const reverseUsersList = (usersList, isReversed) => {
  const usersListClone = JSON.parse(JSON.stringify(usersList));

  usersListClone.reverse();
  updateLocationQuery('is_reversed', !isReversed);

  return {
    type: REVERSE_USERS_LIST,
    payload: usersListClone
  };
}
