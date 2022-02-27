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
import { navigateAndSimpleReset } from '@/Navigators/utils'

const CameraContainer = () => {
  const { Layout, Gutters, Fonts, Colors, Images, Common } = useTheme()

  const { t } = useTranslation()

  return (
    <View style={[styles.container]}>
      <Text>Yes</Text>
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

export default CameraContainer
