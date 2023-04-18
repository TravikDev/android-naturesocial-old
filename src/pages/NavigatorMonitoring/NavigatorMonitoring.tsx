import { Icon } from '@react-native-material/core';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react'
import { ScreenState } from './ScreenState';
import { ScreenMonitoringSettings } from './ScreenMonitoringSettings';
// import { ScreenCharts } from './ScreenCharts';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const Tab = createBottomTabNavigator();

export const NavigatorMonitoring = () => {
    return (
        <Tab.Navigator screenOptions={{
            tabBarActiveTintColor: '#1A6111',
            tabBarInactiveTintColor: "#000",
            // tabBarIndicatorStyle: { backgroundColor: '#1B8113' },
        }}
        // screenOptions={({ route }) => ({
        //     tabBarIcon: ({ focused, color }) => {
        //         let iconName = ''



        //         // You can return any component that you like here!
        //         return <Icon name={iconName} color={color} />;
        //     },
        //     tabBarActiveTintColor: 'tomato',
        //     tabBarInactiveTintColor: 'gray',
        // })}
        >
            <Tab.Screen 
            name="State" 
            component={ScreenState}
            options={{ 
                headerShown: false, 
                tabBarIcon: () => <Icon name="speed" size={32} color='#666' />
            }}
            
            />
            <Tab.Screen 
            name="Settings" 
            component={ScreenMonitoringSettings}
            options={{ 
                headerShown: false,
                tabBarIcon: () => <Icon name="miscellaneous-services" size={32} color='#666' />
             }}

            />
            {/* <Tab.Screen name="Charts" component={ScreenCharts} />
            <Tab.Screen
                name="Control"
                component={ScreenControl}
                // options={{ tabBarBadge: 3 }}
            /> */}
        </Tab.Navigator>
    );
};

// if (route.name === 'State') {
//     iconName = focused
//         ? 'network-check'
//         : 'speed';
// } else if (route.name === 'Control') {
//     iconName = focused
//         ? 'miscellaneous-services'
//         : 'settings';
// } else if (route.name === 'Charts') {
//     iconName = focused
//         ? 'pie-chart'
//         : 'pie-chart-outlined';
// }