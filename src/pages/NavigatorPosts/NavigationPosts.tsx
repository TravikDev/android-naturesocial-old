import { NavigationContainer, getFocusedRouteNameFromRoute, useNavigation } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import React from 'react'
// import { ScreenPosts } from './ScreenPostsList';
import { ScreenPostDetails } from './ScreenPostDetails';
import { ScreenPostsList } from './ScreenPostsList';
import { Icon } from '@react-native-material/core';
import { ButtonIconCircle } from '../../atoms/Button/ButtonIconCircle';
import { View } from 'react-native';
// import { useEffect } from 'react';

const Stack = createNativeStackNavigator();


/* @ts-ignore */
export const NavigationPosts = ({ navigation }) => {

  // const navigation = useNavigation()
  // const parentDrawer = navigation
  // const routeName = getFocusedRouteNameFromRoute(route) ?? 'Feed';

// console.log(route)

  return (
    <Stack.Navigator initialRouteName="PostsList">
      <Stack.Screen name="PostsList" component={ScreenPostsList}
      options={{
        headerLeft: () => <View style={{ marginRight: 20}}><ButtonIconCircle func={() => navigation.openDrawer()} iconTitle='menu' size={36} color="#333" /></View>
      }}
      />
      <Stack.Screen name="PostDetails" component={ScreenPostDetails}
        // options={({ route }) => ({
        //   route
        // })} 
        />
    </Stack.Navigator>
  )
}
