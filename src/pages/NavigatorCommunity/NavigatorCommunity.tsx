import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ButtonIconCircle } from '../../atoms/Buttons/ButtonIconCircle';
import { View } from 'react-native';
import { NavigatorCommunityLists } from './NavigatorCommunityLists';
import { ScreenSingleUser } from './NavigatorSingleUser';

const Stack = createNativeStackNavigator();


/* @ts-ignore */
export const NavigatorCommunity = ({ navigation }) => {

  return (
    <Stack.Navigator initialRouteName="CommunityLists">
      <Stack.Screen name="CommunityLists" component={NavigatorCommunityLists}
      options={{
        headerLeft: () => <View style={{ marginRight: 20}}><ButtonIconCircle func={() => navigation.openDrawer()} iconTitle='menu' size={36} color="#333" /></View>
      }}
      />
      <Stack.Screen name="SingleUser" component={ScreenSingleUser} />
    </Stack.Navigator>
  )
}