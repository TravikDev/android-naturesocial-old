import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { ScreenSinglePost } from './NavigatorFeedLists/ScreenPostDetails';
// import { ScreenPostsList } from './NavigatorFeedLists/ScreenPostsList';
import { ButtonIconCircle } from '../../atoms/Buttons/ButtonIconCircle';
import { Dimensions, Image, SafeAreaView, StatusBar, Text, View } from 'react-native';
import { NavFeedLists } from './NavFeedLists';
import { ScrPostDetails } from './ScrPostDetails';
import { ScrNewsDetails } from './ScrNewsDetails';
import { NavPublicGarden } from '../NavPublicGarden';
import { ScrPostsList } from './NavFeedLists/ScrPostsList';
import { Avatar } from '@react-native-material/core';
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
          header: () => <SafeAreaView>
            <StatusBar backgroundColor="transparent" translucent />

            <View style={{ backgroundColor: "#fff", display: 'flex', alignItems: 'center' }}>
              <View>
                <Image
                  style={{ width: scrWidth, height: 200 }}
                  source={{ uri: 'https://telegra.ph/file/a4c4adc5ec111c1c4a08b.jpg' }}
                />
              </View>
              <View style={{ position: 'absolute', top: 50 }}>
                <Avatar style={{ borderRadius: 50, borderWidth: 2, borderColor: '#fff', overflow: 'hidden' }} label="Kent Dodds" image={{ uri: 'https://mui.com/static/images/avatar/2.jpg' }} autoColor size={100} />
              </View>
            </View>
          </SafeAreaView>
        }} />
    </Stack.Navigator>
  )
}
