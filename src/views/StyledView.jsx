import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { externo } from '../styles/misestilos'

const StyledView = () => {
  const [activo, setActivo] = useState(false)

  const handleChangeActivo = () => setActivo(!activo)

  return (
    <View style={styles.container}>
      <View style={{ marginVertical: 10, backgroundColor: 'rgb(176, 149, 245)' }}>
        <Text style={{ color: 'white', fontSize: 20, textAlign: 'center' }}>Estilos en linea</Text>
      </View>

      <View style={styles.vista}>
        <Text style={styles.texto}>Estilos en styles</Text>
      </View>

      <View style={externo.vista}>
        <Text style={externo.texto}>Estilos desde un archivo externo</Text>
      </View>

      <View style={styleDinamico.containerDinamyc(activo)}>
        <TouchableOpacity onPress={handleChangeActivo}>
          <Text style={styleDinamico.textoDynamic(activo)}>Estilos condicionales</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.vista}>
        <Text style={[styles.texto, styles.textoMasGrande]}>Estilos multiples</Text>
      </View>
    </View>
  )
}

export default StyledView

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgb(240,240,240)',
  },
  vista: {
    marginVertical: 10,
    backgroundColor: '#2bff41'
  },
  texto: {
    fontSize: 20,
    textAlign: 'center'
  },
  textoMasGrande: {
    fontSize: 30
  }
})

const styleDinamico = StyleSheet.create({
  containerDinamyc(estado) {
    return ({
      backgroundColor: estado ? 'rgb(200,200,200)' : 'transparent',
    })
  },
  textoDynamic: (estado) => ({
    textAlign: estado ? 'center' : 'left',
    fontSize: estado ? 20 : 14
  })
})