import { StyleProp, StyleSheet, Text, ViewStyle } from "react-native";
import { Colors } from "../../constants/colors";

const InstructionText: React.FC<React.PropsWithChildren<{style?: ViewStyle}>> = ({children}) => {
  return (
    <Text style={styles.instructionText}>{children}</Text>
  )
}
const styles = StyleSheet.create({
  instructionText: {
    color: Colors.accent500,
    fontSize: 24
  },
})

export default InstructionText