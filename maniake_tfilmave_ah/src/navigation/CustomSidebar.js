import { DrawerItem, DrawerItemList } from "@react-navigation/drawer"
import React, {Component} from "react"
import { StyleSheet, View, Text, ImageBackground, Dimensions, StatusBar, Animated, Image } from "react-native"
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { background_black_color } from "../assets/colors"
import { MySplashScreen } from "../screens/MySplashScreen"

export default class CustomSidebar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            
        }
    }

    render() {

        const styles = StyleSheet.create({
            sidebar: {
                flex: 1,
                width: '100%',
                backgroundColor: background_black_color
            },
            itemsList: {
                flex: 5,
                paddingVertical: 20
            },
            logoutButton: {
                position: 'absolute',
                width: '100%',
                bottom: 10
            },
            createdByContainer: {
                position: 'absolute',
                width: '100%',
                bottom: 10
            },
            createdByText: {
                fontSize: 12,
                color: '#aaa',
                textAlign: 'center'
            }
        })

        return (
            <View style={styles.sidebar}>
                {/* <View style={{flex: 1}}>
                    <Image 
                        source={require('../assets/images/launch_screen.png')}
                        style={{width: '100%', height: '100%'}} />
                </View> */}
                <MySplashScreen />
                <View style={styles.itemsList}>
                    <DrawerItemList {...this.props} />
                </View>
                {/* <View style={styles.logoutButton}>
                    <DrawerItem 
                        label={'Dil'}
                        inactiveBackgroundColor={'#555'}
                        inactiveTintColor={'#aaa'}
                        activeBackgroundColor={'#dd2211'}
                        activeTintColor={'#fff'}
                        icon={() => <MaterialIcons name={'logout'} size={30} color={'red'} /> } />
                </View> */}
                {/* <ImageBackground 
                    source={require('../assets/images/cinema.jpg')}
                    style={styles.backgroundImage} /> */}
                <View style={styles.createdByContainer}>
                    <Text style={styles.createdByText}>Krijuar nga ARHAX</Text>
                </View>
            </View>
        )
    }
}