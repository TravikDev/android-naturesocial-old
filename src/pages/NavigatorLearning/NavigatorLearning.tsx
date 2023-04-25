import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { ScreenJunior } from "./ScreenJunior";
import { ScreenMiddle } from "./ScreenMiddle";
import { ScreenSenior } from "./ScreenSenior";
// import { ScreenDiaries } from "./ScreenDiaries";
// import { ScreenGardensList } from "./ScreenGardensList";
// import { ScreenGroupsList } from "./ScreenGroupsList";
// import { ScreenGardensList } from "./ScreenGardensList";
// import { ScreenUsersList } from "./ScreenGardensList";
// import { ScreenGardensList } from "./ScreenGroupsList";

const Tab = createMaterialTopTabNavigator();

/* @ts-ignore */
export const NavigatorLearning = () => {
    return (
        <Tab.Navigator screenOptions={() => ({
            tabBarActiveTintColor: '#1A6111',
            tabBarInactiveTintColor: "#000",
            tabBarIndicatorStyle: { backgroundColor: '#1B8113' },
        })}>
            <Tab.Screen 
                name="JuniorList"
                component={ScreenJunior}
                options={{ title: 'Junior' }}
            />
            <Tab.Screen
                name="MiddleList"
                component={ScreenMiddle}
                options={{ title: 'Middle' }}
            />
            <Tab.Screen
                name="SeniorList"
                component={ScreenSenior}
                options={{ title: 'Senior' }}
            />
            {/* <Tab.Screen name="Groups" component={ScreenGroups} /> */}
        </Tab.Navigator>
    );
};
