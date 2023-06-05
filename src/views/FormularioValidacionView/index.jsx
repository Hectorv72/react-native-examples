import { StyleSheet, View } from 'react-native'
import React, { useState } from 'react'
import Formulario from './components/Formulario'
import FormularioContext from './contexts/FormularioContext'
import ListadoPersona from './components/ListadoPersona'

const FormularioValidacionView = () => {
  const initForm = {
    nya: undefined,
    email: undefined,
    telefono: undefined
  }

  const [form, setForm] = useState(initForm)
  const [list, setList] = useState([{ nya: 'Hector', email: '$_carlitox_gamer_$', telefono: 3704581113 }])

  // actualiza el estado del formulario
  const handleUpdateForm = (name, value) => setForm(prev => ({ ...prev, [name]: value }))

  // agrega a la lista una nueva persona
  const handleAddPersona = (persona) => setList(prev => [...prev, persona])

  // borra los datos del formulario
  const handleClearForm = () => setForm(initForm)

  const context = {
    form,
    list,
    updateForm: handleUpdateForm,
    addPersona: handleAddPersona,
    clearForm: handleClearForm
  }

  return (
    <View style={styles.container}>
      <FormularioContext.Provider value={context}>
        <Formulario />
        <ListadoPersona />
      </FormularioContext.Provider>
    </View>
  )
}

export default FormularioValidacionView

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 15
  }
})