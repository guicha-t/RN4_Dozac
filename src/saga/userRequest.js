import axios from "axios";
import { call, put } from "redux-saga/effects";

function FetchLogIn({email, pwd}) {

    return axios({
        method: 'POST',
        url: 'http://193.70.90.162:3000/auth/login',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
        data: {
            'email': email,
            'password': pwd,
        }
    })
}


export function* workerUserConnect(data){
    try{
        console.log(data);
        const response = yield call(FetchLogIn, data);
        console.log("response", response);
        if (response.status === 200) {
            console.log(200);
            yield put({ type: 'USER_INFO', token: response.data.token, userInfo: response.data.user });
            yield put ({type : 'CONNECTED'})
        }
    }catch (e) {
        console.log("error ", e)
        yield put({ type: "ERROR"});
    }
}

function FetchUserCreate({email, pwd}) {

    return axios({
        method: 'POST',
        url: 'http://193.70.90.162:3000/auth/signup',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
        data: {
            'email': email,
            'password': pwd,
        }
    })
}

export function* workerUserCreate(data){
    try{
        console.log(data);
        const response = yield call(FetchUserCreate, data);
        console.log("response", response);
        if (response.status === 200) {
            console.log(200);
            yield put ({type : 'CREATED'})
        }
    }catch (e) {
        console.log("error ", e)
        yield put({ type: "ERROR"});
    }
}