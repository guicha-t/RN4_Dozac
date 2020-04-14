import { SET_ERROR, SET_LOADING } from '../actionIds/utils';

export default (state, action) => {
  switch (action.type) {
    case SET_ERROR:
      return { error: action.error, loading: false };
    case SET_LOADING:
      return { error: null, loading: action.loading };
    default:
      return state || { error: null, loading: false };
  }
};
