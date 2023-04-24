import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import GeneralView from './src/views/GeneralView';
import ButtonsView from './src/views/ButtonsView';
import ListsView from './src/views/ListsView';
import StyledView from './src/views/StyledView';
import { useState } from 'react';
import ShowScrollView from './src/views/ShowScrollView';

const views = {
  general: { title: 'General', view: <GeneralView /> },
  buttons: { title: 'Botones', view: <ButtonsView /> },
  lists: { title: 'Listas', view: <ListsView /> },
  scroll: { title: 'Scroll', view: <ShowScrollView /> },
  styled: { title: 'Estilos', view: <StyledView /> },
}

export default function App() {
  const [view, setView] = useState(views.general.view)

  const renderButtons = Object.keys(views).map(
    name =>
      <TouchableOpacity style={styles.buttons} onPress={() => setView(views[name].view)}>
        <Text>{views[name].title}</Text>
      </TouchableOpacity>
  )

  return (
    <View style={styles.container}>
      {renderButtons}
      <View style={styles.subcontainer}>
        {view}
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 50
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  buttons: {
    width: 200,
    alignItems: 'center',
    margin: 5,
    backgroundColor: '#95b7cc'
  },
  subcontainer: {
    marginVertical: 30,
    marginHorizontal: 20,
  }
});
