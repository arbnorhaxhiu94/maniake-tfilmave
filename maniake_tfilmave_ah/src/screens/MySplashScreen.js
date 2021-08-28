import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { background_black_color } from '../assets/colors'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'

export class MySplashScreen extends Component {
    constructor(props) {
        super(props)
    }

    render() {

        const styles = StyleSheet.create({
            screen: {
                flex: 1,
                backgroundColor: background_black_color,
                justifyContent: 'center',
                alignItems: 'center'
            },
            title: {
                marginTop: 10,
                fontSize: 20,
                color: '#aaa',
                // fontFamily: 'Ankle'
            }
        })

        return(
            <View style={styles.screen}>
                <MaterialCommunityIcons 
                    name={'movie-open'}
                    color={'red'}
                    size={50} />
                <Text style={styles.title}>Rekomandime për filma</Text>
            </View>
        )
    }
}