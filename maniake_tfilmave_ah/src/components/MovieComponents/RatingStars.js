import React, {Component} from "react"
import { StyleSheet, View, Text, ImageBackground, Dimensions, StatusBar, Animated, ScrollView, Image, TouchableOpacity, FlatList } from "react-native"
import AntDesign from 'react-native-vector-icons/AntDesign'
import { connect } from "react-redux"
import { gold_color, red_color } from "../../assets/colors"
import { device_id } from "../../configs/device_id"
import { addMovieComment } from "../../redux/reducers/AddMovieCommentReducer"
import { getMovieComments } from "../../redux/reducers/GetMovieCommentsReducer"
import MyButton from "../SharedComponents/MyButton"
import MyTextInput from "../SharedComponents/MyTextInput"

export default class RatingStars extends Component {
    constructor(props) {
        super(props)
        this.state = {
            ratings: [
                {id: '1', value: 1},
                {id: '2', value: 2},
                {id: '3', value: 3},
                {id: '4', value: 4},
                {id: '5', value: 5},
                {id: '6', value: 6},
                {id: '7', value: 7},
                {id: '8', value: 8},
                {id: '9', value: 9},
                {id: '10', value: 10},
            ]
        }
    }

    render() {

        const styles = StyleSheet.create({
            starContainer: {
                justifyContent: 'center',
                alignItems: 'center',
                width: 15
            },
            errorTxt: {
                color: 'red',
                textAlign: 'center',
                marginTop: 10
            }
        })

        return (
            <FlatList 
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item) => item.id}
                data={this.state.ratings}
                style={{alignSelf: 'flex-end'}}
                renderItem={({item}) => {
                    return (
                        <TouchableOpacity 
                            disabled={true}
                            style={styles.starContainer} >
                            {this.props.rating >= item.value ? 
                            <AntDesign name={'star'} size={12} color={gold_color} />
                            :
                            <AntDesign name={'staro'} size={12} color={gold_color} />}
                        </TouchableOpacity>
                    )
                }} />
        )
    }
}
