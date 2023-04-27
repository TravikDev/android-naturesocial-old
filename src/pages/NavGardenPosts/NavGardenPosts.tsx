import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ButtonIconCircle } from '../../atoms/Buttons/ButtonIconCircle';
import { View } from 'react-native';
// import { NavigatorCommunityLists } from './NavigatorCommunityLists';
// import { NavPublicGarden } from '../NavPublicGarden';
// import { NavigatorGardenPage } from './NavGardenPage';
import { NavPublicGarden } from '../NavPublicGarden';
import { NavGardenPostsList } from './NavGardenPostsList';
import { ScrGardenPostAdd } from './ScrGardenPostAdd';
// import { NavGardenPage } from './NavGardenPostsList';
// import { ScreenPublicGardenTest } from './ScreenPublicGardenTest/ScreenPublicGardenTest';

const Stack = createNativeStackNavigator();


/* @ts-ignore */
export const NavGardenPosts = ({ navigation }) => {

  return (
    <Stack.Navigator initialRouteName="GardenPostsList">
      <Stack.Screen name="GardenPostsList" component={NavGardenPostsList}
        options={{
          title: "Posts",
          headerLeft: () => <View style={{ marginRight: 20 }}><ButtonIconCircle func={() => navigation.openDrawer()} iconTitle='menu' size={36} color="#333" /></View>
        }} />
      <Stack.Screen name="GardenPostAdd" component={ScrGardenPostAdd} />
      {/* <Stack.Screen name="PublicGardenTest" component={ScreenPublicGardenTest} /> */}
    </Stack.Navigator>
  )
}