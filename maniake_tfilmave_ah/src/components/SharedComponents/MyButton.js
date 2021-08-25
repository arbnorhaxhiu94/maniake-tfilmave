import React, {Component} from "react"
import { StyleSheet, View, Text, TouchableOpacity } from "react-native"

export default class MyButton extends Component {
    constructor(props) {
        super(props)
    }

    render() {

        const styles = StyleSheet.create({
            button: {
                width: '90%',
                alignSelf: 'center',
                backgroundColor: this.props.backgroundColor,
                borderRadius: 10,
                justifyContent: 'center',
                alignItems: 'center',
            },
            buttonText: {
                fontSize: 16,
                textAlign: 'center',
                color: this.props.textColor
            }
        })

        return (
            <View style={{
                ...styles.button, 
                paddingVertical: 10,
                borderWidth: 1,
                borderColor: this.props.borderColor
                }}>
                <TouchableOpacity 
                    style={styles.button}
                    onPress={() => this.props.onPress()} >
                    <Text style={styles.buttonText}>{this.props.buttonText}</Text>
                </TouchableOpacity>
            </View>
        )
    }
}