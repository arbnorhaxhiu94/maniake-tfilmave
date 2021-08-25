import React, {Component} from "react"
import { StyleSheet, Text } from "react-native"

export default class MyLabel extends Component {
    constructor(props) {
        super(props)
    }

    render() {

        const styles = StyleSheet.create({
            text: {
                fontSize: this.props.fontSize,
                fontWeight: this.props.fontWeight,
                textAlign: this.props.textAlign,
                color: this.props.color,
                paddingLeft: this.props?.paddingLeft || 0
            }
        })

        return (
            <Text style={styles.text}>{this.props.text}</Text>
        )
    }
}