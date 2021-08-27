import React, {Component} from "react"
import { StyleSheet, View, Text } from "react-native"
import RatingStars from "./RatingStars"

export default class MovieComments extends Component {
    constructor(props) {
        super(props)
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
                paddingTop: 20,
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
                paddingLeft: 10,
                width: '90%'
            },
            ratingContainer: {
                position: 'absolute',
                right: 10,
                top: 10,
                width: 200
            },
            ratingText: {
                color: '#aaa'
            }
        })

        return (
            <View style={styles.mainInfos}>
                <View style={{height: 10}} />
                {this.props.comments?.map(item => {
                    return (
                        <View 
                            key={item.id}
                            style={styles.commentContainer}>
                                <View style={styles.ratingContainer}>
                                    <RatingStars 
                                        rating={item.rating} />
                                </View>
                                <Text style={styles.name}>{item.name}:</Text>
                                <Text style={styles.comment}>{item.comment}</Text>
                        </View>
                    )
                })}
            </View>
        )
    }
}
