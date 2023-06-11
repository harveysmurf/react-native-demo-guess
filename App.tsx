import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import { LinearGradient } from 'expo-linear-gradient'
import { useState } from 'react';
import GameScreen from './screens/GameScreen';
import { Colors } from './constants/colors';

export default function App() {
  const [userNumber, setUserNumber] = useState<null | number>(null)

  function startGameHandler(pickedNumber: number) {
    setUserNumber(pickedNumber)
  }
  return (
    <LinearGradient colors={[Colors.primary700, Colors.accent500]} style={styles.container}>
      <ImageBackground source={require('./assets/images/background.png')} resizeMode="cover" style={styles.container} imageStyle={styles.backgroundImage}>
        <SafeAreaView style={styles.container}>
          {userNumber ? <GameScreen userNumber={userNumber}/> : <StartGameScreen onPickNumber={startGameHandler}/>}
        </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  backgroundImage: {
    opacity: 0.15
  }
});
