import React from 'react'
import {
  FlatList,
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import tw from 'twrnc'

const data = [
  {
    id: '123',
    title: 'Food',
    icon: 'rocket',
    screen: 'ViewBudgetInfo',
  },
  {
    id: '9',
    title: 'Food',
    icon: 'rocket',
    screen: 'ViewBudgetInfo',
  },
  {
    id: '5',
    title: 'Food',
    icon: 'rocket',
    screen: 'ViewBudgetInfo',
  },
  {
    id: '1',
    title: 'Food',
    icon: 'rocket',
    screen: 'ViewBudgetInfo',
  },
  {
    id: '2',
    title: 'Food',
    icon: 'rocket',
    screen: 'ViewBudgetInfo',
  },
  {
    id: '4',
    title: 'Food',
    icon: 'rocket',
    screen: 'ViewBudgetInfo',
  },
]
function BudgetOptions() {
  return (
    <FlatList
      data={data}
      horizontal={false}
      numColumns={3}
      renderItem={({ item }) => (
        <TouchableOpacity style={[tw`p-2 pl-6 pb-8 pt-4 m-4 `, styles.card]}>
          <View>
            <Icon
              name={item.icon}
              size={32}
              color="#BCEFFF"
              style={styles.abIcon}
            />
            <Text>{item.title}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  )
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FDFDFD',
    borderRadius: 17,
    minWidth: 110,
    minHeight: 150,
  },
  abIcon: {
    position: 'absolute',
    top: -230,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 100,

    left: 0,
    right: 0,
    textAlign: 'center',
  },
})
export default BudgetOptions
