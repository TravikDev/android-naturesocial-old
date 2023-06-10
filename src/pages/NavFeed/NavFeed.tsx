import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { ScreenSinglePost } from './NavigatorFeedLists/ScreenPostDetails';
// import { ScreenPostsList } from './NavigatorFeedLists/ScreenPostsList';
import { ButtonIconCircle } from '../../atoms/Buttons/ButtonIconCircle';
import { View } from 'react-native';
import { NavFeedLists } from './NavFeedLists';
import { ScrPostDetails } from './ScrPostDetails';
import { ScrNewsDetails } from './ScrNewsDetails';
import { NavPublicGarden } from '../NavPublicGarden';
import { ScrPostsList } from './NavFeedLists/ScrPostsList';

const Stack = createNativeStackNavigator();


/* @ts-ignore */
export const NavFeed = ({ navigation }) => {

  return (
    <Stack.Navigator initialRouteName="FeedLists">
      {/* component can be changed to NavFeedLists */}
      <Stack.Screen name="FeedLists" component={ScrPostsList}
      options={{
        title: 'Feed',
        headerLeft: () => <View style={{ marginRight: 10}}><ButtonIconCircle func={() => navigation.openDrawer()} iconTitle='menu' size={36} color="#333" /></View>,
        headerRight: () => <View style={{ marginRight: 0}}><ButtonIconCircle func={() => {} } iconTitle='tune' size={36} color="#333" /></View>
      }}
      />
      <Stack.Screen name="PostDetails" component={ScrPostDetails}  />
      <Stack.Screen name="NewsDetails" component={ScrNewsDetails}  />
      <Stack.Screen name="PublicGarden" component={NavPublicGarden}  />
    </Stack.Navigator>
  )
}
