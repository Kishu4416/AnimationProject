import { View, Text } from 'react-native'
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../Screens/Home';
import ImageView from '../Screens/ImageView';

const Stack = createStackNavigator();

const StackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                options={{ headerShown: false }}
                name="Home"
                component={Home} />
            <Stack.Screen
                options={{ headerShown: false }}
                name="ImageView"
                component={ImageView} />
        </Stack.Navigator>
    )
}

export default StackNavigator