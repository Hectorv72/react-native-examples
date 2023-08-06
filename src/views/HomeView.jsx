import { FlatList, View } from 'react-native'
import React from 'react'
import ButtonTitle from '../components/ButtonTitle'

const HomeView = ({ navigation }) => {
  const views = [
    { title: 'General', path: 'general' },
    { title: 'Botones', path: 'botones' },
    { title: 'Listas', path: 'listas' },
    { title: 'Scroll', path: 'scroll' },
    { title: 'Estilos', path: 'estilos' },
    { title: 'Posicionamiento', path: 'posicionamiento' },
    { title: 'Flex', path: 'flex' },
    { title: 'Size Matters', path: 'size' },
    { title: 'Iconos', path: 'icons' },
    { title: 'Formulario', path: 'formulario' },
    { title: 'Formulario con validación', path: 'formulario-validacion' },
    { title: 'Lista Redux', path: 'lista-redux' },
    { title: 'Formulario Redux', path: 'formulario-redux' },
  ]

  const renderItem = ({ item }) => <ButtonTitle title={item.title} action={() => navigation.navigate(item.path)} />

  return (
    <View>
      <FlatList data={views} renderItem={renderItem} />
    </View>
  )
}

export default HomeView