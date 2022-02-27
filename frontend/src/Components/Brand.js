import React from 'react'
import PropTypes from 'prop-types'
import { View, Image, StyleSheet } from 'react-native'
import { useTheme } from '@/Hooks'

const Brand = ({ height, width, mode }) => {
  const { Layout, Images } = useTheme()

  return (
    <View style={{ height, width }}>
      <View style={styles.circle}>
        <Image
          style={[Layout.fullSize]}
          source={Images.logo}
          resizeMode={mode}
        />
      </View>
    </View>
  )
}

Brand.propTypes = {
  height: PropTypes.number,
  mode: PropTypes.oneOf(['contain', 'cover', 'stretch', 'repeat', 'center']),
  width: PropTypes.number,
}

Brand.defaultProps = {
  height: 200,
  mode: 'contain',
  width: 200,
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D59F5D',
  },
  circle: {
    backgroundColor: '#EED29D',
    padding: 30,
    borderRadius: 100,
  },
})

export default Brand
