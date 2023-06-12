import React, { useState } from "react"
import { StyleSheet, TextInput, View, Alert, Text } from "react-native"
import Card from "../components/ui/Card"
import InstructionText from "../components/ui/InstructionText"
import PrimaryButton from "../components/ui/PrimaryButton"
import Title from "../components/ui/Title"
import { Colors } from "../constants/colors"



function StartGameScreen({onPickNumber}: React.PropsWithoutRef<{onPickNumber: (val: number) => void}>): JSX.Element {
  const [enteredNumber, setEnteredNumber] = useState('')

  function numberInputHandler(inputText: typeof enteredNumber) {
    setEnteredNumber(inputText)
  }

  function resetInputHandler() {
    setEnteredNumber('')
  }

  function confirmInputHandler() {
    const chosenNumber = parseInt(enteredNumber)
    if(isNaN(chosenNumber) || chosenNumber < 0 || chosenNumber > 99) {
      Alert.alert('Invalid Number', 'Should be between 1 and 99', [{text: 'Ok', style: 'destructive', onPress: resetInputHandler}] )
      return
    }
    onPickNumber(chosenNumber)
  }

  return (
    <View style={styles.rootContainer}>
      <Title>Guess my number</Title>
      <Card>
        <InstructionText>Enter a number</InstructionText>
        <TextInput onChangeText={numberInputHandler} maxLength={2} keyboardType={"number-pad"} autoCapitalize={'none'} autoCorrect={false} style={styles.numberInput} value={enteredNumber}/>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
          </View>
        </View>
      </Card>
    </View>
  )
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginTop: 100,
    alignItems: 'center'
  },
  numberInput: {
    height: 50,
    fontSize: 32,
    borderBottomColor:Colors.accent500,
    borderBottomWidth: 2,
    color: Colors.accent500,
    marginVertical: 8,
    fontWeight: 'bold',
    width: 50,
    textAlign: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row'
  },
  buttonContainer: {
    flex: 1
  }
})

export default StartGameScreen