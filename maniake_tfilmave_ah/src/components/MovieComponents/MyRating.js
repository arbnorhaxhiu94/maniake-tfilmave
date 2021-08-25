import React, {Component} from "react"
import { StyleSheet, View, Text, ImageBackground, Dimensions, StatusBar, Animated, ScrollView, Image, TouchableOpacity, FlatList } from "react-native"
import AntDesign from 'react-native-vector-icons/AntDesign'
import { gold_color, red_color } from "../../assets/colors"
import MyButton from "../SharedComponents/MyButton"
import MyTextInput from "../SharedComponents/MyTextInput"

export default class MyRating extends Component {
    constructor(props) {
        super(props)
        this.state = {
            my_rating: this.props.my_rating,
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

    setRatig = (rating) => {
        this.setState({
            my_rating: rating
        })
    }

    handleChange = (field, input) => {
        console.log(input)
    }

    submitComment = (input) => {
        let comments = this.state.comments
        let comment = {
            id: Math.random().toString(),
            name: 'Random name',
            comment: input
        }

        comments.unshift(comment)
        this.setState({
            comments: comments
        })
    }


    componentDidMount() {
        // alert(this.props.my_rating)
    }

    render() {

        const styles = StyleSheet.create({
            mainInfos: {
                // flexDirection: 'row',
                padding: 10,
                width: '100%',
                alignSelf: 'center',
                justifyContent: 'space-between'
            },
            starContainer: {
                justifyContent: 'center',
                alignItems: 'center',
                width: Dimensions.get('screen').width*1/12
            }
        })

        return (
            <View style={styles.mainInfos}>
                <FlatList 
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={(item) => item.id}
                    data={this.state.ratings}
                    style={{alignSelf: 'center'}}
                    renderItem={({item}) => {
                        return (
                            <TouchableOpacity 
                                style={styles.starContainer}
                                onPress={() => this.setRatig(item.value)} >
                                {this.state.my_rating >= item.value ? 
                                <AntDesign name={'star'} size={25} color={gold_color} />
                                :
                                <AntDesign name={'staro'} size={25} color={gold_color} />}
                            </TouchableOpacity>
                        )
                    }} />
                <View style={{height: 10}} />
                <MyTextInput 
                    placeholder={'Emri'}
                    handleChange={this.handleChange} />
                <View style={{height: 10}} />
                <MyTextInput 
                    placeholder={'Komenti...'}
                    numberOfLines={3}
                    handleChange={this.handleChange} />
                <View style={{height: 10}} />
                <MyButton 
                    buttonText={'Komento'}
                    backgroundColor={red_color}
                    borderColor={red_color}
                    textColor={'#fff'} />
            </View>
        )
    }
}