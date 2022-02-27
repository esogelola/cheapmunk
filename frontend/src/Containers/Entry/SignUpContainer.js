import React, { useEffect } from 'react'
import {
  ImageBackground,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native'
import { useTranslation } from 'react-i18next'
import { useTheme } from '@/Hooks'
import { Brand } from '@/Components'
import { setDefaultTheme } from '@/Store/Theme'
import { navigate } from '@/Navigators/utils'

const SignInContainer = () => {
  const { Layout, Gutters, Fonts, Colors, Images, Common } = useTheme()

  const { t } = useTranslation()

  return (
    <View style={[styles.container]}>
      <ImageBackground
        source={Images.introImage}
        resizeMode="cover"
        style={[styles.image]}
        blurRadius={4}
      >
        <View
          style={{ flex: 1, flexDirection: 'column', alignItems: 'center' }}
        >
          <Brand />
          <View style={styles.textInputContainer}>
            <TextInput
              placeholder="Name"
              style={styles.textInput}
              autoCapitalize="none"
              placeholderTextColor={'white'}
            />
          </View>
          <View style={styles.textInputContainer}>
            <TextInput
              placeholder="Email"
              style={styles.textInput}
              autoCapitalize="none"
              placeholderTextColor={'white'}
            />
          </View>
          <View style={styles.textInputContainer}>
            <TextInput
              placeholder="Password"
              style={styles.textInput}
              autoCapitalize="none"
              placeholderTextColor={'white'}
            />
          </View>
          <TouchableOpacity
            style={[Common.button.rounded, styles.pushDown]}
            onClick={() => {
              navigate('SignUp')
            }}
          >
            <Text style={[Fonts.buttonText, styles.button]}>Sign up</Text>
          </TouchableOpacity>
          <Text style={[Fonts.textCenter, styles.miniText]}>
            Already have an account?{' '}
            <TouchableOpacity
              onClick={() => {
                navigate('SignIn')
              }}
            >
              <Text style={[styles.buttonText]}>Login!</Text>
            </TouchableOpacity>
          </Text>
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

    flexDirection: 'row',
    alignItems: 'center',

    tintColor: 'black',
  },
  glass: {
    width: '100%',
    height: '100%',
    flex: 1,
    justifyContent: 'center',

    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#000000',
    opacity: 0.4,
  },
  textWhite: {
    color: 'white',
    opacity: 1,
  },
  buttonText: {
    color: 'white',
    alignSelf: 'center',
    textAlign: 'center',
  },
  pushDown: {
    marginTop: 50,
  },
  textInputContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    marginVertical: 10,
    borderRadius: 20,
  },
  textInput: {
    color: 'white',
    padding: 10,
    minWidth: '75%',
  },
  miniText: {
    color: 'white',
    marginVertical: 10,
  },
})

export default SignInContainer
