import React, {Component} from "react"
import { StyleSheet, View, Text, ImageBackground, Dimensions, StatusBar, Animated, ScrollView, Image } from "react-native"
import { background_black_color, red_color } from "../../assets/colors"
import MovieMainInfos from "../../components/MovieComponents/MovieMainInfos"
import MyRating from "../../components/MovieComponents/MyRating"
import MyHeader from "../../components/SharedComponents/MyHeader"
import YoutubePlayer from 'react-native-youtube-iframe';
import { TextWithSideLines } from "../../components/SharedComponents/TextWithSideLines"
import MovieComments from "../../components/MovieComponents/MovieComments"
import { getMovieComments } from "../../redux/reducers/GetMovieCommentsReducer"
import { connect } from "react-redux"
import MyLoadingView from "../../components/SharedComponents/MyLoadingView"
import { getMovieDetails } from "../../redux/reducers/GetMovieDetailsReducer"

import firestore from '@react-native-firebase/firestore'
import { blocked_user, checkIfBlockedUser, device_id } from "../../configs/device_id"
import ErrorView from "../../components/SharedComponents/ErrorView"

class MovieDetailsScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            long_desc: '',
            maniacs_rating: null
        }
    }

    getMovieDetails = async() => {
        await this.props.getMovieDetails(this.props.route?.params?.item?.movie_id)

        if (this.props.data) {
            let desc = this.props.data?.long_desc.split('/n')
            // alert(this.props.data?.long_desc)
            this.setState({
                long_desc: desc
            })
        }
    }

    loadComments = async() => {
        await this.props.getMovieComments(this.props.route?.params?.item?.movie_id)

        let ratings = []
        let ratings_sum = 0
        if (this.props.comments) {
            for (let i = 0; i < this.props.comments?.length; i++) {
                console.log(this.props.comments[i]?.rating)
                ratings.push(this.props.comments[i]?.rating)
                ratings_sum = ratings_sum + this.props.comments[i]?.rating
            }
            this.setState({
                maniacs_rating: ratings_sum/ratings.length
            })

            await firestore()
                .collection('movies')
                .doc(this.props.route?.params?.item?.movie_id)
                .update({
                    maniaket: ratings_sum/ratings.length,
                })
                .then(() => {
                    console.log('Rating updated!');
                })
                .catch(e => console.log(e))
        }
    }

    componentDidMount() {
        this.getMovieDetails()
        this.loadComments()
        checkIfBlockedUser(device_id)
    }

    render() {

        const styles = StyleSheet.create({
            desc: {
                fontSize: 14,
                color: '#aaa',
                width: '100%',
                paddingLeft: 10,
                paddingRight: 5,
                marginBottom: 10
            },
            videoContainer: {
                width: '95%',
                alignSelf: 'center',
            },
            recommended_container: {
                flexDirection: 'row',
                alignItems: 'center',
                paddingLeft: 10
            },
            rec_key: {
                fontSize: 14,
                color: '#aaa'
            },
            rec_value: {
                fontSize: 16,
                fontWeight: 'bold',
                color: '#aaa'
            }
        })

        // let movie = this.props.route?.params?.item

        return (
            <View style={{flex: 1, backgroundColor: background_black_color}}>
                <StatusBar backgroundColor={background_black_color} barStyle={'light-content'} />
                <MyHeader 
                    screen={'navigate'}
                    title={this.props.data?.name || 'No data'}
                    navigation={this.props.navigation}
                    backgroundColor={background_black_color}
                    textColor={'#ddd'} />
                {this.props.loading1 ? 
                <MyLoadingView />
                : this.props.error ? 
                <ErrorView />
                :
                <ScrollView 
                    keyboardShouldPersistTaps={'always'}
                    showsVerticalScrollIndicator={false}>
                    <TextWithSideLines 
                        title={'Info rreth filmit'} />
                    <MovieMainInfos 
                        maniacs_rating={this.state.maniacs_rating}
                        movie={this.props.data} />
                    <TextWithSideLines 
                        title={'Përshkrimi'} />
                    {this.state.long_desc[0] && <Text style={styles.desc}>{this.state?.long_desc[0]}</Text>}
                    {this.state.long_desc[1] && <Text style={styles.desc}>{this.state?.long_desc[1]}</Text>}
                    {this.state.long_desc[2] && <Text style={styles.desc}>{this.state?.long_desc[2]}</Text>}
                    {this.state.long_desc[3] && <Text style={styles.desc}>{this.state?.long_desc[3]}</Text>}
                    {this.state.long_desc[4] && <Text style={styles.desc}>{this.state?.long_desc[4]}</Text>}
                    {this.state.long_desc[5] && <Text style={styles.desc}>{this.state?.long_desc[5]}</Text>}                    
                    <View style={{...styles.recommended_container, marginVertical: 10}}>
                        <Text style={styles.rec_key}>Rekomanduar nga:</Text>
                        <Text style={styles.rec_value}>{'  '}{this.props.data?.recommended_by}</Text>
                    </View>
                    <View style={styles.recommended_container}>
                        <Text style={styles.rec_key}>Nota personale:</Text>
                        <Text style={styles.rec_value}>{'  '}{this.props.data?.recommenders_rating}</Text>
                    </View>
                    <View style={{height: 20}} />
                    <TextWithSideLines 
                        title={'Traileri'} />
                    <View style={styles.videoContainer}>
                        <YoutubePlayer
                            height={300}
                            play={false}
                            videoId={this.props.data?.youtube_id} />
                    </View>
                    {blocked_user ? null 
                    :
                    <>
                    <TextWithSideLines 
                        title={'Vlerësimi im'} />
                    <MyRating 
                        movie={this.props.data}
                        my_rating={this.props.data?.imdb}
                        loadComments={this.loadComments} />
                    </>}
                    <TextWithSideLines 
                        title={'Komentet'} />
                    {this.props.loading ? 
                    <MyLoadingView />
                    :
                    <MovieComments 
                        comments={this.props.comments} />}
                </ScrollView>}
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        loading: state.getMovieCommentsReducer.loading,
        comments: state.getMovieCommentsReducer.comments,
        error: state.getMovieCommentsReducer.error,

        loading1: state.getMovieDetailsReducer.loading,
        data: state.getMovieDetailsReducer.data,
        error1: state.getMovieDetailsReducer.error
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getMovieComments: (movie_id) => dispatch(getMovieComments(movie_id)),
        getMovieDetails: (movie_id) => dispatch(getMovieDetails(movie_id))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MovieDetailsScreen)