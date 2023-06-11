import { useEffect, useState } from "react"
import { Alert, StyleSheet, Text, View } from "react-native"
import NumberContainer from "../components/game/NumberContainer"
import PrimaryButton from "../components/ui/PrimaryButton"
import Title from "../components/ui/Title"

type Direction = 'lower' | 'higher'

function generateRandomNumberBetween(min: number, max: number, exclude: number): number {
  const randomNumber = Math.floor(Math.random() * (max - min)) + min

  if(randomNumber === exclude) {
    return generateRandomNumberBetween(min, max, exclude)
  } else {
    return randomNumber
  }
}

const currentGuessInizalized = (val: number | null): val is number => {
  return val !== null
}

let minBoundary = 1
let maxBoundary = 100

function GameScreen({userNumber}: React.PropsWithChildren<{userNumber: number}>): JSX.Element | null {
  const initialGuess = generateRandomNumberBetween(minBoundary, maxBoundary, userNumber)
  const [currentGuess, setCurrentGuess] = useState(null)
  const numberMatch = userNumber === currentGuess
  useEffect(() => {
    if(numberMatch) {
      Alert.alert('you won')
    }
  }, [currentGuess])

  if(numberMatch) {
    return null
  }

  function nextGuessHandler(direction: Direction ): void {
    if(currentGuess !== null && (direction === 'lower' && currentGuess < userNumber) || (direction === 'higher' && currentGuess > userNumber)) {
      Alert.alert("Don't lie", 'You know that this is wrong', [{text: 'sorry', style: 'cancel'}])
      return
    }

    if(direction === 'lower') {
      maxBoundary = currentGuess
    } else {
      minBoundary = currentGuess + 1
    }
    const newRandomNumber = generateRandomNumberBetween(minBoundary, maxBoundary, currentGuess)
    setCurrentGuess(newRandomNumber)
  }
  return (
    <View style={styles.screen}>
      <Title>Opponent's guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <View>
        <Text>Higher or lower</Text>
        <PrimaryButton onPress={() => nextGuessHandler('higher')}>+</PrimaryButton>
        <PrimaryButton onPress={() => nextGuessHandler('lower')}>-</PrimaryButton>
        {/* - */}
      </View>
      <View>
        {/* Log rounds */}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 12
  },
})

export default GameScreen