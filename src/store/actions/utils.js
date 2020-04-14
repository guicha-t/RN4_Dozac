import { SET_ERROR, SET_LOADING } from '../actionIds/utils';

export const setError = error => dispatch => dispatch({ type: SET_ERROR, error });
export const setLoading = loading => dispatch => dispatch({ type: SET_LOADING, loading });

const sleep = seconds => new Promise(resolve => setTimeout(resolve, seconds * 1000));

export const request = (dispatch, method, params, type) => {
  dispatch({ type: SET_LOADING, loading: true });
  return method(params)
    .then(data => {
      // console.log("REQUEST", data);
      dispatch({ type: SET_LOADING, loading: false });
      dispatch({ type, ...data });
    })
    .catch(error => dispatch({ type: SET_ERROR, error }));
};
