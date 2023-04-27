import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
// import { ScrGardenInfo } from "./ScrGardenPostsList";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { ScrGardenDevicesListPage } from "../../NavGardenDevices/NavGardenDevicesList/ScrGardenDevicesListPage";
// import { ScrGardenDevicesListSettings } from "../../NavGardenDevices/NavGardenDevicesList/ScrGardenDevicesListSettings";
import { ScrGardenProfilesListPage } from "./ScrGardenProfilesListPage";
import { ScrGardenProfilesListSettings } from "./ScrGardenProfilesListSettings";
// import { ScrGardenDevicesListPage } from "./ScrGardenDevicesListPage";
// import { ScrGardenDevicesListSettings } from "./ScrGardenProfilesListSettings";
// import { ScrGardenPostsListPage } from "./ScrGardenDevicesListPage";
// import { ScrGardenPostListSettings } from "./ScrGardenPostsListSettings";
// import { ScrGardenSettings } from "./ScrGardenPostsListSettings";
// import { ScrGardenSettings } from "./ScrGardenInfo/ScrGardenSettings";

const Tab = createBottomTabNavigator();

/* @ts-ignore */
export const NavGardenProfilesList = () => {
    return (
        <Tab.Navigator 
        initialRouteName="GardenProfilesListPage"
        screenOptions={() => ({
            tabBarActiveTintColor: '#1A6111',
            tabBarInactiveTintColor: "#000",
            tabBarIndicatorStyle: { backgroundColor: '#1B8113' },
        })}>
            <Tab.Screen 
                name="GardenProfilesListPage"
                component={ScrGardenProfilesListPage}
                options={{ title: 'Profiles', headerShown: false }}
            />
            <Tab.Screen
                name="GardenProfilesListSettings"
                component={ScrGardenProfilesListSettings}
                options={{ title: 'Settings', headerShown: false }}
            /> 
        </Tab.Navigator>
    );
};
