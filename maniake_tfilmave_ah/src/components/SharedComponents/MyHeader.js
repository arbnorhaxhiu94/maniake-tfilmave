import React, {Component} from "react"
import { StyleSheet, View, Text, TouchableOpacity } from "react-native"
import IonIcons from 'react-native-vector-icons/Ionicons'

export default class MyHeader extends Component {
    constructor(props) {
        super(props)
    }

    render() {

        const styles = StyleSheet.create({
            container: {
                flexDirection: 'row',
                paddingVertical: 10,
                width: '100%',
                backgroundColor: this.props.backgroundColor,
                alignItems: 'center',
                elevation: 10,
                borderBottomWidth: 1,
                borderBottomColor: '#555'
            },
            drawerIcon: {
                zIndex: 2,
                position: 'absolute',
                left: 10,
                justifyContent: 'center',
                alignItems: 'center'
            },
            title: {
                width: '100%',
                fontSize: 18,
                textAlign: 'center',
                fontWeight: 'bold',
                color: this.props.textColor
            }
        })

        return (
            this.props.screen == 'navigate' ? 
            <View style={styles.container}>
                <TouchableOpacity 
                    style={styles.drawerIcon}
                    onPress={() => this.props.navigation.goBack()} >
                    <IonIcons name='arrow-back' size={25} color={this.props.textColor} />
                </TouchableOpacity>
                <Text style={styles.title}>{this.props.title}</Text>
            </View>
            :
            <View style={styles.container}>
                <TouchableOpacity 
                    style={styles.drawerIcon}
                    onPress={() => this.props.navigation.openDrawer()} >
                    <IonIcons name='menu' size={25} color={this.props.textColor} />
                </TouchableOpacity>
                <Text style={styles.title}>{this.props.title}</Text>
            </View>
        )
    }
}