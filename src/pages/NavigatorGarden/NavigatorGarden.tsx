import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { ScreenSinglePost } from './ScreenPostDetails';
// import { ScreenPostsList } from './ScreenPostsList';
import { ButtonIconCircle } from '../../atoms/Buttons/ButtonIconCircle';
import { View } from 'react-native';
import { NavigatorGardenPage } from './NavigatorGardenPage';
import { NavigatorGardenSettings } from './NavigatorGardenSettings';

const Stack = createNativeStackNavigator();


/* @ts-ignore */
export const NavigatorGarden = ({ navigation }) => {

  return (
    <Stack.Navigator initialRouteName="GardenPage">
      <Stack.Screen name="GardenPage" component={NavigatorGardenPage}
      options={{
        headerLeft: () => <View style={{ marginRight: 20}}><ButtonIconCircle func={() => navigation.openDrawer()} iconTitle='menu' size={36} color="#333" /></View>
      }}
      />
      <Stack.Screen name="GardenSettings" component={NavigatorGardenSettings} />
    </Stack.Navigator>
  )
}
