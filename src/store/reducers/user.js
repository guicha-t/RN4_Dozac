import {
  CONNECT,
  DISCONNECT,
  USER_INFO,
  CONNECTED,
  CREATE,
  CREATED
} from '../actionIds/user';

export default (state, action) => {
  switch (action.type) {
    case CONNECT:
      return { ...state, email: action.email, pwd: action.pwd};
    case DISCONNECT:
      return { ...state, connected: false, token: null };
    case USER_INFO:
      return { ...state, token: action.token, userInfo: action.userInfo };
    case CONNECTED:
      return { ...state, connected: action.connected };
    case CREATE:
      return { ...state };
    case CREATED:
      return { ...state, created: action.created };
    default:
      return state || { connected: null, created: null, userInfo: {}, token: null };
  }
};

export const getConnected = () => true;