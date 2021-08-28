import React, {Component} from "react"
import { StyleSheet, View, Text, ImageBackground, Dimensions, StatusBar, Animated, FlatList, Image, TouchableOpacity, TextInput, ActivityIndicator } from "react-native"
import { connect } from "react-redux"
import { background_black_color, red_color } from "../../assets/colors"
import MovieCard from "../../components/MovieComponents/MovieCard"
import ErrorView from "../../components/SharedComponents/ErrorView"
import MyHeader from "../../components/SharedComponents/MyHeader"
import MyLoadingView from "../../components/SharedComponents/MyLoadingView"
import MySearchInput from "../../components/SharedComponents/MySearchInput"
import { getRecommendedMovies } from "../../redux/reducers/GetRecommendedMoviesReducer"

class MainScreen extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.getRecommendedMovies()
    }

    render() {

        return (
            <View style={{flex: 1, backgroundColor: background_black_color}}>
                <StatusBar backgroundColor={background_black_color} barStyle={'light-content'} />
                <MyHeader 
                    title={'Ballina'}
                    navigation={this.props.navigation}
                    backgroundColor={background_black_color}
                    textColor={'#ddd'} />
                {this.props.loading ? 
                <MyLoadingView />
                : this.props.error ? 
                <ErrorView />
                :
                <View style={{flex: 1}}>
                    <FlatList 
                        style={{
                            width: Dimensions.get('screen').width,
                            height: Dimensions.get('screen').height,
                            padding: 10
                        }}
                        showsVerticalScrollIndicator={false}
                        keyExtractor={(item) => item.id}
                        data={this.props.movies}
                        renderItem={({item}) => {
                            return(
                                <MovieCard 
                                    onPress={() => 
                                        this.props.navigation.navigate('MovieDetailsScreen', {
                                            item: item
                                        })}
                                    item={item} />
                            )
                        }} />
                </View>}
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        loading: state.getRecommendedMoviesReducer.loading,
        movies: state.getRecommendedMoviesReducer.movies,
        error: state.getRecommendedMoviesReducer.error
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getRecommendedMovies: () => dispatch(getRecommendedMovies())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MainScreen)