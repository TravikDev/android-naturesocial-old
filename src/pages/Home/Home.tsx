import React, { useContext, useState, createContext } from 'react'
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Image, Text, View, StyleSheet, Animated, TouchableOpacity } from "react-native"
import { Button, Icon, Surface, ListItem, Chip, Avatar, Pressable } from "@react-native-material/core";
import { createDrawerNavigator, DrawerContentScrollView } from '@react-navigation/drawer';
import { ScrollView } from 'react-native-gesture-handler';
// import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigatorCalculator } from '../NavigatorCalculator';
// import { NavigatorCommunityLists } from '../NavigatorCommunity/NavigatorCommunityLists';
import { NavigatorMonitoring } from '../NavigatorMonitoring';
import { ScreenCategories } from '../NavigatorCultures/ScreenCulturesCategories';
import { NavigatorProfile } from '../NavigatorProfile';
import { NavigatorPosts } from '../NavigatorPosts';
import { NavigatorCommunity } from '../NavigatorCommunity';
// import { Spoiler } from '../../atoms/Spoiler/Spoiler';
import { SpoilerMenu } from '../../atoms/Spoilers/SpoilerMenu';
import { NavigatorGarden } from '../NavigatorGarden/NavigatorGarden';
// import { NavigatorGarden } from '../NavigatorGarden/NavigatorGarden';
// import { ScreenPostsList } from '../NavigatorPosts/ScreenPostsList';
// import { NavigationPosts } from '../NavigatorPosts';

function HomeScreen() {
  return (
    <ScrollView style={{ flex: 1 }} >
      <View style={{ borderBottomWidth: 1, borderColor: "#3e9b46" }}>
      </View>
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
        <ListItem
          title="Drafts"
          leading={<Icon name="military-tech" size={24} />}
        />
        <ListItem
          title="Drafts"
          leading={<Icon name="military-tech" size={24} />}
        />
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
        <View style={{ margin: 10, display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
          <Button
            title="Click Me"
            variant='outlined'
            tintColor='#fff'
            color='#3FB049'
            onPress={() => { }}
            trailing={
              /* @ts-ignore */
              props => <Icon name="send" size={30} color="#3e9b46" {...props} />
            }
          />
          <Button
            title="Delete"
            tintColor='#fff'
            color='#3FB049'
            onPress={() => { }}
            leading={props => <Icon name="delete" {...props} />}
          />
        </View>
      </View>
      <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center' }}>

        <Text>Home!</Text>
        <View style={{ width: 380, flex: 4 }}>
          <Surface
            elevation={2}
            category="medium"
            style={{ height: 360, padding: 8, gap: 10 }}
          >
            <Surface
              elevation={2}
              category="medium"
              style={{ height: 10, flex: 3 }}
            />
            <Surface
              elevation={2}
              category="medium"
              style={{ height: 10, flex: 1 }}
            />
          </Surface>

        </View>
        <Text>Home!</Text>

        <Text>Home!</Text>
        <Text>Home!</Text>

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
            onPress={() => navigation.navigate('Home')}
            title="News"
            leading={<Icon name="campaign" size={24} />}
          />
          <ListItem
            onPress={() => navigation.navigate('Posts')}
            title="Posts"
            leading={<Icon name="history-edu" size={24} />}
          />
          <ListItem
            onPress={() => navigation.navigate('Community')}
            title="Community"
            leading={<Icon name="groups" size={24} />}
          />
          <ListItem
            onPress={() => navigation.navigate('Community')}
            title="Events"
            leading={<Icon name="event-note" size={24} />}
          />

          {/* <Pressable style={{ height: 48, display: 'flex', justifyContent: 'center', paddingLeft: 16 }}>
            <Text style={{ color: '#333', fontSize: 16 }}>Library</Text>
          </Pressable> */}

        <View style={{marginTop: 20}}>
          <SpoilerMenu title='Library'>
            <>
              <ListItem
                onPress={() => navigation.navigate('Cultures')}
                title="Cultures"
                leading={<Icon name="local-florist" size={24} />}
              />
              <ListItem
                onPress={() => navigation.navigate('Community')}
                title="Learning"
                leading={<Icon name="school" size={24} />}
              />
              <ListItem
                onPress={() => navigation.navigate('Community')}
                title="Questions"
                leading={<Icon name="help-outline" size={24} />}
              />
              <ListItem
                onPress={() => navigation.navigate('Community')}
                title="Best practices"
                leading={<Icon name="star" size={24} />}
              />
            </>
          </SpoilerMenu>

        </View>

        <SpoilerMenu title='User'>
          <ListItem
            onPress={() => navigation.navigate('Profile')}
            title="Profile"
            leading={<Icon name="account-circle" size={24} />}
          />
          <ListItem
            onPress={() => navigation.navigate('Garden')}
            title="Garden"
            leading={<Icon name="nature-people" size={24} />}
          />
          <ListItem
            onPress={() => navigation.navigate('Community')}
            title="My posts"
            leading={<Icon name="event" size={24} />}
          />
          <ListItem
            onPress={() => navigation.navigate('Monitoring')}
            title="Diary"
            leading={<Icon name="book" size={24} />}
          />

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
        </View>

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
        </SpoilerMenu>

      </View>
    </DrawerContentScrollView >
  );
};

const Drawer = createDrawerNavigator();

export const Home = () => {

  return (
    /* @ts-ignore */
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen name="Home" component={HomeScreen} options={{
        headerRight: () => (
          <View style={{ marginRight: 10 }}>
            <Icon name="person-outline" size={28} onPress={() => { }} />
          </View>),
      }} />

      <Drawer.Screen
        name="Posts"
        component={NavigatorPosts}
        options={{ headerShown: false }}
      />
      {/* <Drawer.Screen name="User" component={NavigatorUser} /> */}
      <Drawer.Screen name="Cultures" component={ScreenCategories} />
      <Drawer.Screen name="Community" component={NavigatorCommunity}
        options={{ headerShown: false }} />
      <Drawer.Screen name="Profile" component={NavigatorProfile} />
      <Drawer.Screen name="Garden" component={NavigatorGarden}
      options={{
        headerShown: false
        // headerRight: () => (
        //   <View style={{ marginRight: 10 }}>
        //     <Icon name='info-outline' size={26} />
        //   </View>
        // )
      }}
      />
      <Drawer.Screen name="Calculator" component={NavigatorCalculator} />
      <Drawer.Screen name="Monitoring" component={NavigatorMonitoring} />
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
    borderColor: "#ffffffbb",
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