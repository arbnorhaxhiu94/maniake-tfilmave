import React, {Component} from "react"
import { StyleSheet, View, Text, ImageBackground, Dimensions, StatusBar, Animated, FlatList, Image, TouchableOpacity, TextInput, ActivityIndicator } from "react-native"
import { connect } from "react-redux"
import { background_black_color, red_color } from "../../assets/colors"
import MovieCard from "../../components/MovieComponents/MovieCard"
import MyHeader from "../../components/SharedComponents/MyHeader"
import MyLoadingView from "../../components/SharedComponents/MyLoadingView"
import MySearchInput from "../../components/SharedComponents/MySearchInput"
import { getRecommendedMovies } from "../../redux/reducers/GetRecommendedMoviesReducer"

class MainScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            movies: [
                {
                    id: '1', 
                    name: 'Paul', 
                    year: '2011',
                    budget: '23M',
                    box_office: '100M',
                    actors: ['Simon Pegg', 'Someone someone', 'Paul Paul'],
                    rating: 7,
                    desc: "For the past 60 years, a wisecracking alien named Paul (Seth Rogen) has resided at a top-secret military base in America's UFO heartland. When Paul decides he has had enough of Earth, he escapes from the compound and hops on the first handy vehicle -- a rented RV manned by two British sci-fi nerds named Graeme (Simon Pegg) and Clive (Nick Frost). With federal agents and the father of an accidental kidnap victim on their tail, the two hatch a crazy plan to help Paul return to his spaceship.",
                    url: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSe_kU5XAjXW1s2PSkXSZQ_uloRHKvd-R5kGwM1tcPNxl-OslUX',
                    trailer: 'BJxlNYb8sJQ'
                },
                {
                    id: '2', 
                    name: 'Three Idiots', 
                    year: '2011',
                    budget: '23M',
                    box_office: '100M',
                    actors: ['Simon Pegg', 'Someone someone', 'Paul Paul'],
                    rating: 8,
                    desc: 'One heck of a movie with an alien and two fat friends.',
                    url: 'https://resizing.flixster.com/2JNllvqWQ2FgfC7KeaHKOhcHCyY=/206x305/v2/https://flxt.tmsimg.com/assets/p7951929_p_v10_aa.jpg',
                    trailer: 'BJxlNYb8sJQ'
                },
                {
                    id: '3', 
                    name: 'Avengers', 
                    year: '2011',
                    budget: '23M',
                    box_office: '100M',
                    actors: ['Simon Pegg', 'Someone someone', 'Paul Paul'],
                    rating: 8,
                    desc: 'One heck of a movie with an alien and two fat friends.',
                    url: 'https://upload.wikimedia.org/wikipedia/en/8/8a/The_Avengers_%282012_film%29_poster.jpg',
                    trailer: 'BJxlNYb8sJQ'
                }
            ]
        }
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