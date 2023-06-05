import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ItemPersona = ({ data }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{data.nya}</Text>
      <Text style={styles.text}>{data.email}</Text>
      <Text style={styles.text}>{data.telefono}</Text>
    </View>
  )
}

export default ItemPersona

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    marginHorizontal: 3,
    gap: 3
  },
  text: {
    flex: 1,
    // backgroundColor: 'red',
    textAlign: 'center',
  }
})