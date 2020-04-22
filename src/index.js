import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App/App';
import * as serviceWorker from './serviceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import axios from 'axios';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import {takeEvery, put} from 'redux-saga/effects';

function* rootSaga() {
  yield takeEvery('GET_WINES', getWinesSaga);
  yield takeEvery('GET_WINE_DETAILS', getWineDetails);
}

function* getWinesSaga() {
  try {
      console.log('in getWinesSaga ************');
      
      const getResponse = yield axios.get('/wines');
      // dispatches an action SET_MOVIES with our payload as the response from the DB query
      yield put({type: 'SET_WINES', payload: getResponse.data})
  }
  catch (error){
      console.log('error in getWinesSaga...... error:', error);
  }
}

function* getWineDetails(action) {
  try{
      console.log('in getDetailsSaga ************');

      const getResponse = yield axios.get(`/wines/details/${action.payload}`);
      yield put({type: 'SET_WINE_DETAILS', payload: getResponse.data})
  }
  catch (error){
      console.log(error); 
  }
}

const sagaMiddleware = createSagaMiddleware();

const winesReducer = (state = [], action) => {
  switch (action.type) {
      case 'SET_WINES':
          return action.payload;
      default:
          return state;
  }
}

const detailsReducer = (state = [], action) => {
  switch (action.type) {
      case 'SET_WINE_DETAILS':
          return action.payload;
      default:
          return state;
  }
}

const storeInstance = createStore(
  combineReducers({
    winesReducer,
    detailsReducer
  }),
  // Add sagaMiddleware to our store
  applyMiddleware(sagaMiddleware, logger),
);

sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
