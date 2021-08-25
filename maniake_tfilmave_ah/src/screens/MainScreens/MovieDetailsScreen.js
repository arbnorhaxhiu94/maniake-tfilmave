import React, {Component} from "react"
import { StyleSheet, View, Text, ImageBackground, Dimensions, StatusBar, Animated, ScrollView, Image } from "react-native"
import { background_black_color, red_color } from "../../assets/colors"
import MovieMainInfos from "../../components/MovieComponents/MovieMainInfos"
import MyRating from "../../components/MovieComponents/MyRating"
import MyHeader from "../../components/SharedComponents/MyHeader"
import MyLabel from "../../components/SharedComponents/MyLabel"
import YoutubePlayer from 'react-native-youtube-iframe';
import { TextWithSideLines } from "../../components/SharedComponents/TextWithSideLines"
import MovieComments from "../../components/MovieComponents/MovieComments"
import MyTextInput from "../../components/SharedComponents/MyTextInput"
import MyButton from "../../components/SharedComponents/MyButton"

export default class MovieDetailsScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            
        }
    }

    componentDidMount() {
        // alert(this.props.route?.params?.item.name)
    }

    render() {

        const styles = StyleSheet.create({
            desc: {
                fontSize: 14,
                color: '#aaa',
                width: '100%',
                paddingLeft: 10,
                paddingRight: 5
            },
            videoContainer: {
                width: '95%',
                alignSelf: 'center',
            }
        })

        let movie = this.props.route?.params?.item

        return (
            <View style={{flex: 1, backgroundColor: background_black_color}}>
                <StatusBar backgroundColor={background_black_color} barStyle={'light-content'} />
                <MyHeader 
                    screen={'navigate'}
                    title={movie?.name || 'No data'}
                    navigation={this.props.navigation}
                    backgroundColor={background_black_color}
                    textColor={'#ddd'} />
                <ScrollView 
                    keyboardShouldPersistTaps={'always'}
                    showsVerticalScrollIndicator={false}>
                    <TextWithSideLines 
                        title={'Info rreth filmit'} />
                    <MovieMainInfos 
                        movie={movie} />
                    <TextWithSideLines 
                        title={'Përshkrimi'} />
                    <Text style={styles.desc}>{movie?.desc}</Text>
                    <View style={{height: 20}} />
                    <TextWithSideLines 
                        title={'Traileri'} />
                    <View style={styles.videoContainer}>
                        <YoutubePlayer
                            height={300}
                            play={false}
                            videoId={movie?.trailer} />
                    </View>
                    <TextWithSideLines 
                        title={'Vlerësimi im'} />
                    <MyRating 
                        my_rating={movie.rating} />
                    <TextWithSideLines 
                        title={'Komentet'} />
                    <MovieComments />
                </ScrollView>
            </View>
        )
    }
}