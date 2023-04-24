// importaciones
import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'

// componente
const GeneralView = () => {
  const [state, setState] = useState('Hola')

  useEffect(() => {
    setTimeout(() => setState('Chau'), 1000)
  }, [])

  return (
    // el View es el equivalente a un div en html y sirve como contenedor de nuestros elementos
    <View>
      {/* Los textos deben ser definidos dentro de un elemento Text */}
      {/* A diferencia de html en donde podiamos agregar texto dentro de un div */}
      <Text>Texto dentro de la vista general</Text>
      <Text>{state}</Text>
    </View>
  )
}

// exportacion
export default GeneralView

// estilos
const styles = StyleSheet.create({})