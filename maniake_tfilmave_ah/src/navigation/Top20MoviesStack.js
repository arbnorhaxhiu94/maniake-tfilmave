import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MovieDetailsScreen from '../screens/MainScreens/MovieDetailsScreen';
import TopTwentyMoviesScreen from '../screens/TopTwentyMoviesScreens/TopTwentyMoviesScreen';

const Stack = createNativeStackNavigator();

function Top20MoviesStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Top20MoviesScreen" 
              options={{headerShown: false}}>
                {props => <TopTwentyMoviesScreen {...props} />}
            </Stack.Screen>
            <Stack.Screen name="MovieDetailsScreen" 
              options={{headerShown: false}}>
                {props => <MovieDetailsScreen {...props} />}
            </Stack.Screen>
        </Stack.Navigator>
    );
}

export default Top20MoviesStack;