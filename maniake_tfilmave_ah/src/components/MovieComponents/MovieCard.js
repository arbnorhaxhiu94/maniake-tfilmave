import React, {Component} from "react"
import { Image, StyleSheet, Text, TouchableOpacity } from "react-native"

export default class MovieCard extends Component {
    constructor(props) {
        super(props)
    }

    render() {

        const styles = StyleSheet.create({
            movieContainer: {
                flex: 1,
                width: '100%',
                // height: 300,
                justifyContent: 'flex-start',
                alignItems: 'center',
                borderWidth: 1,
                borderColor: '#555',
                borderRadius: 20,
                paddingBottom: 20,
                marginVertical: 20,
                overflow: 'hidden',
                backgroundColor: '#222',
                elevation: 10
            },
            image: {
                width: '100%', 
                height: 200, 
                borderTopRightRadius: 20,
                borderTopLeftRadius: 20
            },
            title: {
                fontSize: 18,
                color: '#ddd',
                fontWeight: 'bold',
                paddingVertical: 10
            },
            desc: {
                fontSize: 14,
                color: '#aaa',
                width: '100%',
                paddingLeft: 10,
                paddingRight: 5
            }
        })

        return (
            <TouchableOpacity 
                style={styles.movieContainer}
                onPress={() => this.props.onPress()} >
                <Image 
                    source={{uri: this.props.item?.img_url}}
                    style={styles.image} />
                <Text style={styles.title}>{this.props.item?.name}</Text>
                <Text style={styles.desc}>{this.props.item?.short_desc}</Text>
            </TouchableOpacity>
        )
    }
}