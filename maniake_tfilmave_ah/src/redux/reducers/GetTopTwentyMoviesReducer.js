import firestore from "@react-native-firebase/firestore"
import { getTopTwentyMoviesActionError, getTopTwentyMoviesActionRequest, getTopTwentyMoviesActionSuccess } from "../actions/GetTopTwentyMoviesAction"

let initialState = {
    loading: false,
    top_movies: null,
    error: null
}

export default function GetTopTwentyMoviesReducer(state = initialState, action) {
    switch (action.type) {
        case 'GET_TOP20_MOVIES_REQUEST':
            return {
                ...state,
                loading: true
            }
        case 'GET_TOP20_MOVIES_SUCCESS':
            return {
                ...state,
                loading: false,
                top_movies: action.top_movies
            }
        case 'GET_TOP20_MOVIES_ERROR':
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

export const getTopTwentyMovies = () => {

    return async function(dispatch) {
        console.log('call')
        dispatch(getTopTwentyMoviesActionRequest())
        await firestore()
            .collection('movies')
            .orderBy('maniaket', 'desc')
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
                    dispatch(getTopTwentyMoviesActionSuccess([]))
                } else {
                    dispatch(getTopTwentyMoviesActionSuccess(movies))
                }
            })
            .catch((e) => {
                console.log(e)
                dispatch(getTopTwentyMoviesActionError(e))
            })
    }
}