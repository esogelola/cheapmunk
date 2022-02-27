import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { CameraContainer, SettingsContainer } from '@/Containers'
import { MyTabBar } from '@/Components/TabBar'

const Tab = createBottomTabNavigator()

// @refresh reset
const MainNavigator = () => {
  return (
    <Tab.Navigator tabBar={props => <MyTabBar {...props} />}>
      <Tab.Screen
        name="Settings"
        component={SettingsContainer}
        options={{
          tabBarIconStyle: { display: 'none' },
          tabBarLabelPosition: 'beside-icon',
        }}
      />

      <Tab.Screen
        name="Add transaction"
        component={SettingsContainer}
        options={{
          tabBarIconStyle: { display: 'none' },
          tabBarLabelPosition: 'beside-icon',
        }}
      />
      <Tab.Screen
        name="Camera"
        component={CameraContainer}
        options={{
          tabBarIconStyle: { display: 'none' },
          tabBarLabelPosition: 'beside-icon',
        }}
      />
    </Tab.Navigator>
  )
}

export default MainNavigator
