import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from '@redux-saga/core';
import rootReducer from './reducers'
import rootSaga  from './sagas/rootSaga';


const initialState = {}
const sagaMiddleware = createSagaMiddleware()
const middleware = [sagaMiddleware]

const store = createStore(rootReducer, initialState, 
    compose(applyMiddleware(...middleware), 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
    
)


sagaMiddleware.run(rootSaga)


export default store