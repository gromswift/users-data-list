import * as actions from 'actions/usersListActions';
import SORTING_TYPES from 'constants/sortingTypes'

const initialState = {
  loading: false,
  hasErrors: false,
  list: [],
  sortingType: SORTING_TYPES.id,
  isReversed: false
}

const usersListReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.GET_USERS_LIST:
      return {
        ...state,
        loading: true
      };
    case actions.GET_USERS_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        hasErrors: false,
        list: action.payload
      };
    case actions.GET_USERS_LIST_FAILURE:
      return {
        ...state,
        loading: false,
        hasErrors: true
      };
    case actions.UPDATE_USERS_LIST:
      return {
        ...state,
        list: action.payload
      };
    case actions.SORT_USERS_LIST:
      return {
        ...state,
        loading: false,
        list: action.payload.list,
        sortingType: action.payload.sortingType,
        isReversed: action.payload.shouldUpdate || state.isReversed
      };
    case actions.REVERSE_USERS_LIST:
      return {
        ...state,
        loading: false,
        list: action.payload,
        isReversed: !state.isReversed
      }
    default:
      return state;
  }
}
export default usersListReducer;