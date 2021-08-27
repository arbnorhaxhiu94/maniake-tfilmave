export const getMovieCommentsActionRequest = () => {
    return {
        type: 'GET_MOVIE_COMMENTS_REQUEST'
    }
}

export const getMovieCommentsActionSuccess = (comments) => {
    return {
        type: 'GET_MOVIE_COMMENTS_SUCCESS',
        comments: comments
    }
}

export const getMovieCommentsActionError = (error) => {
    return {
        type: 'GET_MOVIE_COMMENTS_ERROR',
        error: error
    }
}