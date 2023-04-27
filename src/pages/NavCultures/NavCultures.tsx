import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ButtonIconCircle } from '../../atoms/Buttons/ButtonIconCircle';
import { View } from 'react-native';
// import { NavigatorCommunityLists } from './NavigatorCommunityLists';
import { NavPublicGarden } from '../NavPublicGarden';
import { NavCulturesLists } from './NavCulturesLists';
// import { ScreenPublicGardenTest } from './ScreenPublicGardenTest/ScreenPublicGardenTest';

const Stack = createNativeStackNavigator();


/* @ts-ignore */
export const NavCultures = ({ navigation }) => {

  return (
    <Stack.Navigator initialRouteName="CommunityLists">
      <Stack.Screen name="CommunityLists" component={NavCulturesLists}
      options={{
        title: "Community",
        headerLeft: () => <View style={{ marginRight: 20}}><ButtonIconCircle func={() => navigation.openDrawer()} iconTitle='menu' size={36} color="#333" /></View>
      }}
      />
      <Stack.Screen name="PublicGarden" component={NavPublicGarden} />
      {/* <Stack.Screen name="PublicGardenTest" component={ScreenPublicGardenTest} /> */}
    </Stack.Navigator>
  )
}