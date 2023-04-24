import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ListsView = () => {
  const dataSimple = ['Faker', 'Zeus', 'Oner', 'Gumayusi']

  // const dataObjetos = [
  //   { campeon: 'Draven', linea: 'ADC' },
  //   { campeon: 'Lux', linea: 'SUP' },
  //   { campeon: 'Lee sin', linea: 'JUNGLA' },
  //   { campeon: 'Teemo', linea: 'TOP' },
  //   { campeon: 'Twisted Fate', linea: 'MID' },
  // ]

  // const renderItem = ({ item }) => <Text>{item}</Text>

  return (
    <View>
      {/* Ya no haremos uso del tipico lista.map para renderizar varios elementos */}
      {/* React Native ya cuenta con un componente para renderizar listas */}
      {/* Y la importancia del uso de este componente erradica en el rendimiento de la app */}
      <Text>Lista simple</Text>
      <FlatList data={dataSimple} renderItem={({ item }) => <Text>{item}</Text>} />
      {/* <FlatList data={dataSimple} renderItem={renderItem} /> */}

      {/* <Text>Lista de objetos</Text>
      <FlatList data={dataObjetos} renderItem={({ item }) => <Text>{`${item.linea} => ${item.campeon}`}</Text>} /> */}
    </View>
  )
}

export default ListsView

const styles = StyleSheet.create({})