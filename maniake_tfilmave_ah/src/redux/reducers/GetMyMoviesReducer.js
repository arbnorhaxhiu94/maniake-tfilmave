import firestore from "@react-native-firebase/firestore"
import { device_id } from "../../configs/device_id"
import { getMyMoviesActionError, getMyMoviesActionRequest, getMyMoviesActionSuccess } from "../actions/GetMyMoviesAction"

let initialState = {
    loading: false,
    my_movies: null,
    error: null
}

export const GetMyMoviesReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_MY_MOVIES_REQUEST':
            return {
                ...state,
                loading: true
            }
        case 'GET_MY_MOVIES_SUCCESS':
            return {
                ...state,
                loading: false,
                my_movies: action.my_movies
            }
        case 'GET_MY_MOVIES_ERROR':
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

export const getMyMovies = () => {
    return async function(dispatch) {
        dispatch(getMyMoviesActionRequest())
        await firestore()
            .collection('movies_comments')
            .where('id', '==', device_id)
            // .where('movie_name', '==', 'Paul')
            .get()
            .then((data) => {
                let movies = []
                // console.log('Data = '+data.forEach)
                data.forEach((item) => {
                    movies.push(item.data())
                    console.log(typeof(item.data()))
                })
                if (data.empty) {
                    dispatch(getMyMoviesActionSuccess([]))
                } else {
                    dispatch(getMyMoviesActionSuccess(movies))
                }
            })
            .catch((e) => {
                console.log(e)
                dispatch(getMyMoviesActionError(e))
            })
    }
}