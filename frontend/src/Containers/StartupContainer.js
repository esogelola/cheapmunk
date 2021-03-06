import React, { useEffect } from 'react'
import { ActivityIndicator, View, Text, StyleSheet } from 'react-native'
import { useTranslation } from 'react-i18next'
import { useTheme } from '@/Hooks'
import { Brand } from '@/Components'
import { setDefaultTheme } from '@/Store/Theme'
import { navigateAndSimpleReset } from '@/Navigators/utils'
import { useSelector } from 'react-redux'

const StartupContainer = () => {
  const { Layout, Gutters, Fonts, Colors } = useTheme()
  const isSignedIn = useSelector(state => state.user)

  const { t } = useTranslation()

  const init = async () => {
    await new Promise(resolve =>
      setTimeout(() => {
        resolve(true)
      }, 2000),
    )
    await setDefaultTheme({ theme: 'default', darkMode: null })

    // Here you can add asynchronous/synchronous tasks

    // Check if user is loggedin
    if (isSignedIn) {
      navigateAndSimpleReset('Main')
    } else {
      navigateAndSimpleReset('Home')
    }
    // If logged in we push em to main

    // Push them to signup page
  }

  useEffect(() => {
    init()
  })

  return (
    <View style={[Layout.fill, Layout.colCenter, styles.container]}>
      <Brand />

      <Text style={[Fonts.textCenter, Fonts.brandName]}>Cheapmunk</Text>
      <ActivityIndicator size={'large'} style={[Gutters.largeVMargin]} />
    </View>
  )
}

export default StartupContainer
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#D59F5D',
  },
})
