import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { AddMovieCommentsReducer } from './reducers/AddMovieCommentReducer';
import { GetMovieCommentsReducer } from './reducers/GetMovieCommentsReducer';
import { GetMovieDetailsReducer } from './reducers/GetMovieDetailsReducer';
import { GetMyMoviesReducer } from './reducers/GetMyMoviesReducer';
import { GetRecommendedMoviesReducer } from './reducers/GetRecommendedMoviesReducer';

// Note: this API requires redux@>=3.1.0

const rootReducer = combineReducers({
    getRecommendedMoviesReducer: GetRecommendedMoviesReducer,
    getMovieCommentsReducer: GetMovieCommentsReducer,
    addMovieCommentsReducer: AddMovieCommentsReducer,
    getMyMoviesReducer: GetMyMoviesReducer,
    getMovieDetailsReducer: GetMovieDetailsReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store