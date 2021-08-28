import React, {Component} from "react"
import { StyleSheet, View, Text, ImageBackground, Dimensions, StatusBar, Animated, FlatList, Image, TouchableOpacity, TextInput } from "react-native"
import { connect } from "react-redux"
import { background_black_color } from "../../assets/colors"
import RatingStars from "../../components/MovieComponents/RatingStars"
import ErrorView from "../../components/SharedComponents/ErrorView"
import MyHeader from "../../components/SharedComponents/MyHeader"
import { getMyMovies } from "../../redux/reducers/GetMyMoviesReducer"

class MyMoviesScreen extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.getMyMovies()
    }

    render() {

        const styles = StyleSheet.create({
            movieContainer: {
                flex: 1,
                flexDirection: 'row',
                width: '100%',
                height: 100,
                justifyContent: 'flex-start',
                // alignItems: 'center',
                borderWidth: 1,
                borderColor: '#555',
                borderRadius: 20,
                marginVertical: 10,
                overflow: 'hidden',
                backgroundColor: '#222',
                elevation: 10
            },
            image: {
                width: 100, 
                height: 100, 
                borderTopRightRadius: 10,
                borderTopLeftRadius: 10
            },
            title: {
                fontSize: 18,
                width: '100%',
                color: '#ddd',
                fontWeight: 'bold',
                paddingTop: 10,
                paddingLeft: 10
            },
            desc: {
                fontSize: 14,
                color: '#aaa',
                width: '100%',
                paddingLeft: 10,
                paddingRight: 10,
                // backgroundColor: 'red'
            },
            ratingContainer: {
                position: 'absolute',
                right: 10,
                top: 10,
                width: 200
            },
        })

        return (
            <View style={{flex: 1, backgroundColor: background_black_color}}>
                <StatusBar backgroundColor={background_black_color} barStyle={'light-content'} />
                <MyHeader 
                    title={'Vlerësimet e mia'}
                    navigation={this.props.navigation}
                    backgroundColor={background_black_color}
                    textColor={'#ddd'} />
                {this.props.error ? 
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
                        keyExtractor={(item) => item.movie_name}
                        data={this.props.my_movies}
                        renderItem={({item}) => {
                            return(
                                <TouchableOpacity 
                                    style={styles.movieContainer}
                                    onPress={() => 
                                        this.props.navigation.navigate('MovieDetailsScreen', {
                                            item: item
                                        })} >
                                    <View style={styles.ratingContainer}>
                                        <RatingStars 
                                            rating={item.rating} />
                                    </View>
                                    <Image 
                                        source={{uri: item.movie_img_url}}
                                        style={styles.image} />
                                    <View style={{paddingTop: 15, flex: 3}}>
                                        <Text style={styles.title}>{item.movie_name}</Text>
                                        <Text style={styles.desc}>{item.comment}</Text>
                                    </View>
                                </TouchableOpacity>
                            )
                        }} />
                </View>}
                
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        loading: state.getMyMoviesReducer.loading,
        my_movies: state.getMyMoviesReducer.my_movies,
        error: state.getMyMoviesReducer.error
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getMyMovies: () => dispatch(getMyMovies())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MyMoviesScreen)