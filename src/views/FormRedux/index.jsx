import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setForm } from '../../redux/exampleSlice'

const FormRedux = () => {
  const form = useSelector(state => state.example.form)
  const dispatch = useDispatch()

  const handleChangeInput = (param, value) => {
    const update = { ...form, [param]: value }
    dispatch(setForm(update))
  }

  return (
    <View>
      <TextInput value={form.name} onChangeText={(value) => handleChangeInput('name', value)} />
      <TextInput value={form.age} onChangeText={(value) => handleChangeInput('age', value)} />
    </View>
  )
}

export default FormRedux

const styles = StyleSheet.create({})