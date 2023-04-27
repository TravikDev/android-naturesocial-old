import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { ScrLessons } from "./ScrLessons";
import { ScrGuides } from "./ScrGuides";
import { ScrQuestions } from "./ScrQuestions";
// import { ScreenDiaries } from "./ScreenDiaries";
// import { ScreenGardensList } from "./ScreenGardensList";
// import { ScreenGroupsList } from "./ScreenGroupsList";
// import { ScreenGardensList } from "./ScreenGardensList";
// import { ScreenUsersList } from "./ScreenGardensList";
// import { ScreenGardensList } from "./ScreenGroupsList";

const Tab = createMaterialTopTabNavigator();

/* @ts-ignore */
export const NavLearning = () => {
    return (
        <Tab.Navigator screenOptions={() => ({
            tabBarActiveTintColor: '#1A6111',
            tabBarInactiveTintColor: "#000",
            tabBarIndicatorStyle: { backgroundColor: '#1B8113' },
        })}>
            <Tab.Screen 
                name="LessonsList"
                component={ScrLessons}
                options={{ title: 'Lessons' }}
            />
            <Tab.Screen
                name="GuidesList"
                component={ScrGuides}
                options={{ title: 'Guides' }}
            />
            <Tab.Screen
                name="QuestionsList"
                component={ScrQuestions}
                options={{ title: 'Questions' }}
            />
            {/* <Tab.Screen name="Groups" component={ScreenGroups} /> */}
        </Tab.Navigator>
    );
};
