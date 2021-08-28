import React, { Component } from 'react'
import { View, Text } from 'react-native'

export default class ErrorView extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{textAlign: 'center', color: '#aaa'}}>
                    Një gabim u shfaq, ju lutem provoni përsëri.
                </Text>
            </View>
        )
    }
}