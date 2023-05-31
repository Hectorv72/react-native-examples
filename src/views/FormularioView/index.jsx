import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const FormularioView = () => {
  return (
    <View>
      <TextInput style={styles.input} />
      {/* keyboardType modifica el teclado virtual que se mostrará al escribir en el input */}
      <TextInput style={styles.input} keyboardType='numeric' />
    </View>
  )
}

export default FormularioView

const styles = StyleSheet.create({
  input: {
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    margin: 5,
  }
})