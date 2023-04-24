import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { ScreenDiaries } from "./ScreenDiaries";
// import { ScreenGardensList } from "./ScreenGardensList";
import { ScreenUsersList } from "./ScreenUsersList";
import { ScreenGardensList } from "./ScreenGardensList";

const Tab = createMaterialTopTabNavigator();

export const NavigatorCommunityLists = () => {
    return (
        <Tab.Navigator screenOptions={() => ({
            tabBarActiveTintColor: '#1A6111',
            tabBarInactiveTintColor: "#000",
            tabBarIndicatorStyle: { backgroundColor: '#1B8113' },
        })}>
            <Tab.Screen 
                name="UsersList" 
                component={ScreenUsersList}
                options={{ title: 'Users' }}
            />
            <Tab.Screen
                name="Diaries"
                component={ScreenGardensList}
                options={{ title: 'Gardens' }}
            />
            {/* <Tab.Screen name="Groups" component={ScreenGroups} /> */}
        </Tab.Navigator>
    );
};
