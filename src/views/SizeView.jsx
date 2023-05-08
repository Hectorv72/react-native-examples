import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ScaledSheet } from 'react-native-size-matters'

const SizeView = () => {
  return (
    <View style={styles.container}>
      <View style={[general.box, styles.box]}>
        <Text style={styles.texto}>Pixeles normales</Text>
      </View>
      <View style={[general.box, stylesScaled.box]}>
        <Text style={stylesScaled.texto}>Pixeles escalados</Text>
      </View>
    </View>
  )
}

export default SizeView

const general = StyleSheet.create({
  box: {
    backgroundColor: '#b38aff',
    justifyContent: 'center',
    alignItems: 'center'
  }
})

const styles = StyleSheet.create({
  box: {
    position: 'absolute',
    top: 100,
    left: 50,
    width: 100,
    height: 100,
  },
  texto: {
    fontSize: 18,
  }
})

const stylesScaled = ScaledSheet.create({
  box: {
    position: 'absolute',
    top: '59@s',
    right: '50@s',
    width: '58@s',
    height: '58@s',
  },
  texto: {
    fontSize: '10@s',
  }
})