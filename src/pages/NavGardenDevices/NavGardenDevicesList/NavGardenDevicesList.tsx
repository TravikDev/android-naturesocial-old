import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
// import { ScrGardenInfo } from "./ScrGardenPostsList";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ScrGardenDevicesListPage } from "./ScrGardenDevicesListPage";
import { ScrGardenDevicesListSettings } from "./ScrGardenDevicesListSettings";
// import { ScrGardenPostsListPage } from "./ScrGardenDevicesListPage";
// import { ScrGardenPostListSettings } from "./ScrGardenPostsListSettings";
// import { ScrGardenSettings } from "./ScrGardenPostsListSettings";
// import { ScrGardenSettings } from "./ScrGardenInfo/ScrGardenSettings";

const Tab = createBottomTabNavigator();

/* @ts-ignore */
export const NavGardenDevicesList = () => {
    return (
        <Tab.Navigator 
        initialRouteName="GardenPostsListPage"
        screenOptions={() => ({
            tabBarActiveTintColor: '#1A6111',
            tabBarInactiveTintColor: "#000",
            tabBarIndicatorStyle: { backgroundColor: '#1B8113' },
        })}>
            <Tab.Screen 
                name="GardenDevicesListPage"
                component={ScrGardenDevicesListPage}
                options={{ title: 'Devices', headerShown: false }}
            />
            <Tab.Screen
                name="GardenPostsListSettings"
                component={ScrGardenDevicesListSettings}
                options={{ title: 'Settings', headerShown: false }}
            /> 
        </Tab.Navigator>
    );
};
