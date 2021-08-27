export const getMyMoviesActionRequest = () => {
    return {
        type: 'GET_MY_MOVIES_REQUEST'
    }
}

export const getMyMoviesActionSuccess = (my_movies) => {
    return {
        type: 'GET_MY_MOVIES_SUCCESS',
        my_movies: my_movies
    }
}

export const getMyMoviesActionError = (error) => {
    return {
        type: 'GET_MY_MOVIES_ERROR',
        error: error
    }
}