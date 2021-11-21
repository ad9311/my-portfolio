import { createStore, combineReducers, applyMiddleware } from 'redux';
// import logger from 'redux-logger';
import projectsSlice from './projects/projectsSlice';

const combineMiddleware = [];

const reducer = combineReducers(
  {
    projects: projectsSlice.reducer,
  },
);

const store = createStore(
  reducer,
  applyMiddleware(...combineMiddleware),
);

export default store;
