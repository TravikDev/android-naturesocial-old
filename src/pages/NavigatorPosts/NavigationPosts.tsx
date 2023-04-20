import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ScreenSinglePost } from './ScreenPostDetails';
import { ScreenPostsList } from './ScreenPostsList';
import { ButtonIconCircle } from '../../atoms/Buttons/ButtonIconCircle';
import { View } from 'react-native';

const Stack = createNativeStackNavigator();


/* @ts-ignore */
export const NavigatorPosts = ({ navigation }) => {

  return (
    <Stack.Navigator initialRouteName="PostsList">
      <Stack.Screen name="PostsList" component={ScreenPostsList}
      options={{
        headerLeft: () => <View style={{ marginRight: 20}}><ButtonIconCircle func={() => navigation.openDrawer()} iconTitle='menu' size={36} color="#333" /></View>
      }}
      />
      <Stack.Screen name="PostDetails" component={ScreenSinglePost} />
    </Stack.Navigator>
  )
}
