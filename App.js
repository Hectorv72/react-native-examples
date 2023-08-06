import { StatusBar } from 'expo-status-bar';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import GeneralView from './src/views/GeneralView';
import ButtonsView from './src/views/ButtonsView';
import ListsView from './src/views/ListsView';
import StyledView from './src/views/StyledView';
import ShowScrollView from './src/views/ShowScrollView';
import PositionElements from './src/views/PositionElements';
import HomeView from './src/views/HomeView';
import FlexView from './src/views/FlexView';
import SizeView from './src/views/SizeView';
import ExpoIconsView from './src/views/ExpoIconsView';
import FormularioView from './src/views/FormularioView';
import FormularioValidacionView from './src/views/FormularioValidacionView';
import ListaRedux from './src/views/ListaRedux';
import FormRedux from './src/views/FormRedux';

// Importamos el Provider y el store
import { Provider } from 'react-redux';
import { store } from './src/redux/store';

export default function App() {
  // instanciamos nuestro Stack que nos ayudara para crear la navegacion y las pantallas
  const Stack = createNativeStackNavigator();

  return (
    <>
      {/* Usamos la etiqueta Provider */}
      <Provider store={store}>
        <NavigationContainer>
          {/* Nuestro controlador/context de navegacion */}
          <Stack.Navigator initialRouteName="home">
            {/* Las vistas/paginas que tendra nuestra app */}
            {/* Esto se asemeja al funcionamiento de react router dom con las Routes */}
            <Stack.Screen name="home" component={HomeView} />
            <Stack.Screen name="general" component={GeneralView} />
            <Stack.Screen name="botones" component={ButtonsView} />
            <Stack.Screen name="listas" component={ListsView} />
            <Stack.Screen name="scroll" component={ShowScrollView} />
            <Stack.Screen name="estilos" component={StyledView} />
            <Stack.Screen name="posicionamiento" component={PositionElements} />
            <Stack.Screen name="flex" component={FlexView} />
            <Stack.Screen name="size" component={SizeView} />
            <Stack.Screen name="icons" component={ExpoIconsView} />
            <Stack.Screen name="formulario" component={FormularioView} />
            <Stack.Screen name="formulario-validacion" component={FormularioValidacionView} />
            <Stack.Screen name="lista-redux" component={ListaRedux} />
            <Stack.Screen name="formulario-redux" component={FormRedux} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
      <StatusBar style="auto" />
    </>
  );
}