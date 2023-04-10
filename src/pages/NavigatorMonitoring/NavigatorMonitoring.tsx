import { Icon } from '@react-native-material/core';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react'
import { ScreenState } from './ScreenState';
import { ScreenControl } from './ScreenControl';
import { ScreenCharts } from './ScreenCharts';


const Tab = createBottomTabNavigator();

export const NavigatorMonitoring = () => {
    return (
        <Tab.Navigator screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
                let iconName = ''

                if (route.name === 'State') {
                    iconName = focused
                        ? 'network-check'
                        : 'speed';
                } else if (route.name === 'Control') {
                    iconName = focused
                        ? 'miscellaneous-services'
                        : 'settings';
                } else if (route.name === 'Charts') {
                    iconName = focused
                        ? 'pie-chart'
                        : 'pie-chart-outlined';
                }

                // You can return any component that you like here!
                return <Icon name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: 'tomato',
            tabBarInactiveTintColor: 'gray',
        })}>
            <Tab.Screen name="State" component={ScreenState} />
            <Tab.Screen
                name="Control"
                component={ScreenControl}
                options={{ tabBarBadge: 3 }}
            />
            <Tab.Screen name="Charts" component={ScreenCharts} />
        </Tab.Navigator>
    );
};
