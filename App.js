import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

<Image source={require('')} />

      <Text style={{ paddingTop: 20 }} >WELCOME !</Text>
      <Text style={{ paddingBottom: 10, fontSize: 20 }} >to CRM.io</Text>
      <Button style={{ width: 90 }} title='login' />


      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2cc8f',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
