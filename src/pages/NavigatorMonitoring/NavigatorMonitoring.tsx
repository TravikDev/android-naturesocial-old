import { Icon } from '@react-native-material/core';
import React from 'react'
import { ScreenState } from './ScreenState';
import { ScreenMonitoringSettings } from './ScreenMonitoringSettings';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const Tab = createBottomTabNavigator();

export const NavigatorMonitoring = () => {
    return (
        <Tab.Navigator screenOptions={{
            tabBarActiveTintColor: '#1A6111',
            tabBarInactiveTintColor: "#000",
        }}>
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
        </Tab.Navigator>
    );
};