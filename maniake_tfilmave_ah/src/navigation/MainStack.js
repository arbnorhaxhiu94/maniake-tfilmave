import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainScreen from '../screens/MainScreens/MainScreen';
import MovieDetailsScreen from '../screens/MainScreens/MovieDetailsScreen';

const Stack = createNativeStackNavigator();

function MainStack() {
  return (
        <Stack.Navigator>
            <Stack.Screen name="MainScreen" 
              options={{headerShown: false}}>
                {props => <MainScreen {...props} />}
            </Stack.Screen>
            <Stack.Screen name="MovieDetailsScreen" 
              options={{headerShown: false}}>
                {props => <MovieDetailsScreen {...props} />}
            </Stack.Screen>
        </Stack.Navigator>
  );
}

export default MainStack;