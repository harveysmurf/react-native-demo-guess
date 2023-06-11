import { StyleSheet, Text, View } from "react-native";
import { Colors } from "../../constants/colors";

function NumberContainer({children}: React.PropsWithChildren) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{children}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: Colors.accent500,
    padding: 24,
    borderRadius: 8,
    margin: 25,
    alignItems: 'center'
  },
  text: {
    color: Colors.accent500,
    fontSize: 36,
    fontWeight: 'bold'
  }
})

export default NumberContainer