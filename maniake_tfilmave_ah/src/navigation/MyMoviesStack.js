import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MovieDetailsScreen from '../screens/MainScreens/MovieDetailsScreen';
import MyMoviesScreen from '../screens/MyMoviesScreens/MyMoviesScreen';

const Stack = createNativeStackNavigator();

function MyMoviesStack() {
  return (
        <Stack.Navigator>
            <Stack.Screen name="MainScreen" 
              options={{headerShown: false}}>
                {props => <MyMoviesScreen {...props} />}
            </Stack.Screen>
            <Stack.Screen name="MovieDetailsScreen" 
              options={{headerShown: false}}>
                {props => <MovieDetailsScreen {...props} />}
            </Stack.Screen>
        </Stack.Navigator>
  );
}

export default MyMoviesStack;