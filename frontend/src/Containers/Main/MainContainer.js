import React, { useEffect, useState } from 'react'
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
import SelectDropdown from 'react-native-select-dropdown'

import LinearGradient from 'react-native-linear-gradient'
function MainContainer() {
  const countries = ['Egypt', 'Canada', 'Australia', 'Ireland']

  return (
    <LinearGradient
      style={[styles.container]}
      useAngle={true}
      angle={180}
      colors={['#072F23', '#E5E5E5']}
    >
      <View style={styles.innerContainer}>
        <Text style={styles.monthlyTest}>Monthly Overview</Text>
        <SelectDropdown
          data={countries}
          // defaultValueByIndex={1}
          // defaultValue={'Egypt'}
          onSelect={(selectedItem, index) => {
            console.log(selectedItem, index)
          }}
          defaultButtonText={'Select country'}
          buttonTextAfterSelection={(selectedItem, index) => {
            return selectedItem
          }}
          rowTextForSelection={(item, index) => {
            return item
          }}
          buttonStyle={styles.dropdown1BtnStyle}
          buttonTextStyle={styles.dropdown1BtnTxtStyle}
          dropdownIconPosition={'right'}
          dropdownStyle={styles.dropdown1DropdownStyle}
          rowStyle={styles.dropdown1RowStyle}
          rowTextStyle={styles.dropdown1RowTxtStyle}
        />
      </View>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 4,
  },
  innerContainer: {
    padding: 10,
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
  monthlyTest: {
    fontFamily: 'Cabin',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 24,
    lineHeight: 29,
    color: 'white',
  },
  dropdown1BtnStyle: {
    width: '80%',
    height: 50,
    backgroundColor: '#FFF',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#444',
  },
  dropdown1BtnTxtStyle: { color: '#444', textAlign: 'left' },
  dropdown1DropdownStyle: { backgroundColor: '#EFEFEF' },
  dropdown1RowStyle: {
    backgroundColor: '#EFEFEF',
    borderBottomColor: '#C5C5C5',
  },
  dropdown1RowTxtStyle: { color: '#444', textAlign: 'left' },
})

export default MainContainer
