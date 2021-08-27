import React, {Component} from "react"
import { ActivityIndicator, StyleSheet, View } from "react-native"

export default class MyLoadingView extends Component {
    constructor(props) {
        super(props)
    }

    render() {

        const styles = StyleSheet.create({
            container: {
                flex: 1, 
                justifyContent: 'center', 
                alignItems: 'center'
            }
        })

        return (
            <View style={styles.container}>
                <ActivityIndicator color={'red'} size={50} />
            </View>
        )
    }
}