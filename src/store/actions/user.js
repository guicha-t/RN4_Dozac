import { Server } from "../Server";

import { request } from "../actions/utils";
import {
  CONNECTED,
  DISCONNECT,
  USER_INFO,
  CONNECTED,
  CREATE
} from "../actionIds/user";

export const getConnected = params => dispatch => CONNECTED;
