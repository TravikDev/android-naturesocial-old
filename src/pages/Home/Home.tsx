import React, { useRef, useState } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Image, Text, View, StyleSheet, Animated, TouchableOpacity } from "react-native"
import { Button, Icon, Surface, ListItem, Chip, Avatar } from "@react-native-material/core";
import { createDrawerNavigator, DrawerContentScrollView } from '@react-navigation/drawer';
import { ScrollView } from 'react-native-gesture-handler';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';


function HomeScreen() {
  return (
    <ScrollView style={{ flex: 1 }} bounces >
      <View style={{ borderBottomWidth: 1, borderColor: "#3e9b46" }}>
        <Image style={{ width: undefined, height: 210 }} source={require('../../assets/images/lol2.jpg')} />
      </View>
      <View>
        <ListItem
          title="Inbox"
          leading={<Icon name="local-florist" size={24} />}
          trailing={props => <Icon name="chevron-right" {...props} />}
        />
        <ListItem
          title="Drafts"
          leading={<Icon name="nature-people" size={24} />}
          trailing={props => <Icon name="chevron-right" {...props} />}
        />
        <ListItem
          title="Drafts"
          leading={<Icon name="eco" size={24} />}
          trailing={props => <Icon name="chevron-right" {...props} />}
        />
        <ListItem
          title="Drafts"
          leading={<Icon name="grass" size={24} />}
          trailing={props => <Icon name="chevron-right" {...props} />}
        />
        <ListItem
          title="Drafts"
          leading={<Icon name="park" size={24} />}
          trailing={props => <Icon name="chevron-right" {...props} />}
        />
        <ListItem
          title="Drafts"
          leading={<Icon name="pest-control" size={24} />}
          trailing={props => <Icon name="chevron-right" {...props} />}
        />
        <ListItem
          title="Drafts"
          leading={<Icon name="spa" size={24} />}
          trailing={props => <Icon name="chevron-right" {...props} />}
        />
        <ListItem
          title="Drafts"
          leading={<Icon name="visibility" size={24} />}
          trailing={props => <Icon name="chevron-right" {...props} />}
        />
        <ListItem
          title="Drafts"
          leading={<Icon name="wb-sunny" size={24} />}
          trailing={props => <Icon name="chevron-right" {...props} />}
        />
        <ListItem
          title="Drafts"
          leading={<Icon name="invert-colors" size={24} />}
          trailing={props => <Icon name="chevron-right" {...props} />}
        />
        <ListItem
          title="Drafts"
          leading={<Icon name="emoji-nature" size={24} />}
          trailing={props => <Icon name="chevron-right" {...props} />}
        />
        <ListItem
          title="Trash"
          trailing={props => <Icon name="chevron-right" {...props} />}
        />
        <ListItem
          title="Spam"
          trailing={props => <Icon name="chevron-right" {...props} />}
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
        <ListItem
          onPress={() => navigation.navigate('Home')}
          title="Home page"
          leading={<Icon name="home" size={24} />}
        />
        <ListItem
          onPress={() => navigation.navigate('Another')}
          title="Diaries"
          leading={<Icon name="book" size={24} />}
        />
        <ListItem
          onPress={() => navigation.navigate('Another')}
          title="Cultures"
          leading={<Icon name="local-florist" size={24} />}
        />
        <ListItem
          onPress={() => navigation.navigate('Another')}
          title="Environment"
          leading={<Icon name="device-thermostat" size={24} />}
        />
        <ListItem
          onPress={() => navigation.navigate('Calculator')}
          title="Calculator"
          leading={<Icon name="calculate" size={24} />}
        />
        <ListItem
          onPress={() => navigation.navigate('Another')}
          title="Bookmarks"
          leading={<Icon name="bookmarks" size={24} />}
        />
        <ListItem
          onPress={() => navigation.navigate('Community')}
          title="Community"
          leading={<Icon name="people" size={24} />}
        />
      </View>
      <Text></Text>
      <Chip style={{ marginHorizontal: 10 }} label="Outlined" />
    </DrawerContentScrollView>
  );
};



function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Posts!</Text>
    </View>
  );
}

function AnotherScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Another One!</Text>
    </View>
  );
}

function ThirdScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Third!</Text>
    </View>
  );
}

function PostsListScreen() {
  return (
    <>
    <ListItem title="List Item"  />
    <ListItem title="List Item" />
    <ListItem title="List Item" />
  </>
  );
}

function PostsPeopleScreen() {
  return (
    <>
    <ListItem
      leadingMode="avatar"
      leading={
        <Avatar image={{ uri: "https://mui.com/static/images/avatar/1.jpg" }} />
      }
      title="Brunch this weekend?"
      secondaryText="I'll be in your neighborhood doing errands this…"
    />
    <ListItem
      leadingMode="avatar"
      leading={
        <Avatar image={{ uri: "https://mui.com/static/images/avatar/2.jpg" }} />
      }
      title="Summer BBQ"
      secondaryText="Wish I could come, but I'm out of town this…"
    />
    <ListItem
      leadingMode="avatar"
      leading={
        <Avatar image={{ uri: "https://mui.com/static/images/avatar/3.jpg" }} />
      }
      title="Oui Oui"
      secondaryText="Do you have Paris recommendations? Have you ever…"
    />
  </>
  );
}

const Tab = createMaterialTopTabNavigator();

const CommunityNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Posts" component={PostsListScreen}  />
      <Tab.Screen name="Diaries" component={ThirdScreen} />
      <Tab.Screen name="People" component={PostsPeopleScreen} />
    </Tab.Navigator>
  );
};

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={AnotherScreen} />
      <Tab.Screen name="Settings" component={ThirdScreen} />
    </Tab.Navigator>
  );
};


function MacroElementsScreen() {
  return (
    <>
    <ListItem title="List Item"  />
    <ListItem title="List Item" />
    <ListItem title="List Item" />
  </>
  );
}

function MicroElementsScreen() {
  return (
    <>
    <ListItem title="List Item"  />
    <ListItem title="List Item" />
    <ListItem title="List Item" />
  </>
  );
}

function ConcentratesScreen() {
  return (
    <>
    <ListItem title="List Item"  />
    <ListItem title="List Item" />
    <ListItem title="List Item" />
  </>
  );
}

const CalculatorNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Macro" component={MacroElementsScreen} />
      <Tab.Screen name="Micro" component={MicroElementsScreen} />
      <Tab.Screen name="Concentrates" component={ConcentratesScreen} />
    </Tab.Navigator>
  );
};

const Drawer = createDrawerNavigator();

export const Home = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen name="Home" component={HomeScreen} options={{
        drawerIcon: () => <Icon name="home" color='#fff' size={24} />,
        drawerActiveBackgroundColor: "#3e9b46",
        drawerActiveTintColor: "#fff",
        headerRight: () => (<View style={{ marginRight: 10 }}><Icon name="person-outline" size={28} onPress={() => { }} /></View>),
      }} />
      <Drawer.Screen name="Settings" component={SettingsScreen} />
      <Drawer.Screen name="Another" component={TabNavigator} />
      <Drawer.Screen name="Community" component={CommunityNavigator} />
      <Drawer.Screen name="Calculator" component={CalculatorNavigator} />
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