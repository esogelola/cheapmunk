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
import { useDispatch } from 'react-redux'

const SignInContainer = () => {
  const { Layout, Gutters, Fonts, Colors, Images, Common } = useTheme()
  const dispatch = useDispatch()
  const { t } = useTranslation()

  return (
    <View style={[styles.container]}>
      <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center' }}>
        <Brand />
        <Text style={[styles.textWhite, styles.textCenter]}>
          Sign up now to make your budgeting easier!
        </Text>
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
          onPress={() => {
            dispatch({ type: 'forceSignIn' })
          }}
        >
          <Text style={[Fonts.buttonText, styles.button]}>Log In</Text>
        </TouchableOpacity>
        <Text style={[Fonts.textCenter, styles.miniText]}>
          Don't have an account?{' '}
          <TouchableOpacity
            onPress={() => {
              navigate('SignUp')
            }}
          >
            <Text style={[styles.buttonText]}>Register!</Text>
          </TouchableOpacity>
        </Text>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D59F5D',
    justifyContent: 'center',

    flexDirection: 'row',
    alignItems: 'center',
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
  textCenter: {
    textAlign: 'center',
  },
})

export default SignInContainer
