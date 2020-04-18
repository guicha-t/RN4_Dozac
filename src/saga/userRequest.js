/* eslint-disable no-console */
import axios from 'axios';
import { call, put } from 'redux-saga/effects';

function FetchLogIn({ email, pwd }) {
  return axios({
    method: 'POST',
    url: 'http://193.70.90.162:3000/auth/login',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    data: {
      email,
      password: pwd,
    },
  });
}

export function* workerUserConnect(data) {
  try {
    const response = yield call(FetchLogIn, data);
    if (response.status === 200) {
      yield put({ type: 'USER_INFO', token: response.data.token, userInfo: response.data.user });
      yield put({ type: 'CONNECTED', connected: true });
    }
  } catch (e) {
    console.log('error ', e);
    yield put({ type: 'CONNECTED', connected: false });
  }
}

function FetchUserCreate({ email, pwd }) {
  return axios({
    method: 'POST',
    url: 'http://193.70.90.162:3000/auth/signup',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    data: {
      email,
      password: pwd,
    },
  });
}

export function* workerUserCreate(data) {
  try {
    const response = yield call(FetchUserCreate, data);
    if (response.status === 200) {
      yield put({ type: 'CREATED', created: true });
    }
  } catch (e) {
    console.log('error ', e);
    yield put({ type: 'CREATED', created: false });
  }
}
