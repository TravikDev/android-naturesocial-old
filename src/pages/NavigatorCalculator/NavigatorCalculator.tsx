import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { MacroElementsScreen } from "./ScreenMacro";
import { MicroElementsScreen } from "./ScreenMicro";
import { ConcentratesScreen } from "./ScreenConcentrates";

const Tab = createMaterialTopTabNavigator()

export const NavigatorCalculator = () => {
    return (
      <Tab.Navigator>
        <Tab.Screen name="Macro" component={MacroElementsScreen} />
        <Tab.Screen name="Micro" component={MicroElementsScreen} />
        <Tab.Screen name="Concentrates" component={ConcentratesScreen} />
      </Tab.Navigator>
    );
  };
  