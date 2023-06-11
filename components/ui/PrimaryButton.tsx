import { View, Text, Pressable, StyleSheet } from 'react-native'
import { Colors } from '../../constants/colors';

function PrimaryButton({children, onPress}: React.PropsWithChildren<{onPress: () => void}>): JSX.Element {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable style={({pressed}) => pressed ? [styles.buttonInnerContainer, styles.pressed]: styles.buttonInnerContainer } onPress={onPress } android_ripple={{color: Colors.primary600}}>
          <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  buttonOuterContainer: {
    margin: 4,
    borderRadius: 28,
    overflow: 'hidden'
  },
  buttonInnerContainer: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: Colors.primary500,
    elevation: 2
  },
  buttonText: {
    color: 'white',
    textAlign: 'center'
  },
  pressed: {
    opacity: 0.75,

  }
})

export default PrimaryButton