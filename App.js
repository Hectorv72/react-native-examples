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

export default function App() {
  // instanciamos nuestro Stack que nos ayudara para crear la navegacion y las pantallas
  const Stack = createNativeStackNavigator();

  return (
    <>
      <NavigationContainer>
        {/* Nuestro controlador/context de navegacion */}
        <Stack.Navigator initialRouteName="Home">
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
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="auto" />
    </>
  );
}