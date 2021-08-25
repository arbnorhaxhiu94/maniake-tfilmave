import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'

export class TextWithSideLines extends Component {
    constructor(props) {
        super(props)
    }

    render() {

        var styles = StyleSheet.create({
            container: {
              flexDirection: 'row',
              padding: 10,
              justifyContent: 'center',
            },
            shortLine: {
                flex: 1,
                height: 14,
                borderBottomWidth: this.props.borderWidth ? this.props.borderWidth : 3,
                borderBottomColor: '#aaa',
                marginHorizontal: 5
            },
            longLine: {
                flex: 14,
                height: 14,
                borderBottomWidth: this.props.borderWidth ? this.props.borderWidth : 3,
                borderBottomColor: '#aaa',
                // marginHorizontal: 5
            },
            titleContainer: {
                marginHorizontal: 5,
            },
            title: {
                fontSize: 16,
                textAlign: 'center',
                color: '#aaa'
            }
        });
          

        return (
            <View style={styles.container}>
                <View style={styles.shortLine} />
                <View style={styles.longLine} />
                {this.props.title !== '' ? 
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>{this.props.title}</Text>
                </View> : null}
                <View style={styles.longLine} />
                <View style={styles.shortLine} />
            </View>
        )
    }
}