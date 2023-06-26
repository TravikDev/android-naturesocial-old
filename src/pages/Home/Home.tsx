import React, { useContext, useState, createContext } from 'react'
import { Image, Text, View, StyleSheet, Animated, TouchableOpacity } from "react-native"
import { Button, Icon, Surface, ListItem, Chip, Avatar, Pressable } from "@react-native-material/core";
import { createDrawerNavigator, DrawerContentScrollView } from '@react-navigation/drawer';
import { ScrollView } from 'react-native-gesture-handler';
import { NavCommunity } from '../NavCommunity';
import { SpoilerMenu } from '../../atoms/Spoilers/SpoilerMenu';
// import { NavPublicGarden } from '../NavPublicGarden/NavGardenTabs';
import { NavFeed } from '../NavFeed';
import { NavMarketplace } from '../NavMarketplace';
import { NavLearning } from '../NavLearning';
// import { NavGarden } from '../NavGarden';
import { NavMonitoring } from '../NavMonitoring';
import { NavCalculator } from '../NavCalculator';
import { NavGardenPosts } from '../NavGardenPosts';
import { NavCultures } from '../NavCultures';
import { NavGardenProfiles } from '../NavGardenProfiles';
import { NavGardenDevices } from '../NavGardenDevices';
import { NavAuth } from '../NavAuth';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { SrcSignin } from '../NavAuth/ScrSignin';
// import { SrcSignup } from '../NavAuth/ScrSignup';
import { ButtonIconCircle } from '../../atoms/Buttons/ButtonIconCircle';
import { NavGarden } from '../NavGarden';
import { NavSinglePages } from '../NavSinglePages';

function HomeScreen() {
  return (
    <ScrollView style={{ flex: 1 }} >

      <View>
        <ListItem
          title="Inbox"
          leading={<Icon name="local-florist" size={24} />}
        />
        <ListItem
          title="Drafts"
          leading={<Icon name="nature-people" size={24} />}
        />
        <ListItem
          title="Drafts"
          leading={<Icon name="eco" size={24} />}
        />
        <ListItem
          title="Drafts"
          leading={<Icon name="grass" size={24} />}
        />
        <ListItem
          title="Drafts"
          leading={<Icon name="park" size={24} />}
        />
        <ListItem
          title="Drafts"
          leading={<Icon name="pest-control" size={24} />}
        />
        <ListItem
          title="Drafts"
          leading={<Icon name="poll" size={24} />}
        />
        <ListItem
          title="Drafts"
          leading={<Icon name="pie-chart" size={24} />}
        />
        <ListItem
          title="Drafts"
          leading={<Icon name="pie-chart-outlined" size={24} />}
        />
        <ListItem
          title="Drafts"
          leading={<Icon name="wb-incandescent" size={24} />}
        />
        <ListItem
          title="Drafts"
          leading={<Icon name="spa" size={24} />}
        />
        <ListItem
          title="Drafts"
          leading={<Icon name="visibility" size={24} />}
        />
        <ListItem
          title="Drafts"
          leading={<Icon name="wb-sunny" size={24} />}
        />
        <ListItem
          title="Drafts"
          leading={<Icon name="invert-colors" size={24} />}
        />
        <ListItem
          title="Drafts"
          leading={<Icon name="opacity" size={24} />}
        />
        <ListItem
          title="Drafts"
          leading={<Icon name="online-prediction" size={24} />}
        />
        <ListItem
          title="Drafts"
          leading={<Icon name="emoji-nature" size={24} />}
        />
        <ListItem
          title="Drafts"
          leading={<Icon name="wb-incandescent" size={24} />}
        />
        <ListItem
          title="Drafts"
          leading={<Icon name="wb-sunny" size={24} />}
        />
        <ListItem
          title="Drafts"
          leading={<Icon name="tune" size={24} />}
        />
        {/* <ListItem
          title="Drafts"
          leading={<Icon name="military-tech" size={24} />}
        />
        <ListItem
          title="Drafts"
          leading={<Icon name="military-tech" size={24} />}
        /> */}
        <ListItem
          title="Drafts"
          leading={<Icon name="miscellaneous-services" size={24} />}
        />
        <ListItem
          title="Drafts"
          leading={<Icon name="waves" size={24} />}
        />
        <ListItem
          title="Drafts"
          leading={<Icon name="miscellaneous-services" size={24} />}
        />
        <ListItem
          title="Drafts"
          leading={<Icon name="local-drink" size={24} />}
        />
        <ListItem
          title="Drafts"
          leading={<Icon name="leaderboard" size={24} />}
        />
        <ListItem
          title="Drafts"
          leading={<Icon name="memory" size={24} />}
        />
        <ListItem
          title="Drafts"
          leading={<Icon name="filter-vintage" size={24} />}
        />
        <ListItem
          title="Drafts"
          leading={<Icon name="terrain" size={24} />}
        />
        <ListItem
          title="Drafts"
          leading={<Icon name="today" size={24} />}
        />
        <ListItem
          title="Drafts"
          leading={<Icon name="tonality" size={24} />}
        />
        <ListItem
          title="Drafts"
          leading={<Icon name="emoji-objects" size={24} />}
        />
        <ListItem
          title="Drafts"
          leading={<Icon name="router" size={24} />}
        />
        <ListItem
          title="Drafts"
          leading={<Icon name="filter-alt" size={24} />}
        />
        <ListItem
          title="Drafts"
          leading={<Icon name="toys" size={24} />}
        />
        <ListItem
          title="Community"
          leading={<Icon name="event-available" size={24} />}
        />
        <ListItem
          title="Community"
          leading={<Icon name="event-busy" size={24} />}
        />
        <ListItem
          title="Community"
          leading={<Icon name="emoji-events" size={24} />}
        />
        <ListItem
          title="Community"
          leading={<Icon name="dry" size={24} />}
        />
        <ListItem
          title="Community"
          leading={<Icon name="gradient" size={24} />}
        />
        <ListItem
          title="Community"
          leading={<Icon name="invert-colors-on" size={24} />}
        />
        <ListItem
          title="Community"
          leading={<Icon name="power" size={24} />}
        />
        <ListItem
          title="Community"
          leading={<Icon name="waves" size={24} />}
        />
        <ListItem
          title="Community"
          leading={<Icon name="science" size={24} />}
        />
        <ListItem
          title="Community"
          leading={<Icon name="highlight" size={24} />}
        />
        <ListItem
          title="Community"
          leading={<Icon name="hourglass-bottom" size={24} />}
        />
        <ListItem
          title="Community"
          leading={<Icon name="model-training" size={24} />}
        />
        <ListItem
          title="Community"
          leading={<Icon name="bedtime" size={24} />}
        />
        <ListItem
          title="Community"
          leading={<Icon name="beach-access" size={24} />}
        />
        <ListItem
          title="Community"
          leading={<Icon name="park" size={24} />}
        />
        <ListItem
          title="Community"
          leading={<Icon name="science" size={24} />}
        />
        <ListItem
          title="Community"
          leading={<Icon name="lightbulb-outline" size={24} />}
        />
        <ListItem
          title="Community"
          leading={<Icon name="wash" size={24} />}
        />
        <ListItem
          title="Environment"
          leading={<Icon name="device-thermostat" size={24} />}
        />
      </View>
    </ScrollView>
  );
}

/* @ts-ignore */
const CustomDrawerContent = ({ navigation }) => {

  const [rotateValue, setRotateValue] = useState(new Animated.Value(0));
  const [isRotated, setIsRotated] = useState(false);

  const handleRotate = () => {
    const toValue = isRotated ? 0 : 0.5;
    setIsRotated(!isRotated);

    Animated.timing(rotateValue, {
      toValue,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };

  const rotate = rotateValue.interpolate({
    inputRange: [0, 0.5],
    outputRange: ['0deg', '180deg'],
  });

  return (
    <DrawerContentScrollView>
      <View style={styles.drawerHeader}>
        <View style={styles.insideDrawerHeader}>
          <Avatar label="Kent Dodds" autoColor />
          <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
            <View>
              <Text style={styles.username}>John Doe</Text>
              <Text style={styles.rank}>1-ый уровень</Text>
            </View>
            <Animated.View style={{ transform: [{ rotate }] }}>
              <TouchableOpacity onPress={handleRotate}>
                <Icon name="keyboard-arrow-down" size={24} color='#fff' />
              </TouchableOpacity>
            </Animated.View>
          </View>
        </View>
      </View>
      <View style={{ top: -10 }}>

        <View>


          <ListItem
            onPress={() => navigation.navigate('Feed')}
            title="Feed"
            leading={<Icon name="campaign" size={24} />}
          />
          <ListItem
            onPress={() => navigation.navigate('Community')}
            title="Community"
            leading={<Icon name="groups" size={24} />}
          />
          <ListItem
            onPress={() => navigation.navigate('Marketplace')}
            title="Marketplace"
            leading={<Icon name="storefront" size={24} />}
          />
          <ListItem
            onPress={() => navigation.navigate('Community')}
            title="Events"
            leading={<Icon name="casino" size={24} />}
          />

          {/* <Pressable style={{ height: 48, display: 'flex', justifyContent: 'center', paddingLeft: 16 }}>
            <Text style={{ color: '#333', fontSize: 16 }}>Library</Text>
          </Pressable> */}

          {/* <View style={{ marginTop: 20 }}> */}
          <SpoilerMenu title='Library'>
            <>
              <ListItem
                onPress={() => navigation.navigate('Cultures')}
                title="Cultures"
                leading={<Icon name="local-florist" size={24} />}
              />
              <ListItem
                onPress={() => navigation.navigate('Learning')}
                title="Learning"
                leading={<Icon name="school" size={24} />}
              />
              <ListItem
                onPress={() => navigation.navigate('Community')}
                title="Questions"
                leading={<Icon name="help-outline" size={24} />}
              />
              {/* <ListItem
                onPress={() => navigation.navigate('Community')}
                title="Best practices"
                leading={<Icon name="star" size={24} />}
              /> */}
            </>
          </SpoilerMenu>

        </View>

        <SpoilerMenu title='User'>
          <ListItem
            onPress={() => navigation.navigate('Auth')}
            title="Login"
            leading={<Icon name="language" size={24} />}
          />
          {/* <ListItem
            onPress={() => navigation.navigate('Signup')}
            title="Register"
            leading={<Icon name="language" size={24} />}
          /> */}
          <ListItem
            onPress={() => navigation.navigate('Garden')}
            title="Garden"
            leading={<Icon name="nature-people" size={24} />}
          />
          <ListItem
            onPress={() => navigation.navigate('GardenPosts')}
            title="Posts"
            leading={<Icon name="book" size={24} />}
          />
          <ListItem
            onPress={() => navigation.navigate('GardenProfiles')}
            title="Profiles"
            leading={<Icon name="storage" size={24} />}
          />
          <ListItem
            onPress={() => navigation.navigate('GardenDevices')}
            title="Devices"
            leading={<Icon name="settings-input-hdmi" size={24} />}
          />
          {/* <ListItem
            onPress={() => navigation.navigate('Monitoring')}
            title="Subscriptions"
            leading={<Icon name="star" size={24} />}
          /> */}

        </SpoilerMenu>

        <SpoilerMenu title='Tools'>
          <>
            <ListItem
              onPress={() => navigation.navigate('Monitoring')}
              title="Monitoring"
              leading={<Icon name="speed" size={24} />}
            />
            <ListItem
              onPress={() => navigation.navigate('Calculator')}
              title="Calculator"
              leading={<Icon name="calculate" size={24} />}
            />
            <ListItem
              onPress={() => navigation.navigate('Calculator')}
              title="Helper"
              leading={<Icon name="support-agent" size={24} />}
            />
          </>
        </SpoilerMenu>

        <SpoilerMenu title='Settings'>
          <ListItem
            onPress={() => navigation.navigate('Monitoring')}
            title="Language"
            leading={<Icon name="language" size={24} />}
          />
          <ListItem
            onPress={() => navigation.navigate('Calculator')}
            title="Theme"
            leading={<Icon name="calculate" size={24} />}
          />
          <ListItem
            onPress={() => navigation.navigate('Home')}
            title="News"
            leading={<Icon name="campaign" size={24} />}
          />
        </SpoilerMenu>

      </View>


      {/* </View> */}
    </DrawerContentScrollView >
  );
};

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator()

export const Home = () => {

  return (
    /* @ts-ignore */
    <Drawer.Navigator
      initialRouteName="Feed"
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      {/* <Drawer.Screen name="Home" component={HomeScreen} options={{
        headerRight: () => (
          <View style={{ marginRight: 10 }}>
            <Icon name="person-outline" size={28} onPress={() => { }} />
          </View>),
      }} /> */}

      <Drawer.Screen
        name="Feed"
        component={NavFeed}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name="Marketplace"
        component={NavMarketplace}
        options={{ headerShown: false }}
      />
      {/* <Drawer.Screen name="User" component={NavigatorUser} /> */}
      {/* <Drawer.Screen
        name="PublicGarden"
        component={NavPublicGarden}
      // options={{ headerShown: false }} 
      /> */}
      {/* <Drawer.Screen name="Cultures" component={ScreenCategories} /> */}
      <Drawer.Screen name="Learning" component={NavLearning} />
      <Drawer.Screen name="Cultures" component={NavCultures}
        options={{ headerShown: false }} />
      {/* <Drawer.Screen name="GardenPosts" component={NavGardenPosts} options={{ headerShown: false }} /> */}
      {/* <Drawer.Screen name="Profiles" component={NavigatorProfile} /> */}
      <Drawer.Screen name="Community" component={NavCommunity}
        options={{ headerShown: false }} />
      {/* <Drawer.Screen name="Profile" component={NavigatorProfile} /> */}
      <Drawer.Screen name="Garden" component={NavGarden}
        options={{
          headerShown: false
        }}
      />
      <Drawer.Screen name="GardenPosts" component={NavGardenPosts}
        options={{
          headerShown: false
        }}
      />
      <Drawer.Screen name="GardenProfiles" component={NavGardenProfiles}
        options={{
          headerShown: false
        }}
      />
      <Drawer.Screen name="GardenDevices" component={NavGardenDevices}
        options={{
          headerShown: false
        }}
      />
      <Drawer.Screen name="Calculator" component={NavCalculator} />
      <Drawer.Screen name="Monitoring" component={NavMonitoring} />

      <Drawer.Screen name="Auth" component={NavAuth}
        options={{
          headerShown: false
        }}
      />
      <Drawer.Screen name="SinglePages" component={NavSinglePages}
        options={{
          headerShown: false
        }}
      />
      {/* <Stack.Screen name='Auth' component={NavAuth} /> */}
      {/* <Stack.Screen name='Signup' component={SrcSignup} /> */}
      {/* <Drawer.Screen name="Monitoring" component={NavMonitoring} /> */}
    </Drawer.Navigator>

  );
}



const styles = StyleSheet.create({
  drawerHeader: {
    top: -10,
    backgroundColor: '#3e9b46e0',
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 18,
    paddingLeft: 12,
    paddingRight: 18,
    paddingBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#00000055'
  },
  insideDrawerHeader: {
    flex: 1,
    height: 128,
    display: 'flex',
    justifyContent: 'space-between'
  },
  avatar: {
    width: 64,
    height: 64,
    borderRadius: 50,
    marginRight: 10,
    borderColor: "#004D00",
    borderWidth: 1
  },
  username: {
    color: "#fff",
    fontSize: 18,
    fontWeight: 'bold',
  },
  rank: {
    color: "#ffffffdd",
    fontSize: 14,
  },
  drawerItem: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  drawerText: {
    marginLeft: 10,
    color: "#000",
    fontSize: 18,
  },
});