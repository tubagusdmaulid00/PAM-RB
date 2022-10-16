/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
Home,Splash,Detail
} from '../page';

const Stack = createNativeStackNavigator();

export default function Router() {
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
			<Stack.Screen
        name="Splash"
        component={Splash}
        options={{headerShown: false}}
      />
			<Stack.Screen
        name="Detail"
        component={Detail}
        options={{headerShown: true}}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});
