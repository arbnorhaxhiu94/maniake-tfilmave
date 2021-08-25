import React, {Component} from 'react'
import { View, Text, Button, StyleSheet, ScrollView, TouchableOpacity, TextInput } from 'react-native'
import { background_black_color } from '../../assets/colors'
import MyHeader from '../../components/SharedComponents/MyHeader'

export default class PrivacyPolicyScreen extends Component {
    constructor(props) {
        super(props)
    }

    render() {

        const styles = StyleSheet.create({
            text: {
                color: this.props.color,
                fontSize: 14,
                textAlign: 'center'
            },
            itemContainer: {
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingHorizontal: 10,
                paddingVertical: 10
            },
            title: {
                alignSelf: 'center',
                width: '80%',
                fontSize: 32,
                color: '#fff',
                marginVertical: 20
            },
            description: {
                alignSelf: 'center',
                width: '80%',
                fontSize: 16,
                color: '#999'
            }
        })

        return (
            <View style={{flex: 1, backgroundColor: background_black_color}}>
                <MyHeader 
                    title={'Politikat e privatësisë'}
                    navigation={this.props.navigation}
                    backgroundColor={background_black_color}
                    textColor={'#ddd'} />
                <View style={{height: 20}} />
                <ScrollView 
                    style={{flex: 1, paddingVertical: 10}}
                    showsVerticalScrollIndicator={false}
                    keyboardShouldPersistTaps={'always'} >
                    <Text style={styles.title}>
                        Politikat e privatësisë
                    </Text>
                    <Text style={styles.description}>
                        Ne krijojmë aplikacione me respekt dhe në përputhje me privatësinë e përdoruesve. Ky aplikacion nuk ruan të dhëna personale apo çfarëdo informate rreth privatësisë së përdoruesve. Ne vetëm kërkojmë çasje në internet në mënyrë që të ruajmë të dhënat në databazë.
                    </Text>
                </ScrollView>
            </View>
        )
    }
}