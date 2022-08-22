import React from 'react';
import { SafeAreaView, StatusBar, View } from 'react-native';
import {useFonts, Montserrat_400Regular,Montserrat_700Bold } from "@expo-google-fonts/montserrat";
import AppLoading from 'expo-app-loading';

import Cesta from './src/screen/Cesta';
import mock from './src/mocks/Cesta';

export default function App() {
  const [fonteCarregda] = useFonts({
    "MontserratRegular": Montserrat_400Regular,
    "MontserratBold": Montserrat_700Bold,
  });

  if(!fonteCarregda){
      return <AppLoading/>
  }

  return (
      <SafeAreaView>
      <StatusBar/>
        <Cesta {...mock}/>
      </SafeAreaView>
  );
}
