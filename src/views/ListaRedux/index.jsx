import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ItemExample from './components/ItemExample'
import { useSelector } from 'react-redux'

const ListaRedux = () => {
  const list = useSelector(state => state.example.list)
  const renderItem = ({ item }) => <ItemExample item={item} />

  return (
    <View>
      <FlatList data={list} renderItem={renderItem} />
    </View>
  )
}

export default ListaRedux

const styles = StyleSheet.create({})