import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { MainContainer } from '@/Containers'
import { MyTabBar } from '@/Components/TabBar'

const Stack = createStackNavigator()

// @refresh reset
const MainNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="DataPage"
        component={MainContainer}
        options={{
          tabBarIconStyle: { display: 'none' },
          tabBarLabelPosition: 'beside-icon',
        }}
      />
    </Stack.Navigator>
  )
}

export default MainNavigator
