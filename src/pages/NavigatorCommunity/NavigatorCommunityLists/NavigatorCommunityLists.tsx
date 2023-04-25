import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { ScreenDiaries } from "./ScreenDiaries";
import { ScreenGardensList } from "./ScreenGardensList";
import { ScreenGroupsList } from "./ScreenGroupsList";
// import { ScreenGardensList } from "./ScreenGardensList";
// import { ScreenUsersList } from "./ScreenGardensList";
// import { ScreenGardensList } from "./ScreenGroupsList";

const Tab = createMaterialTopTabNavigator();

/* @ts-ignore */
export const NavigatorCommunityLists = () => {
    return (
        <Tab.Navigator screenOptions={() => ({
            tabBarActiveTintColor: '#1A6111',
            tabBarInactiveTintColor: "#000",
            tabBarIndicatorStyle: { backgroundColor: '#1B8113' },
        })}>
            <Tab.Screen 
                name="GardensList"
                component={ScreenGardensList}
                options={{ title: 'Gardens' }}
            />
            <Tab.Screen
                name="GroupsList"
                component={ScreenGroupsList}
                options={{ title: 'Groups' }}
            />
            {/* <Tab.Screen name="Groups" component={ScreenGroups} /> */}
        </Tab.Navigator>
    );
};
