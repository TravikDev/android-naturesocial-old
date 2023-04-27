import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
// import { ScrGardenInfo } from "./ScrGardenPostsList";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ScrGardenPostsListPage } from "./ScrGardenPostsListPage";
import { ScrGardenPostListSettings } from "./ScrGardenPostsListSettings";
// import { ScrGardenSettings } from "./ScrGardenPostsListSettings";
// import { ScrGardenSettings } from "./ScrGardenInfo/ScrGardenSettings";

const Tab = createBottomTabNavigator();

/* @ts-ignore */
export const NavGardenPostsList = () => {
    return (
        <Tab.Navigator 
        initialRouteName="GardenPostsListPage"
        screenOptions={() => ({
            tabBarActiveTintColor: '#1A6111',
            tabBarInactiveTintColor: "#000",
            tabBarIndicatorStyle: { backgroundColor: '#1B8113' },
        })}>
            <Tab.Screen 
                name="GardenPostsListPage"
                component={ScrGardenPostsListPage}
                options={{ title: 'Garden', headerShown: false }}
            />
            <Tab.Screen
                name="GardenPostsListSettings"
                component={ScrGardenPostListSettings}
                options={{ title: 'Settings', headerShown: false }}
            /> 
        </Tab.Navigator>
    );
};
