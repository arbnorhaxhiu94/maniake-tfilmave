import React, {Component} from 'react'
import { View, Text, Button, StyleSheet, ScrollView, TouchableOpacity, TextInput } from 'react-native'
import MyHeader from '../../components/SharedComponents/MyHeader'
import { background_black_color, red_color } from '../../assets/colors'
import MyButton from '../../components/SharedComponents/MyButton'

export default class ContactUs extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            message: ''
        }
    }

    handleChange = (field, input) => {
        if (field == 'title') {
            this.setState({
                title: input,
            })
        } else {
            this.setState({
                message: input,
            })
        }
    }

    submit = async() => {
        if (this.state.title.length < 5) {
            alert('Titulli duhet të ketë së paku 5 shkronja.')
            return
        } else if (this.state.message.length < 10) {
            alert('Mesazhi duhet të ketë së paku 10 shkronja.')
            return
        }
        alert('Mesazhi juaj u dërgua me sukses.')
        setTimeout(() => {
            this.props.navigation.goBack()
        }, 2000);
        
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
            itemText: {
                fontSize: 16,
                color: '#555'
            },
            textinput: {
                width: '90%',
                alignSelf: 'center',
                marginVertical: 10,
                backgroundColor: '#555',
                paddingVertical: 10,
                paddingHorizontal: 10,
                borderRadius: 10,
                elevation: 5,
                color: '#fff',
                fontSize: 16
            }
        })

        return (
            <View style={{flex: 1, backgroundColor: background_black_color}}>
                <MyHeader 
                    title={'Kontakti'}
                    navigation={this.props.navigation}
                    backgroundColor={background_black_color}
                    textColor={'#ddd'} />
                <View style={{height: 20}} />
                <ScrollView 
                    style={{flex: 1, paddingVertical: 10}}
                    showsVerticalScrollIndicator={false}
                    keyboardShouldPersistTaps={'always'} >
                    <TextInput 
                        style={styles.textinput}
                        placeholder={'Titulli'}
                        placeholderTextColor={'#aaa'}
                        maxLength={50}
                        onChangeText={(input) => this.handleChange('title', input) } />
                    <TextInput 
                        multiline
                        numberOfLines={10}
                        textAlignVertical={'top'}
                        style={styles.textinput}
                        placeholder={'Mesazhi'}
                        placeholderTextColor={'#aaa'}
                        maxLength={50}
                        onChangeText={(input) => this.handleChange('message', input) } />
                    <View style={{paddingVertical: 10}}>
                        <MyButton 
                            onPress={this.submit}
                            buttonText={'Dërgo'}
                            backgroundColor={red_color}
                            borderColor={red_color}
                            textColor={'#fff'} />
                    </View>                   
                </ScrollView>
            </View>
        )
    }
}