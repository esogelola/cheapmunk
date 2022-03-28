import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'

import LinearGradient from 'react-native-linear-gradient'
import { Picker } from '@react-native-picker/picker'

function MainContainer() {
  const [selectedBudgetGroup, setSelectedBudgetGroup] = useState()
  const [userBudgetGroups, setUserBudgetGroups] = useState([
    'Personal',
    'Roomies',
    'Family',
  ])
  return (
    <LinearGradient
      style={[styles.container]}
      colors={['rgba(7, 47, 35, 1)', 'rgba(229, 229, 229, 1)']}
    >
      {/* Header, Monthly Overview, budgetGroup, Profile Icon */}
      <View styles={styles.header}>
        <View styles={styles.headerLeft}>
          <Text>Monthly Overview</Text>
          <Picker
            selectedValue={selectedBudgetGroup}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedBudgetGroup(itemValue)
            }
          >
            {userBudgetGroups.map(budgetItem => {
              return <Picker.Item label={budgetItem} value={budgetItem} />
            })}
          </Picker>
        </View>
      </View>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
  },
})

export default MainContainer
