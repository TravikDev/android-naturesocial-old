import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { ScreenSinglePost } from './NavigatorFeedLists/ScreenPostDetails';
// import { ScreenPostsList } from './NavigatorFeedLists/ScreenPostsList';
import { ButtonIconCircle } from '../../atoms/Buttons/ButtonIconCircle';
import { View } from 'react-native';
import { NavigatorFeedLists } from './NavigatorFeedLists';
import { ScreenPostDetails } from './ScreenPostDetails';
import { ScreenNewsDetails } from './ScreenNewsDetails';

const Stack = createNativeStackNavigator();


/* @ts-ignore */
export const NavigatorFeed = ({ navigation }) => {

  return (
    <Stack.Navigator initialRouteName="FeedLists">
      <Stack.Screen name="FeedLists" component={NavigatorFeedLists}
      options={{
        title: 'Feed',
        headerLeft: () => <View style={{ marginRight: 20}}><ButtonIconCircle func={() => navigation.openDrawer()} iconTitle='menu' size={36} color="#333" /></View>
      }}
      />
      <Stack.Screen name="PostDetails" component={ScreenPostDetails}  />
      <Stack.Screen name="NewsDetails" component={ScreenNewsDetails}  />
    </Stack.Navigator>
  )
}
