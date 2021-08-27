import firestore from "@react-native-firebase/firestore"
import { getMovieCommentsActionError, getMovieCommentsActionRequest, getMovieCommentsActionSuccess } from "../actions/GetMovieCommentsAction"

let initialState = {
    loading: false,
    comments: null,
    error: null
}

export const GetMovieCommentsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_MOVIE_COMMENTS_REQUEST':
            return {
                ...state,
                loading: true
            }
        case 'GET_MOVIE_COMMENTS_SUCCESS':
            return {
                ...state,
                loading: false,
                comments: action.comments
            }
        case 'GET_MOVIE_COMMENTS_ERROR':
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

export const getMovieComments = (movie_id) => {
    return async function(dispatch) {
        dispatch(getMovieCommentsActionRequest())
        await firestore()
            .collection('movies_comments')
            .where('movie_id', '==', movie_id)
            // .orderBy('time', 'desc')
            .get()
            .then((data) => {
                let comments = []
                console.log('Data = '+data)
                data.forEach((item) => {
                    comments.push(item.data())
                    console.log(typeof(item.data()))
                })
                if (data.empty) {
                    dispatch(getMovieCommentsActionSuccess([]))
                } else {
                    dispatch(getMovieCommentsActionSuccess(comments))
                }
            })
            .catch((e) => {
                console.log('Error: '+ e)
                dispatch(getMovieCommentsActionError(e))
            })
    }
}