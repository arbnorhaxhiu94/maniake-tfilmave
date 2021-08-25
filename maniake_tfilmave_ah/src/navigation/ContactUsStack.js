import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ContactUsScreen from '../screens/ContactUsScreens/ContactUsScreen';

const Stack = createNativeStackNavigator();

function ContactUsStack() {
  return (
        <Stack.Navigator>
            <Stack.Screen name="ContactUsScreen" 
              options={{headerShown: false}}>
                {props => <ContactUsScreen {...props} />}
            </Stack.Screen>
        </Stack.Navigator>
  );
}

export default ContactUsStack;