import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const PositionElements = () => {
  return (
    <View style={[stylesStatic.container, styles.container]}>
      <View style={[stylesStatic.cubo, styles.cubo]}>
        <Text style={stylesStatic.texto}>Cubo</Text>
      </View>
      {/* <View style={[stylesStatic.cubo, styles.cubo]}>
        <Text style={stylesStatic.texto}>Cubo 2</Text>
      </View>
      <View style={[stylesStatic.cubo, styles.cubo]}>
        <Text style={stylesStatic.texto}>Cubo 3</Text>
      </View> */}
    </View>
  )
}

export default PositionElements

// Estilos generales
const stylesStatic = StyleSheet.create({
  container: {
    backgroundColor: '#e3e3e3',
    width: '100%',
    height: '100%',
  },
  cubo: {
    padding: 5,
    backgroundColor: 'red',
    width: 80,
    height: 80,
    margin: 5
  },
  texto: {
    flex: 1,
    textAlign: 'center',
    textAlignVertical: 'center',
  }
})

/// Estilos para ajustar posicion de elementos al centro del contenedor
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  cubo: {
  },
})

/// Estilos para ajustar los elementos al centro o a una posicion determinada en pixeles
// const styles = StyleSheet.create({
//   container: {
//   },
//   cubo: {
//     position: 'absolute',
//     top: 400,
//     left: 250,
//   },
// })