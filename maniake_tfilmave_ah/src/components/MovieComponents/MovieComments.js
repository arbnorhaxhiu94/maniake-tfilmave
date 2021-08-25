import React, {Component} from "react"
import { StyleSheet, View, Text, ImageBackground, Dimensions, StatusBar, Animated, ScrollView, Image, TouchableOpacity, FlatList } from "react-native"
import { background_black_color, red_color } from "../../assets/colors"
import MySearchInput from "../SharedComponents/MySearchInput"
import MyTextInput from "../SharedComponents/MyTextInput"
import MyButton from "../SharedComponents/MyButton"

export default class MovieComments extends Component {
    constructor(props) {
        super(props)
        this.state = {
            comments: [
                {id: '1', name: 'Arbnor', comment: 'This movie is the shit.'},
                {id: '2', name: 'Cr7', comment: 'Great movie.'},
                {id: '3', name: 'LM10', comment: 'I like it.'},
                {id: '4', name: 'pumpkineater69', comment: 'Cool alien hehehe. Nice movie but not better than Family Guy.'},
            ]
        }
    }

    componentDidMount() {
        // alert(this.props.my_rating)
    }

    render() {

        const styles = StyleSheet.create({
            mainInfos: {
                padding: 10,
                width: '100%',
                alignSelf: 'center',
            },
            commentContainer: {
                width: '90%',
                alignSelf: 'center',
                borderWidth: 1,
                borderColor: '#aaa',
                borderRadius: 10,
                padding: 10,
                elevation: 10,
                backgroundColor: '#555',
                marginVertical: 5
            },
            name: {
                fontSize: 16,
                fontWeight: 'bold',
                color: '#aaa'
            },
            comment: {
                fontSize: 14,
                color: '#aaa',
                paddingLeft: 10
            }
        })

        return (
            <View style={styles.mainInfos}>
                <View style={{height: 10}} />
                {this.state.comments.map(item => {
                    return (
                        <View 
                            key={item.id}
                            style={styles.commentContainer}>
                                <Text style={styles.name}>{item.name}:</Text>
                                <Text style={styles.comment}>{item.comment}</Text>
                        </View>
                    )
                })}
            </View>
        )
    }
}