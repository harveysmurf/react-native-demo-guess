import { StyleSheet, View } from "react-native"
import { Colors } from "../../constants/colors"

type Card = ({ children }: React.PropsWithChildren) => JSX.Element | null
const Card: Card = ({children}) => {
  return (
    <View style={styles.card}>
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    alignItems: 'center',
    padding: 16,
    marginHorizontal: 24,
    borderRadius: 8,
    marginTop: 36,
    backgroundColor: Colors.primary800,
    elevation: 4,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2},
    shadowRadius: 6,
    shadowOpacity: 0.25

  },
})

export default Card