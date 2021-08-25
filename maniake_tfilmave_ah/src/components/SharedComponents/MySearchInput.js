import React, {Component} from "react"
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from "react-native"
import { red_color } from "../../assets/colors"

export default class MySearchInput extends Component {
    constructor(props) {
        super(props)
        this.state = {
            input: ''
        }
    }

    handleChange = (input) => {
        this.setState({
            input: input
        })
    }

    render() {

        const styles = StyleSheet.create({
            searchContainer: {
                width: '90%',
                alignSelf: 'center',
                flexDirection: 'row',
                borderBottomWidth: 1,
                borderBottomColor: '#aaa',
                // paddingVertical: 5,
                paddingTop: 10,
                alignItems: 'center',
            },
            textInput: {
                width: '80%',
                fontSize: 16,
                paddingHorizontal: 5,
                color: '#aaa',
            },
            searchButton: {
                backgroundColor: 'red',
                padding: 10,
                paddingHorizontal: 15,
                borderRadius: 10
            },
            buttonText: {
                color: '#ddd'
            }
        })

        return (
            <View style={styles.searchContainer}>
                <TextInput 
                    placeholder={this.props.placeholder}
                    onChangeText={(input) => this.handleChange(input)}
                    style={styles.textInput} />
                <TouchableOpacity 
                    disabled={this.state.input.length == 0 ? true : false}
                    onPress={() => this.props.onPress(this.state.input)}
                    style={styles.searchButton} >
                    <Text style={styles.buttonText}>{this.props.buttonText}</Text>
                </TouchableOpacity>
            </View>
        )
    }
}