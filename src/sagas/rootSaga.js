import { all, call, put, takeEvery } from "@redux-saga/core/effects";
import { getPosts , addPost} from "../actions/postActions";


function* fetchposts(){
        const res = yield call(getPosts)
        yield put({type: "FETCH_POSTS", payload: res})
        
}

function* addpost(action){
        const res = yield call(addPost, action.payload)
        yield put({type: "NEW_POST", payload: res.payload})
    
}


function* watcherGetSaga(){
    yield takeEvery("FETCH_POSTS_ASYNC", fetchposts);
}

function* watcherPostSaga(){
    yield takeEvery("NEW_POST_ASYNC", addpost);
}

export default function* rootSaga(){
    yield all([
        watcherGetSaga(),
        watcherPostSaga(),
    ])
}