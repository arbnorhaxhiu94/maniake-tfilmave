import React, {Component} from "react"
import { StyleSheet, View, Text, ImageBackground, Dimensions, StatusBar, Animated } from "react-native"
import { red_color } from "../../assets/colors"
import MyButton from "../SharedComponents/MyButton"
import MyLabel from "../SharedComponents/MyLabel"
import MyTextInput from "../SharedComponents/MyTextInput"

export default class RegisterForm extends Component {
    constructor(props) {
        super(props)
    }

    submit = () => {
        console.log('Submit')
    }

    handleChange = (field, input) => {
        console.log(input)
    }

    render() {

        const styles = StyleSheet.create({
            formContainer: {
                flex: 1, 
                backgroundColor: '#fff',
                paddingVertical: 10
            }
        })

        return (
            <View style={styles.formContainer}>
                <MyLabel 
                    text={"Maniakë t'filmave"}
                    fontSize={18}
                    color={'#555'}
                    textAlign={'center'}
                    fontWeight={'bold'} />
                <View style={{height: 10}} /> 
                <MyTextInput 
                    placeholder={'Email'}
                    handleChange={this.handleChange} />
                <View style={{height: 10}} /> 
                <MyTextInput 
                    placeholder={'Fjalëkalimi'}
                    handleChange={this.handleChange}
                    secureTextEntry={true} />
                <View style={{height: 10}} /> 
                <MyTextInput 
                    placeholder={'Përsërit fjalëkalimin'}
                    handleChange={this.handleChange}
                    secureTextEntry={true} />
                <View style={{height: 10}} /> 
                <MyButton 
                    onPress={this.submit}
                    buttonText={'REGJISTROHU'}
                    backgroundColor={red_color}
                    borderColor={red_color}
                    textColor={'#fff'} />
                <View style={{height: 10}} /> 
                <MyButton  
                    onPress={() => this.props.changeForm('login')}
                    buttonText={'KYCU'}
                    backgroundColor={'#fff'}
                    borderColor={red_color}
                    textColor={red_color} />
            </View>
        )
    }
}