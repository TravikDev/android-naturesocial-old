import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ButtonIconCircle } from '../../atoms/Buttons/ButtonIconCircle';
import { View } from 'react-native';
// import { NavigatorCommunityLists } from './NavigatorCommunityLists';
// import { NavPublicGarden } from '../NavPublicGarden/NavGardenTabs';
// import { NavigatorGardenPage } from './NavGardenPage';
// import { NavPublicGarden } from '../NavPublicGarden';
import { NavGardenPage } from './NavGardenPage';
import { NavPublicGarden } from '../NavPublicGarden';
// import { ScreenPublicGardenTest } from './ScreenPublicGardenTest/ScreenPublicGardenTest';

const Stack = createNativeStackNavigator();


/* @ts-ignore */
export const NavGarden = ({ navigation }) => {

  return (
    <Stack.Navigator initialRouteName="GardenPage">
      <Stack.Screen name="GardenPage" component={NavGardenPage}
        options={{
          title: "Garden",
          headerShown: false
          // headerLeft: () => <View style={{ marginRight: 20 }}><ButtonIconCircle func={() => navigation.openDrawer()} iconTitle='menu' size={36} color="#333" /></View>
        }} />
      <Stack.Screen name="PublicGarden" component={NavPublicGarden} />
      {/* <Stack.Screen name="PublicGardenTest" component={ScreenPublicGardenTest} /> */}
    </Stack.Navigator>
  )
}