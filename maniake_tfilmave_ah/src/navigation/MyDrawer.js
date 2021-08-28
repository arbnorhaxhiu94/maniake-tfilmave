import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import MainStack from './MainStack';
import ContactUsStack from './ContactUsStack';
import PrivacyPolicyStack from './PrivacyPolicyStack';
import MyMoviesStack from './MyMoviesStack';
import Top20MoviesStack from './Top20MoviesStack';

import CustomSidebar from './CustomSidebar';

import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const Drawer = createDrawerNavigator();

export default function MyDrawer() {
  return (
    <NavigationContainer>
      <Drawer.Navigator 
        initialRouteName="Ballina"
        drawerContent={(props) => {
          return(
            <CustomSidebar {...props} />
          )
        }}
        defaultScreenOptions={{
          drawerActiveTintColor: '#fff',
          drawerInactiveTintColor: '#aaa',
          drawerActiveBackgroundColor: '#dd2211',
          drawerInactiveBackgroundColor: '#555',
          drawerLabelStyle: {
            fontSize: 30
          }
        }}
        screenOptions={{
          headerShown: false,
          drawerStyle: {
            width: '80%',
          }
        }} >
        <Drawer.Screen 
          name="Ballina"
          options={{
            drawerIcon: () => (
              <AntDesign name={'home'} size={25} color={'red'} />
            ),
            drawerActiveTintColor: '#fff',
            drawerInactiveTintColor: '#aaa',
            drawerActiveBackgroundColor: '#dd2211',
            drawerInactiveBackgroundColor: '#555',
            drawerLabelStyle: {
              fontSize: 16
            }
          }} >
            {props => <MainStack {...props} />}
        </Drawer.Screen>
        <Drawer.Screen 
          name="Vlerësimet e mia"
          options={{
            drawerIcon: () => (
              <AntDesign name={'star'} size={25} color={'red'} />
            ),
            drawerActiveTintColor: '#fff',
            drawerInactiveTintColor: '#aaa',
            drawerActiveBackgroundColor: '#dd2211',
            drawerInactiveBackgroundColor: '#555',
            drawerLabelStyle: {
              fontSize: 16
            }
          }} >
            {props => <MyMoviesStack {...props} />}
        </Drawer.Screen>
        <Drawer.Screen 
          name="Top 20 filmat"
          options={{
            drawerIcon: () => (
              <MaterialCommunityIcons name={'dice-d20'} size={25} color={'red'} />
            ),
            drawerActiveTintColor: '#fff',
            drawerInactiveTintColor: '#aaa',
            drawerActiveBackgroundColor: '#dd2211',
            drawerInactiveBackgroundColor: '#555',
            drawerLabelStyle: {
              fontSize: 16
            }
          }} >
            {props => <Top20MoviesStack {...props} />}
          </Drawer.Screen>
        <Drawer.Screen 
          name="Kontakti"
          options={{
            drawerIcon: () => (
              <MaterialIcons name={'contacts'} size={25} color={'red'} />
            ),
            drawerActiveTintColor: '#fff',
            drawerInactiveTintColor: '#aaa',
            drawerActiveBackgroundColor: '#dd2211',
            drawerInactiveBackgroundColor: '#555',
            drawerLabelStyle: {
              fontSize: 16
            }
          }} >
            {props => <ContactUsStack {...props} />}
        </Drawer.Screen>
        <Drawer.Screen 
          name="Politikat e privatësisë"
          options={{
            drawerIcon: () => (
              <MaterialIcons name={'policy'} size={25} color={'red'} />
            ),
            drawerActiveTintColor: '#fff',
            drawerInactiveTintColor: '#aaa',
            drawerActiveBackgroundColor: '#dd2211',
            drawerInactiveBackgroundColor: '#555',
            drawerLabelStyle: {
              fontSize: 16
            }
          }} >
            {props => <PrivacyPolicyStack {...props} />}
        </Drawer.Screen>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}