// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import {
  useFonts,
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_800ExtraBold
} from '@expo-google-fonts/inter';

import { Loading } from './src/components/Loading';

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_800ExtraBold
  })

  if (!fontsLoaded) {
    return (
      <Loading />
    )
  }

  return (
    <View style={styles.container}>

      <Text style={styles.text}>-CR7 Júnior: Tenho fome, pai!</Text>
      <Text style={styles.text}>-CR7: Sou lindo</Text>
      {/* <StatusBar style="light" /> */}
      <StatusBar barStyle="light-content" backgroundColor='transparent' translucent />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#e6d5d5c3',
    backgroundColor: '#09090A',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    color: "#7C3AED",
    fontFamily: 'Inter_700Bold'
  }
});
