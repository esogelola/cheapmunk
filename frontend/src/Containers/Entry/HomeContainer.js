import React, { useEffect } from 'react'
import {
  ImageBackground,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native'
import { useTranslation } from 'react-i18next'
import { useTheme } from '@/Hooks'
import { Brand } from '@/Components'
import { setDefaultTheme } from '@/Store/Theme'
import { navigate } from '@/Navigators/utils'

const HomeContainer = () => {
  const { Layout, Gutters, Fonts, Colors, Images, Common } = useTheme()

  const { t } = useTranslation()

  return (
    <View style={[styles.container]}>
      <ImageBackground
        source={Images.introImage}
        resizeMode="cover"
        style={[styles.image]}
      >
        <View style={styles.pushDown}>
          <Text style={[Fonts.textRight, Fonts.welcomeTo]}>Welcome to</Text>
          <Text style={[Fonts.textCenter, Fonts.brandName]}>Cheapmunk</Text>
          <View>
            <Text style={[Fonts.textCenter, styles.miniText]}>
              Budgeting has never been more fun!
            </Text>
            <TouchableOpacity
              style={[Common.button.rounded]}
              onClick={() => {
                navigate('SignUp')
              }}
            >
              <Text style={[Fonts.buttonText, styles.button]}>Register</Text>
            </TouchableOpacity>
            <Text style={[Fonts.textCenter, styles.miniText]}>
              Already have an account?{' '}
              <TouchableOpacity
                onClick={() => {
                  navigate('SignIn')
                }}
              >
                <Text style={[styles.buttonText]}>Log in!</Text>
              </TouchableOpacity>
            </Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    padding: 30,
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  buttonText: {
    color: 'white',
    alignSelf: 'center',
    textAlign: 'center',
  },
  miniText: {
    color: 'white',
    marginVertical: 10,
  },
  pushDown: {
    marginBottom: 50,
  },
})

export default HomeContainer
