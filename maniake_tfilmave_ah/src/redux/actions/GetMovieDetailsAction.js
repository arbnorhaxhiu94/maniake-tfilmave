export const getMovieDetailsActionRequest = () => {
    return {
        type: 'GET_MOVIE_DETAILS_REQUEST'
    }
}

export const getMovieDetailsActionSuccess = (data) => {
    return {
        type: 'GET_MOVIE_DETAILS_SUCCESS',
        data: data
    }
}

export const getMovieDetailsActionError = (error) => {
    return {
        type: 'GET_MOVIE_DETAILS_ERROR',
        error: error
    }
}