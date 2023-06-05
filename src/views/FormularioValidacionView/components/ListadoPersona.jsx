import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import FormularioContext from '../contexts/FormularioContext'
import ItemPersona from './ItemPersona'

const ListadoPersona = () => {
  const { list } = useContext(FormularioContext)

  const renderItem = ({ item }) => <ItemPersona data={item} />

  return (
    <FlatList data={list} renderItem={renderItem} />
  )
}

export default ListadoPersona

const styles = StyleSheet.create({
})