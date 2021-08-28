import React, {Component} from "react"
import { StyleSheet, View, Text, ImageBackground, Dimensions, StatusBar, Animated, FlatList, Image, TouchableOpacity, TextInput } from "react-native"
import { connect } from "react-redux"
import { background_black_color } from "../../assets/colors"
import RatingStars from "../../components/MovieComponents/RatingStars"
import ErrorView from "../../components/SharedComponents/ErrorView"
import MyHeader from "../../components/SharedComponents/MyHeader"
import { getTopTwentyMovies } from "../../redux/reducers/GetTopTwentyMoviesReducer"

class TopTwentyMoviesScreen extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.getTopTwentyMovies()
    }

    render() {

        const styles = StyleSheet.create({
            movieContainer: {
                flex: 1,
                flexDirection: 'row',
                width: '100%',
                height: 108,
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
                flex: 1,
                width: 100, 
                height: 108, 
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
            infoContainer: {
                paddingTop: 10, 
                flex: 3
            },
            desc: {
                fontSize: 14,
                color: '#aaa',
                width: '90%',
                paddingLeft: 10,
                // paddingRight: 10,
                // backgroundColor: 'red'
            },
            ratingContainer: {
                position: 'absolute',
                right: 10,
                top: 10,
                width: 200
            },
            placeContainer: {
                zIndex: 2,
                position: 'absolute',
                right: 0,
                bottom: 0,
                width: 30,
                height: 30,
                borderRadius: 10,
                backgroundColor: '#777',
                justifyContent: 'center',
                alignItems: 'center'
            },
            placeText: {
                fontSize: 14,
                color: '#ddd'
            }
        })

        return (
            <View style={{flex: 1, backgroundColor: background_black_color}}>
                <StatusBar backgroundColor={background_black_color} barStyle={'light-content'} />
                <MyHeader 
                    title={'Top 20 filmat nga MF'}
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
                        keyExtractor={(item) => item.name}
                        data={this.props.top_movies}
                        renderItem={({item, index}) => {
                            return(
                                <TouchableOpacity 
                                    style={styles.movieContainer}
                                    onPress={() => 
                                        this.props.navigation.navigate('MovieDetailsScreen', {
                                            item: item
                                        })} >
                                    <View style={styles.ratingContainer}>
                                        <RatingStars 
                                            rating={item.maniaket} />
                                    </View>
                                    <View style={styles.placeContainer}>
                                        <Text style={styles.placeText}>{index+1}</Text>
                                    </View>
                                    <Image 
                                        source={{uri: item.img_url}}
                                        style={styles.image} />
                                    <View style={styles.infoContainer}>
                                        <Text style={styles.title}>{item.name}</Text>
                                        <Text style={styles.desc}>{item.short_desc}</Text>
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
        loading: state.getTopTwentyMoviesReducer.loading,
        top_movies: state.getTopTwentyMoviesReducer.top_movies,
        error: state.getTopTwentyMoviesReducer.error
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getTopTwentyMovies: () => dispatch(getTopTwentyMovies())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TopTwentyMoviesScreen)