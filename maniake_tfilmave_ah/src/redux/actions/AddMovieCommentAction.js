export const addMovieCommentActionRequest = () => {
    return {
        type: 'ADD_MOVIE_COMMENT_REQUEST'
    }
}

export const addMovieCommentActionSuccess = () => {
    return {
        type: 'ADD_MOVIE_COMMENT_SUCCESS',
        success: true
    }
}

export const addMovieCommentActionError = (error) => {
    return {
        type: 'ADD_MOVIE_COMMENT_ERROR',
        error: error
    }
}