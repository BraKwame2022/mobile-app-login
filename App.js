import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from './LoginScreen';
import ContactsScreen from './ContactsScreen';
import Contact from './Components/Contact';

export default function App() {
  return (
    <View style={styles.container}>
    {/* <Contact /> */}
    <ContactsScreen />
    {/* <LoginScreen /> */}
    </View>
  );
}


const styles = StyleSheet.create({
  container:{
    marginTop:100
  }
})
