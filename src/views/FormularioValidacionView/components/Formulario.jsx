import { StyleSheet, Button, Text, TextInput, View, FlatList } from 'react-native'
import React, { useContext, useState } from 'react'
import FormularioContext from '../contexts/FormularioContext'
import PersonaSchema from '../schemas/PersonaSchema'

const Formulario = () => {
  // desestructura todo lo que usaremos del context
  const { form, updateForm, clearForm, addPersona } = useContext(FormularioContext)

  // creamos un estado para verificar si el formulario se mostrara o no
  const [show, setShow] = useState(false)

  // creamos un estado para almacenar los errores
  const [errores, setErrores] = useState([])

  // accion de agregar persona
  const handleSavePersona = () => {
    addPersona(form)
    clearForm()
    setErrores([])
  }

  // accion para validar el formulario
  const handleValidate = () => {
    // console.log(PersonaSchema.isValidSync(form))
    try {
      PersonaSchema.validateSync(form, { abortEarly: false })
      handleSavePersona()
    } catch (error) {
      // inner nos traera la lista de errores que se produjeron al validar el formulario
      setErrores(error.inner)
      // console.log(error.inner[0].message)
    }
  }

  // accion para ocultar el formulario y eliminar los errores
  const handleShowForm = () => {
    clearForm()
    setErrores([])
    setShow(!show)
  }

  return (
    <View style={styles.container}>
      {
        show &&
        <View style={styles.form}>
          <TextInput
            value={form.nya || ''}
            style={styles.input} placeholder='Nombre y Apellido'
            onChangeText={(text) => updateForm('nya', text)}
          />

          {/* keyboardType modifica el teclado virtual que se mostrará al escribir en el input */}
          <TextInput
            value={form.email || ''}
            style={styles.input} placeholder='Email'
            keyboardType='email-address'
            onChangeText={(text) => updateForm('email', text)}
          />
          <TextInput value={form.telefono || ''}
            style={styles.input} placeholder='Numero de telefono'
            keyboardType='numeric'
            onChangeText={(text) => updateForm('telefono', text)}
          />
          {/* Agregamos la seccion que mostrara los errores */}
          {
            errores.length > 0 &&
            <FlatList
              data={errores}
              renderItem={({ item }) => <Text style={{ color: 'red' }}>* {item.message}</Text>}
            />
          }
          <Button title='guardar' onPress={handleValidate} />
        </View>
      }
      <Button title={!show ? 'agregar' : 'cancelar'} onPress={handleShowForm} />
    </View>
  )
}

export default Formulario

const styles = StyleSheet.create({
  container: {
  },
  input: {
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    margin: 5,
  },
  form: {
    margin: 5
  }
})