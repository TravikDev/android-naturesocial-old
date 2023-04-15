import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { ScreenDiaries } from "./ScreenDiaries";
import { ScreenGroups } from "./ScreenGroups";
import { ScreenMembers } from "./ScreenMembers/";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "@react-native-material/core";

const Tab = createMaterialTopTabNavigator();

export const NavigatorCommunity = () => {
    return (
        <Tab.Navigator screenOptions={({ route }) => ({
            tabBarActiveTintColor: '#1A6111',
            tabBarInactiveTintColor: "#000",
            tabBarIndicatorStyle: { backgroundColor: '#1B8113' },
            // tabBarItemStyle: { borderBottomColor: '#1B6113', borderBottomWidth: 2 },
            // tabBarIcon: ({ focused, color, size }) => {
            //     let iconName = ''

            //     if (route.name === 'Members') {
            //         iconName = focused
            //             ? 'supervised-user-circle'
            //             : 'wc';
            //     } else if (route.name === 'Diaries') {
            //         iconName = focused
            //             ? 'import-contacts'
            //             : 'menu-book';
            //     } else if (route.name === 'Groups') {
            //         iconName = focused
            //             ? 'group'
            //             : 'groups';
            //     }

            //     // You can return any component that you like here!
            //     return <Icon name={iconName} size={size} color={color} />;
            // },
            // tabBarActiveTintColor: 'tomato',
            // tabBarInactiveTintColor: 'gray',
        })}>
            <Tab.Screen name="Members" component={ScreenMembers} />
            <Tab.Screen
                name="Diaries"
                component={ScreenDiaries}
                // options={{ tabBarBadge: 3 }}
            />
            <Tab.Screen name="Groups" component={ScreenGroups} />
        </Tab.Navigator>
    );
};
