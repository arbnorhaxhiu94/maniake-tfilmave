import firestore from "@react-native-firebase/firestore"
import { getRecommendedMoviesActionError, getRecommendedMoviesActionRequest, getRecommendedMoviesActionSuccess } from "../actions/GetRecommendedMoviesAction"

let initialState = {
    loading: false,
    movies: null,
    error: null
}

export const GetRecommendedMoviesReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_RECOMMENDED_MOVIES_REQUEST':
            return {
                ...state,
                loading: true
            }
        case 'GET_RECOMMENDED_MOVIES_SUCCESS':
            return {
                ...state,
                loading: false,
                movies: action.movies
            }
        case 'GET_RECOMMENDED_MOVIES_ERROR':
            return {
                ...state,
                loading: false,
                error: action.error
            }
        default:
            return {
                ...state
            }
    }
}

export const getRecommendedMovies = () => {
    return async function(dispatch) {
        dispatch(getRecommendedMoviesActionRequest())
        await firestore()
            .collection('movies')
            .orderBy('created_at', 'desc')
            .limit(20)
            .get()
            .then((data) => {
                let movies = []
                // console.log('Data = '+data.forEach)
                data.forEach((item) => {
                    movies.push(item.data())
                    console.log(typeof(item.data()))
                })
                if (data.empty) {
                    dispatch(getRecommendedMoviesActionSuccess([]))
                } else {
                    dispatch(getRecommendedMoviesActionSuccess(movies))
                }
            })
            .catch((e) => {
                console.log(e)
                dispatch(getRecommendedMoviesActionError(e))
            })
    }
}