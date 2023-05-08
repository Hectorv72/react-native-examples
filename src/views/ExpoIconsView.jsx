import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FontAwesome5, Ionicons, MaterialIcons, Octicons } from '@expo/vector-icons'

const ExpoIconsView = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}><FontAwesome5 name="home" size={24} color={'black'} /> FontAwesome5</Text>
      <Text style={styles.texto}><Ionicons name="home" size={24} /> Ionicons</Text>
      <Text style={styles.texto}><MaterialIcons name="home" size={24} /> MaterialIcons</Text>
      <Text style={styles.texto}><Octicons name="home" size={24} /> Octicons</Text>
      <Text style={{ fontSize: 28, marginTop: 40 }}>Mas iconos en: https://icons.expo.fyi/</Text>
    </View>
  )
}

export default ExpoIconsView

const styles = StyleSheet.create({
  container: {
    margin: 20
  },
  texto: {
    marginVertical: 5,
    fontSize: 24,
    // color: 'blue'
  }
})