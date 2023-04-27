import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ButtonIconCircle } from '../../atoms/Buttons/ButtonIconCircle';
import { View } from 'react-native';
// import { NavigatorCommunityLists } from './NavigatorCommunityLists';
// import { NavPublicGarden } from '../NavPublicGarden';
// import { NavigatorGardenPage } from './NavGardenPage';
// import { NavPublicGarden } from '../NavPublicGarden';
// import { NavGardenPostsList } from './NavGardenDevicesList';
import { ScrGardenDevicesAdd } from './ScrGardenDevicesAdd';
import { NavGardenDevicesList } from './NavGardenDevicesList';
// import { ScrGardenPostAdd } from './ScrGardenPostAdd';
// import { NavGardenPage } from './NavGardenPostsList';
// import { ScreenPublicGardenTest } from './ScreenPublicGardenTest/ScreenPublicGardenTest';

const Stack = createNativeStackNavigator();


/* @ts-ignore */
export const NavGardenDevices = ({ navigation }) => {

  return (
    <Stack.Navigator initialRouteName="GardenDevicesList">
      <Stack.Screen name="GardenDevicesList" component={NavGardenDevicesList}
        options={{
          title: "Devices",
          headerLeft: () => <View style={{ marginRight: 20 }}><ButtonIconCircle func={() => navigation.openDrawer()} iconTitle='menu' size={36} color="#333" /></View>
        }} />
      <Stack.Screen name="GardenDevicesAdd" component={ScrGardenDevicesAdd} />
      {/* <Stack.Screen name="PublicGardenTest" component={ScreenPublicGardenTest} /> */}
    </Stack.Navigator>
  )
}