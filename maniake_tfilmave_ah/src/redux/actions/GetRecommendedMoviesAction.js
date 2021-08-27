export const getRecommendedMoviesActionRequest = () => {
    return {
        type: 'GET_RECOMMENDED_MOVIES_REQUEST'
    }
}

export const getRecommendedMoviesActionSuccess = (movies) => {
    return {
        type: 'GET_RECOMMENDED_MOVIES_SUCCESS',
        movies: movies
    }
}

export const getRecommendedMoviesActionError = (error) => {
    return {
        type: 'GET_RECOMMENDED_MOVIES_ERROR',
        error: error
    }
}