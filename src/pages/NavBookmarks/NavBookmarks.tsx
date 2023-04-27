import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ButtonIconCircle } from '../../atoms/Buttons/ButtonIconCircle';
import { View } from 'react-native';
// import { NavigatorCommunityLists } from './NavigatorCommunityLists';
// import { NavigatorPublicGarden } from '../NavPublicGarden';
// import { ScreenPublicGardenTest } from './ScreenPublicGardenTest/ScreenPublicGardenTest';

const Stack = createNativeStackNavigator();


/* @ts-ignore */
export const NavBookmarks = ({ navigation }) => {

  return (
    <Stack.Navigator initialRouteName="CommunityLists">
      {/* <Stack.Screen name="CommunityLists" component={NavigatorCommunityLists}
      options={{
        title: "Community",
        headerLeft: () => <View style={{ marginRight: 20}}><ButtonIconCircle func={() => navigation.openDrawer()} iconTitle='menu' size={36} color="#333" /></View>
      }}
      />
      <Stack.Screen name="PublicGarden" component={NavigatorPublicGarden} /> */}
      {/* <Stack.Screen name="PublicGardenTest" component={ScreenPublicGardenTest} /> */}
    </Stack.Navigator>
  )
}
