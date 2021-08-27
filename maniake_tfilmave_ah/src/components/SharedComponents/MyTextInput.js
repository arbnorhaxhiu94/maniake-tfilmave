import React, {Component} from "react"
import { StyleSheet, TextInput } from "react-native"

export default class MyTextInput extends Component {
    constructor(props) {
        super(props)
    }

    render() {

        const styles = StyleSheet.create({
            textInput: {
                width: '90%',
                alignSelf: 'center',
                padding: 10,
                borderWidth: 1,
                borderColor: '#aaa',
                borderRadius: 10,
                color: this.props?.color || '#555'
            }
        })

        return (
            <TextInput 
                multiline={this.props?.multiline || false}
                style={styles.textInput}
                placeholder={this.props.placeholder}
                placeholderTextColor={'#aaa'}
                numberOfLines={this.props?.numberOfLines || 1}
                textAlignVertical={this.props?.numberOfLines && 'top'}
                onChangeText={(input) => this.props.handleChange(this.props.placeholder, input)} 
                secureTextEntry={this.props.secureTextEntry}
            />
        )
    }
}