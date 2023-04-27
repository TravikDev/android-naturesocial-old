import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { ScrTabMacro } from "./ScrTabMacro";
import { ScrTabMicro } from "./ScrTabMicro";
import { ScrTabConcentrates } from "./ScrTabConcentrates";


const Tab = createMaterialTopTabNavigator()

export const NavCalculatorTabs = () => {
  return (
    <Tab.Navigator screenOptions={{
      tabBarActiveTintColor: '#1A6111',
      tabBarInactiveTintColor: "#000",
      tabBarIndicatorStyle: { backgroundColor: '#1B8113' },
    }}>
      <Tab.Screen name="Macro" component={ScrTabMacro} />
      <Tab.Screen name="Micro" component={ScrTabMicro} />
      <Tab.Screen name="Concentrates" component={ScrTabConcentrates} />
    </Tab.Navigator>
  )
}