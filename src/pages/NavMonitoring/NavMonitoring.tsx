import { Icon } from '@react-native-material/core';
import React from 'react'
// import { ScreenState } from './ScrState';
// import { ScreenMonitoringSettings } from './ScrMonitoringSettings';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ScrState } from './ScrState';
import { ScrMonitoringSettings } from './ScrMonitoringSettings';


const Tab = createBottomTabNavigator();

export const NavMonitoring = () => {
    return (
        <Tab.Navigator screenOptions={{
            tabBarActiveTintColor: '#1A6111',
            tabBarInactiveTintColor: "#000",
        }}>
            <Tab.Screen 
            name="State" 
            component={ScrState}
            options={{ 
                headerShown: false, 
                tabBarIcon: () => <Icon name="speed" size={32} color='#666' />
            }}
            
            />
            <Tab.Screen 
            name="Settings" 
            component={ScrMonitoringSettings}
            options={{ 
                headerShown: false,
                tabBarIcon: () => <Icon name="miscellaneous-services" size={32} color='#666' />
             }}

            />
        </Tab.Navigator>
    );
};