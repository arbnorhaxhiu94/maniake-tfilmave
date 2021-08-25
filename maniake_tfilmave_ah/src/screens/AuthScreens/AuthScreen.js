import React, {Component} from "react"
import { StyleSheet, View, Text, ImageBackground, Dimensions, StatusBar, Animated } from "react-native"
import LoginForm from "../../components/AuthComponents/LoginForm"
import RegisterForm from "../../components/AuthComponents/RegisterForm"

export default class AuthScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            form: 'login'
        }
    }

    changeForm = (form) => {
        this.setState({
            form: form
        })
    }

    render() {

        const styles = StyleSheet.create({
            backgroundImage: {
                width: Dimensions.get('screen').width,
                height: Dimensions.get('screen').height*2/3
            },
            formContainer: {
                position: 'absolute',
                bottom: 0,
                width: '100%',
                padding: 10,
                borderWidth: 1,
                borderTopRightRadius: 10,
                borderTopLeftRadius: 10,
                backgroundColor: '#fff'
            }
        })

        return (
            <View style={{flex: 1, backgroundColor: '#fff'}}>
                <StatusBar backgroundColor={'#111'} barStyle={'light-content'} />
                <ImageBackground 
                    source={require('../../assets/images/cinema.jpg')}
                    style={styles.backgroundImage} />
                <Animated.View style={styles.formContainer} >
                    {this.state.form == 'login' ?
                    <LoginForm
                        changeForm={this.changeForm} />
                    :
                    <RegisterForm 
                        changeForm={this.changeForm} />}
                </Animated.View>
            </View>
        )
    }
}