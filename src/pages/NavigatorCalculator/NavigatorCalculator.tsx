import { useState } from "react"
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { MacroElementsScreen } from "./ScreenMacro";
import { MicroElementsScreen } from "./ScreenMicro";
import { ConcentratesScreen } from "./ScreenConcentrates";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { TextInput, Text, View, StyleSheet } from "react-native"
import { Button, Icon, Pressable } from "@react-native-material/core";


const Tab = createMaterialTopTabNavigator()
const BottomTab = createBottomTabNavigator()

const TopTabNavigatorCalculator = () => {
  return (
    <Tab.Navigator screenOptions={{
      tabBarActiveTintColor: '#1A6111',
      tabBarInactiveTintColor: "#000",
      tabBarIndicatorStyle: { backgroundColor: '#1B8113' },
    }}>
      <Tab.Screen name="Macro" component={MacroElementsScreen} />
      <Tab.Screen name="Micro" component={MicroElementsScreen} />
      <Tab.Screen name="Concentrates" component={ConcentratesScreen} />
    </Tab.Navigator>
  )
}

export const NavigatorCalculator = () => {

  const [inputText, setInputText] = useState('100')

  return (
    <BottomTab.Navigator screenOptions={{ headerShown: false }}>
      <BottomTab.Screen name="TopTabs" component={TopTabNavigatorCalculator}
        options={{
          tabBarLabel: () => (
            <View style={styles.bottomTabContainer}>


              <View style={styles.bottomLeftTabContainer}>
                <Text style={{ color: '#111', fontWeight: '300', fontSize: 18 }}>Liters:</Text>
                <View style={{ overflow: 'hidden', maxWidth: 70 }}><TextInput
                  style={{ fontSize: 18, fontWeight: '300', color: '#111', textAlign: 'auto', lineHeight: 19, top: 3 }}
                  placeholder="liters"
                  value={inputText}
                  onChangeText={setInputText}
                  keyboardType="numeric"
                  defaultValue="1 litre"
                /></View>
              </View>


              <Pressable style={styles.bottomCenterTabContainer}>
                <Text style={{ fontSize: 14, fontWeight: '300', color: '#666', textTransform: 'uppercase', maxWidth: 150, textAlign: 'center' }}>Огурец веранда вега старт</Text>
              </Pressable>

              <View style={styles.bottomRightTabContainer}>
                <Button
                  title="Save"
                  tintColor='#fff'
                  color='#3FB049'
                  onPress={() => { }}
                  leading={props => <Icon name="delete" {...props} />}
                />
              </View>


            </View>
          ),
        }}
      />
    </BottomTab.Navigator>
  );
};

const styles = StyleSheet.create({
  bottomTabContainer: {
    width: "100%",
    height: 65,
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: '#fff',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopColor: '#ccc',
    borderTopWidth: 1,
    gap: 5
  },
  bottomLeftTabContainer: {
    // width: "33.33%",
    flexGrow: 1,
    // paddingHorizontal: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    // paddingHorizontal: 10,
    alignItems: 'center',
    // backgroundColor: '#e7e7e7',
    overflow: 'hidden',
  },
  bottomCenterTabContainer: {
    // width: "33.33%",
    flexGrow: 1,
    height: 36,
    // paddingHorizontal: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 1
  },
  bottomRightTabContainer: {
    // width: "33.33%",
    flexGrow: 1,
    // paddingHorizontal: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
})