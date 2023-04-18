import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import React from 'react'
// import { ScreenPosts } from './ScreenPostsList';
import { ScreenPost } from './ScreenPost';
import { ScreenPostsList } from './ScreenPostsList';

const Stack = createNativeStackNavigator();

export const NavigationPosts = () => {
  return (
    <Stack.Navigator initialRouteName="PostsList">
      <Stack.Screen 
        name="PostsList" 
        component={ScreenPostsList} 
        options={{ headerShown: false }} 
      />
      <Stack.Screen name="PostDetails" component={ScreenPost} />
    </Stack.Navigator>
  )
}
