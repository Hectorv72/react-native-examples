import { Pressable, StyleSheet, Text, TouchableHighlight, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import React from 'react'

// En react native no existe un componente que haga de boton como tal
// React native al ser nativo del dispositivo movil se maneja por medio de gestos en pantalla
const ButtonsView = () => {
  return (
    <View>
      {/* Dara el mismo efecto de un boton al ser presionado */}
      {/* Para cambiar el color del fondo se utiliza la propiedad underlayColor */}
      {/* Se pueden utilizar colores rgb, rgba, hex o los predefinidos */}
      <TouchableHighlight underlayColor={'red'} onPress={() => console.log('TouchableHighlight')}>
        <Text>Presionado con TouchableHighlight</Text>
      </TouchableHighlight>

      {/* Tiene un efecto de desvanecimiento */}
      <TouchableOpacity onPress={() => console.log('TouchableOpacity')}>
        <Text>Presionado con TouchableOpacity</Text>
      </TouchableOpacity>

      {/* No tiene ningun efecto visual */}
      <TouchableWithoutFeedback onPress={() => console.log('TouchableWithoutFeedback')}>
        <Text>Presionado con TouchableWithoutFeedback</Text>
      </TouchableWithoutFeedback>

      {/* una caracteristica importante de Pressable es */}
      {/* poder verificar si fue presionado y utilizarlo dentro de su style */}
      <Pressable style={({ pressed }) => ({ backgroundColor: pressed ? 'blue' : 'transparent' })}
        onPress={() => console.log('Pressable')}>
        <Text>Presionado con Pressable</Text>
      </Pressable>
    </View>
  )
}

export default ButtonsView

const styles = StyleSheet.create({})