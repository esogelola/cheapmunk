import React from 'react'
import { SafeAreaView, StatusBar } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import {
  StartupContainer,
  SignInContainer,
  SignUpContainer,
  HomeContainer,
} from '@/Containers'
import { useTheme } from '@/Hooks'
import MainNavigator from './Main'
import { navigationRef } from './utils'

const Stack = createStackNavigator()
import { useSelector } from 'react-redux'

// @refresh reset
const ApplicationNavigator = () => {
  const { Layout, darkMode, NavigationTheme } = useTheme()
  const { colors } = NavigationTheme
  const isSignedIn = useSelector(state => state.user)

  return (
    <SafeAreaView style={[Layout.fill, { backgroundColor: colors.card }]}>
      <NavigationContainer theme={NavigationTheme} ref={navigationRef}>
        <StatusBar barStyle={darkMode ? 'light-content' : 'dark-content'} />
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Startup" component={StartupContainer} />
          {isSignedIn ? (
            <>
              <Stack.Screen
                name="Main"
                component={MainNavigator}
                options={{
                  animationEnabled: false,
                }}
              />
            </>
          ) : (
            <>
              <Stack.Screen
                name="Home"
                component={HomeContainer}
                options={{
                  animationEnabled: false,
                }}
              />
              <Stack.Screen
                name="SignIn"
                component={SignInContainer}
                options={{
                  animationEnabled: false,
                }}
              />
              <Stack.Screen
                name="SignUp"
                component={SignUpContainer}
                options={{
                  animationEnabled: false,
                }}
              />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  )
}

export default ApplicationNavigator
