import React, {Component} from "react"
import { StyleSheet, View, Text, ImageBackground, Dimensions, StatusBar, Animated, ScrollView, Image } from "react-native"

export default class MovieMainInfos extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    componentDidMount() {
        // alert(this.props.route?.params?.item.name)
    }

    render() {

        const styles = StyleSheet.create({
            mainInfos: {
                flexDirection: 'row',
                padding: 10
            },
            image: {
                width: '100%', 
                height: 200, 
            },
            info: {
                fontSize: 14,
                color: '#aaa',
                // width: '100%',
                // paddingLeft: 10,
                paddingRight: 5
            }
        })

        let movie = this.props.movie

        return (
            <View style={styles.mainInfos}>
                <View style={{flex: 1}}>
                    <Image 
                        source={{uri: movie?.img_url}}
                        style={styles.image} />
                </View>
                <View style={{flex: 2, padding: 10}}>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={{...styles.info, fontWeight: 'bold'}}>Viti: </Text>
                        <Text style={styles.info}>{movie?.year}</Text>
                    </View>
                    <View style={{flexDirection: 'row', width: '80%'}}>
                        <Text style={{...styles.info, fontWeight: 'bold'}}>Zhanri: </Text>
                        <Text style={styles.info}>{movie?.genre}</Text>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={{...styles.info, fontWeight: 'bold'}}>Buxheti: </Text>
                        <Text style={styles.info}>{movie?.budget ? `$${movie?.budget}M` : "S'ka info"}</Text>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={{...styles.info, fontWeight: 'bold'}}>Box-office: </Text>
                        <Text style={styles.info}>{movie?.box_office ? `$${movie?.box_office}M` : "S'ka info"}</Text>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={{...styles.info, fontWeight: 'bold'}}>Imdb: </Text>
                        <Text style={styles.info}>{movie?.imdb || "S'ka info"}</Text>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={{...styles.info, fontWeight: 'bold'}}>Vlerësimi nga MF: </Text>
                        <Text style={styles.info}>{this.props.maniacs_rating ? this.props.maniacs_rating?.toFixed(2) : "S'ka vlerësime"}</Text>
                    </View>
                    <View style={{flexDirection: 'row', width: '75%'}}>
                        <Text style={{...styles.info, fontWeight: 'bold'}}>Aktorët/et: </Text>
                        <Text style={styles.info}>{movie?.actors?.map(actor => `${actor}, `)}etj.</Text>
                    </View>
                </View>
            </View>
        )
    }
}