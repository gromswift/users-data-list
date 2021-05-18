import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import request from 'superagent';

import Main from 'components/Main/Main';
import { getUsersList, getUsersListSuccess, getUsersListFailure, sortUsersList, reverseUsersList } from "actions/usersListActions";
import getUrlParams from "utils/getUrlParams";
import SORTING_TYPES from 'constants/sortingTypes';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    fetchUsersList();
  }, []);

  const fetchUsersList = () => {
    dispatch(getUsersList());

    request('GET', '/assets/data.json')
      .then(res => {
        const queries = getUrlParams(window.location.search);
        const isReversed = queries.is_reversed === 'true';
        if (SORTING_TYPES[queries.sorting_type]) {
          dispatch(
            sortUsersList({
              usersList: res.body,
              type: queries.sorting_type,
              isReversed: isReversed,
              isSortingValueStr: queries.sorting_type === SORTING_TYPES.name,
              shouldUpdate: isReversed
            })
          );

          return;
        }

        if (isReversed) {
          dispatch(reverseUsersList(res.body, !isReversed));

          return;
        }

        dispatch(getUsersListSuccess(res.body));
      })
      .catch(err => {
        dispatch(getUsersListFailure(err));
      })
  }

  return (
    <div>
      <Main />
    </div>
  );
}

export default App;