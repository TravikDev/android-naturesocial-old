import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ButtonIconCircle } from '../../atoms/Buttons/ButtonIconCircle';
import { View } from 'react-native';
import { NavGardenProfilesList } from './NavGardenProfilesList';
import { ScrGardenProfilesAdd } from './ScrGardenProfilesAdd';
// import { NavigatorCommunityLists } from './NavigatorCommunityLists';
// import { NavPublicGarden } from '../NavPublicGarden';
// import { NavigatorGardenPage } from './NavGardenPage';
// import { NavPublicGarden } from '../NavPublicGarden';
// import { NavGardenPostsList } from './NavGardenDevicesList';
// import { ScrGardenDevicesAdd } from './ScrGardenProfilesAdd';
// import { NavGardenDevicesList } from './NavGardenProfilesList';
// import { ScrGardenPostAdd } from './ScrGardenPostAdd';
// import { NavGardenPage } from './NavGardenPostsList';
// import { ScreenPublicGardenTest } from './ScreenPublicGardenTest/ScreenPublicGardenTest';

const Stack = createNativeStackNavigator();


/* @ts-ignore */
export const NavGardenProfiles = ({ navigation }) => {

  return (
    <Stack.Navigator initialRouteName="GardenProfilesList">
      <Stack.Screen name="GardenProfilesList" component={NavGardenProfilesList}
        options={{
          title: "Profiles",
          headerLeft: () => <View style={{ marginRight: 20 }}><ButtonIconCircle func={() => navigation.openDrawer()} iconTitle='menu' size={36} color="#333" /></View>
        }} />
      <Stack.Screen name="GardenProfilesAdd" component={ScrGardenProfilesAdd}
        options={{
          title: "New Profile",
        }} />
      {/* <Stack.Screen name="PublicGardenTest" component={ScreenPublicGardenTest} /> */}
    </Stack.Navigator>
  )
}