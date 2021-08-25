import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PrivacyPolicyScreen from '../screens/PrivacyPolicyScreen/PrivacyPolicyScreen';

const Stack = createNativeStackNavigator();

function PrivacyPolicyStack() {
  return (
        <Stack.Navigator>
            <Stack.Screen name="ContactUsScreen" 
              options={{headerShown: false}}>
                {props => <PrivacyPolicyScreen {...props} />}
            </Stack.Screen>
        </Stack.Navigator>
  );
}

export default PrivacyPolicyStack;