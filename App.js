// import { StatusBar } from 'expo-status-bar';
// import React from 'react';
// import { StyleSheet, Image, Text, View, Button } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Image
//         source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCRxsu4rxpRSOFJTdtpYCJq2e-OfRozTO_6aK-xmorW4W0chVS' }}
//         style={styles.logo}
//       />

//       <Text  style={{fontSize:30,fontWeight:'900', marginTop: 0, }} > WELCOME !  </Text>
//       <Text style={{ paddingBottom: 10, fontWeight:'800', fontSize:25 , color: '#B76AE3', }}>to CRM.io</Text>


//       <Button style={{ width: 90 }} title='login' />

//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#FFFFFF',
//     alignItems: 'center',
//     // justifyContent: 'center',
//   },
//   logo: {
//     width: "100%",
//     height: "50%",
//     borderRadius: 10,
//     marginTop: 0,

//   },

 
  
// });


import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Image, Text, View, TouchableOpacity, TextInput } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCRxsu4rxpRSOFJTdtpYCJq2e-OfRozTO_6aK-xmorW4W0chVS' }}
        style={styles.logo}
      />

      <Text style={{ fontSize: 30, fontWeight: '900', marginTop: -40 }}> WELCOME ! </Text>
      <Text style={{ paddingBottom: 10, fontWeight: '800', fontSize: 25, color: '#B76AE3' }}>to CRM.io</Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Phone Number"
          keyboardType="phone-pad"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
        />
      </View>

      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>

      <Text style={styles.forgotPasswordText}>Forgot Password</Text>


      <Text style={{paddingTop:50,}}>wanna try our services?</Text>
      <Text style={styles.forgotPasswordText}>here you are</Text>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: "100%",
    height: "50%",
    borderRadius: 10,
    marginTop: -20,
  },
  inputContainer: {
    width: '80%',
    marginTop: 20,
  },
  input: {
    height: 50,
    borderColor: '#B76AE3',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  loginButton: {
    width: '80%',
    height: 50,
    backgroundColor: '#C842DB',
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  loginButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  forgotPasswordText: {
    paddingTop: 10,
    fontSize: 15,
    color: '#C842DB',
    textDecorationLine: 'underline',
  },


  
});

