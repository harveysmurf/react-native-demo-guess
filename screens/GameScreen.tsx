import { useEffect, useState } from "react"
import { Alert, StyleSheet, View } from "react-native"
import {Ionicons} from '@expo/vector-icons'
import NumberContainer from "../components/game/NumberContainer"
import Card from "../components/ui/Card"
import InstructionText from "../components/ui/InstructionText"
import PrimaryButton from "../components/ui/PrimaryButton"
import Title from "../components/ui/Title"

type Direction = 'lower' | 'higher'
type GameScreenProps = React.PropsWithChildren<{
  userNumber: number
  onGameOver: () => void
}>

function generateRandomNumberBetween(min: number, max: number, exclude: number | null): number {
  const randomNumber = Math.floor(Math.random() * (max - min)) + min

  if(exclude && randomNumber === exclude) {
    return generateRandomNumberBetween(min, max, exclude)
  } else {
    return randomNumber
  }
}

let minBoundary = 1
let maxBoundary = 100
const newRandomNumber = generateRandomNumberBetween(1, 100, null)

function GameScreen({userNumber, onGameOver}: GameScreenProps): JSX.Element | null {
  const [currentGuess, setCurrentGuess] = useState<number>(newRandomNumber)
  const numberMatch = userNumber === currentGuess
  useEffect(() => {
    if(numberMatch) {
      Alert.alert('you won')
      onGameOver()
    }
  }, [currentGuess, userNumber])

  if(numberMatch) {
    return null
  }

  function nextGuessHandler(direction: Direction ): void {
    if((direction === 'lower' && currentGuess < userNumber) || (direction === 'higher' && currentGuess > userNumber)) {
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
      <Card>
        <InstructionText>Higher or Lower</InstructionText>
        <PrimaryButton onPress={() => nextGuessHandler('higher')}><Ionicons name="add"/></PrimaryButton>
        <PrimaryButton onPress={() => nextGuessHandler('lower')}><Ionicons name="remove"/></PrimaryButton>
      </Card>
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