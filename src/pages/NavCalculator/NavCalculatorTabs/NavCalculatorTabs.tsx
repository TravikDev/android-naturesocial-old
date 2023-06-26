import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { ScrTabMacro } from "./ScrTabMacro";
import { ScrTabMicro } from "./ScrTabMicro";
import { ScrTabConcentrates } from "./ScrTabConcentrates";
import { ScrTabStages } from "./ScrTabStages";
import { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";


const Tab = createMaterialTopTabNavigator()

/* @ts-ignore */
export const NavCalculatorTabs = ({ route }) => {

  return (
    <Tab.Navigator
      screenOptions={{
       lazyPreloadDistance: 1, 
        // tabBarBadge: () => ,
        tabBarActiveTintColor: '#1A6111',
        tabBarInactiveTintColor: "#000",
        tabBarIndicatorStyle: { backgroundColor: '#1B8113' },
        tabBarScrollEnabled: true,
        tabBarItemStyle: { width: 130 },
        tabBarStyle: {
        },
      }}>
      <Tab.Screen name="Stages" component={ScrTabStages} options={{ title: 'Фазы' }} />
      <Tab.Screen name="Macro" component={ScrTabMacro} options={{ title: 'Макро' }} initialParams={{ volume: route.params?.volume}} />
      <Tab.Screen name="Micro" component={ScrTabMicro} options={{ title: 'Микро' }} />
      <Tab.Screen name="Concentrates" component={ScrTabConcentrates} options={{ title: 'Концентраты' }} />

    </Tab.Navigator>
  )
}