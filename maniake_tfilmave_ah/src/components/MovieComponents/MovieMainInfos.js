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
                        source={{uri: movie?.url}}
                        style={styles.image} />
                </View>
                <View style={{flex: 2, padding: 10}}>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={{...styles.info, fontWeight: 'bold'}}>Viti: </Text>
                        <Text style={styles.info}>{movie?.year}</Text>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={{...styles.info, fontWeight: 'bold'}}>Buxheti: </Text>
                        <Text style={styles.info}>{movie?.budget}</Text>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={{...styles.info, fontWeight: 'bold'}}>Box-office: </Text>
                        <Text style={styles.info}>{movie?.box_office}</Text>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={{...styles.info, fontWeight: 'bold'}}>Velrësimi nga MF: </Text>
                        <Text style={styles.info}>{movie?.rating}</Text>
                    </View>
                    <View style={{flexDirection: 'row', width: '80%'}}>
                        <Text style={{...styles.info, fontWeight: 'bold'}}>Aktorët/et: </Text>
                        <Text style={styles.info}>{movie?.actors?.map(actor => `${actor}, `)}etj.</Text>
                    </View>
                </View>
            </View>
        )
    }
}