import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { ScrGardenInfo } from "./ScrGardenInfo";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ScrGardenSettings } from "./ScrGardenSettings";
// import { ScrGardenSettings } from "./ScrGardenInfo/ScrGardenSettings";

const Tab = createBottomTabNavigator();

/* @ts-ignore */
export const NavGardenPage = () => {
    return (
        <Tab.Navigator 
        initialRouteName="GardenPage"
        screenOptions={() => ({
            tabBarActiveTintColor: '#1A6111',
            tabBarInactiveTintColor: "#000",
            tabBarIndicatorStyle: { backgroundColor: '#1B8113' },
        })}>
            <Tab.Screen 
                name="GardensPage"
                component={ScrGardenInfo}
                options={{ title: 'Garden', headerShown: false }}
            />
            <Tab.Screen
                name="GardenSettings"
                component={ScrGardenSettings}
                options={{ title: 'Settings', headerShown: false }}
            /> 
        </Tab.Navigator>
    );
};
