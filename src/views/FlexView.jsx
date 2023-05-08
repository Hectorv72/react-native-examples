import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const FlexView = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}><Text style={styles.texto}>Header</Text></View>
      <View style={styles.body}><Text style={styles.texto}>Body</Text></View>
      <View style={styles.footer}><Text style={styles.texto}>Footer</Text></View>
    </View>
  )
}

export default FlexView

// Flex nos permite especificar que los elementos que se encuentren en el contenedor
// se acomodaran para ocupar todo el tamaño posible
const styles = StyleSheet.create({
  container: {
    flex: 1,
    /// flexDirection nos permite especificar de que manera se acomodaran los elementos
    // flexDirection: 'row'
  },
  header: {
    flex: 1,
    backgroundColor: 'pink',
  },
  body: {
    flex: 1,
    /// flexGrow nos permite especificar la importancia o tamaño que tendra el elemento en el contenedor
    // flexGrow: 10,
    backgroundColor: '#45ffb8'
  },
  footer: {
    flex: 1,
    backgroundColor: '#6bbaff'
  },
  texto: {
    fontSize: 28,
    height: '100%',
    textAlign: 'center',
    textAlignVertical: 'center'
  }
})