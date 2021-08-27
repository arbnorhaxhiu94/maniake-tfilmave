import firestore from "@react-native-firebase/firestore"
import { getMovieDetailsActionError, getMovieDetailsActionRequest, getMovieDetailsActionSuccess } from "../actions/GetMovieDetailsAction"

let initialState = {
    loading: false,
    data: null,
    error: null
}

export const GetMovieDetailsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_MOVIE_DETAILS_REQUEST':
            return {
                ...state,
                loading: true
            }
        case 'GET_MOVIE_DETAILS_SUCCESS':
            return {
                ...state,
                loading: false,
                data: action.data
            }
        case 'GET_MOVIE_DETAILS_ERROR':
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

export const getMovieDetails = (movie_id) => {
    return async function(dispatch) {
        dispatch(getMovieDetailsActionRequest())
        await firestore()
            .collection('movies')
            .where('id', '==', movie_id)
            .limit(1)
            .get()
            .then((data) => {
                let data_1 = []
                data.forEach(x => {
                    // console.log('Movie: '+ x.data().long_desc)
                    data_1.push(x.data())
                })
                
                console.log(JSON.stringify(data_1[0]))
                dispatch(getMovieDetailsActionSuccess(data_1[0]))
            })
            .catch((e) => {
                console.log(e)
                dispatch(getMovieDetailsActionError(e))
            })
    }
}