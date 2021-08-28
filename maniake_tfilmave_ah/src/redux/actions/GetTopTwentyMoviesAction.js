export const getTopTwentyMoviesActionRequest = () => {
    return {
        type: 'GET_TOP20_MOVIES_REQUEST'
    }
}

export const getTopTwentyMoviesActionSuccess = (top_movies) => {
    return {
        type: 'GET_TOP20_MOVIES_SUCCESS',
        top_movies: top_movies
    }
}

export const getTopTwentyMoviesActionError = (error) => {
    return {
        type: 'GET_TOP20_MOVIES_ERROR',
        error: error
    }
}