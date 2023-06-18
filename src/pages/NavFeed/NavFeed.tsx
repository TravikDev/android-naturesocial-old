import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { ScreenSinglePost } from './NavigatorFeedLists/ScreenPostDetails';
// import { ScreenPostsList } from './NavigatorFeedLists/ScreenPostsList';
import { ButtonIconCircle } from '../../atoms/Buttons/ButtonIconCircle';
import { Dimensions, Image, SafeAreaView, StatusBar, Text, View } from 'react-native';
import { NavFeedLists } from './NavFeedLists';
import { ScrPostDetails } from '../NavSinglePages/ScrPostDetails';
import { ScrNewsDetails } from './ScrNewsDetails';
// import { NavPublicGarden } from '../NavPublicGarden/NavGardenTabs';
import { ScrPostsList } from './NavFeedLists/ScrPostsList';
import { Avatar } from '@react-native-material/core';
import { NavPublicGarden } from '../NavPublicGarden';
// import profileBG from '../../assets/images/profileLayout.jpg'

const Stack = createNativeStackNavigator();

const scrWidth = Dimensions.get('screen').width

/* @ts-ignore */
export const NavFeed = ({ navigation }) => {

  return (
    <Stack.Navigator initialRouteName="FeedLists">
      {/* component can be changed to NavFeedLists */}
      <Stack.Screen name="FeedLists" component={ScrPostsList}
        options={{
          title: 'Feed',
          headerLeft: () => <View style={{ marginRight: 10 }}><ButtonIconCircle func={() => navigation.openDrawer()} iconTitle='menu' size={36} color="#333" /></View>,
          headerRight: () => <View style={{ marginRight: 0 }}><ButtonIconCircle func={() => { }} iconTitle='tune' size={36} color="#333" /></View>
        }}
      />
      <Stack.Screen
        name="PostDetails"
        component={ScrPostDetails}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name="NewsDetails"
        component={ScrNewsDetails} />
        
      <Stack.Screen
        name="PublicGarden"
        component={NavPublicGarden} 
        options={{
          headerShown: false
        }}
        />
    </Stack.Navigator>
  )
}
