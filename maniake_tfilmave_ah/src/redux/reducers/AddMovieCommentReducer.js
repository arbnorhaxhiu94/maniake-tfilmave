import firestore from "@react-native-firebase/firestore"
import { device_id } from "../../configs/device_id"
import { addMovieCommentActionError, addMovieCommentActionRequest, addMovieCommentActionSuccess } from "../actions/AddMovieCommentAction"

let initialState = {
    loading: false,
    success: null,
    error: null
}

export const AddMovieCommentsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_MOVIE_COMMENT_REQUEST':
            return {
                ...state,
                loading: true
            }
        case 'ADD_MOVIE_COMMENT_SUCCESS':
            return {
                ...state,
                loading: false,
                success: action.success
            }
        case 'ADD_MOVIE_COMMENT_ERROR':
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

export const addMovieComment = (data) => {
    return async function(dispatch) {
        dispatch(addMovieCommentActionRequest())
        await firestore()
            .collection('movies_comments')
            .doc(device_id+'_'+data.movie_id)
            .set(data)
            .then((response) => {
                console.log(response)
                dispatch(addMovieCommentActionSuccess())
            })
            .catch((e) => {
                console.log(e)
                dispatch(addMovieCommentActionError(e))
            })
    }
}