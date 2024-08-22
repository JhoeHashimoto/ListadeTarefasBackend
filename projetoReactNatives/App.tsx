import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.FormatoText}>Olá Mundo do 2TDSZ da FIAP Lins!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#9274D7',
    alignItems: 'center',
    justifyContent: 'center',
  },
  FormatoText: {
    color: "#fff",
    fontSize: 50,
    fontWeight: 'bold',
    textAlign: 'center'
  }
});