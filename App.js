import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider as ReduxProdiver } from 'react-redux'
import * as SplashScreen from 'expo-splash-screen';

import HomeScreen from './screen/HomeScreen';
import store from './store';
import CardList from './screen/CardList';
import CreditCardFormScreen from './screen/CreditCardFormScreen';
import { useFonts } from 'expo-font';
import { useCallback } from 'react';
import HeaderLeftNavigation from './components/HeaderLeftNavigation';
import AddCardHeader from './components/AddCardHeader';
const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    'FC-rounded': require('./assets/fonts/FC-Subject-rounded.otf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }
  return (
    <ReduxProdiver store={store}>
      <NavigationContainer onReady={onLayoutRootView}  >
        <Stack.Navigator screenOptions={{
          headerLeft: HeaderLeftNavigation,
          headerShadowVisible: false
        }}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="CardList" component={CardList} />
          <Stack.Screen name="CreateCard" component={CreditCardFormScreen} options={{
            headerRight: AddCardHeader,
          }} />
        </Stack.Navigator>
      </NavigationContainer>
    </ReduxProdiver >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
