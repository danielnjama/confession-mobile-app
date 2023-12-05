import React, { useState } from 'react';
import { KeyboardAvoidingView } from 'react-native';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  Alert,
  Button
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

// import { CommonActions } from '@react-navigation/native';

export default function RegisterScreen({ navigation }) {
  const [firstName, setFirstName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');

  const handleRegistration = async () => {
    try {
      if (!firstName || !username || !email || !password) {
        Alert.alert('Error', 'Please fill in all fields');
        return;
      }

      const response = await fetch('http://127.0.0.1:8000/api/register/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          first_name: firstName,
          username,
          email,
          password,
        }),
      });

      if (response.ok) {
        Alert.alert('Success', 'Registration successful');
        navigation.navigate('Login');
      } else {
        const errorData = await response.json();
        console.error('Registration Error:', errorData);
        Alert.alert('Error1', errorData);
      }
    } catch (error) {
      console.error('Registration Error:', error);
      Alert.alert('Error2', errorData);
    }
  };
  return (
    <View style={styles.MainContainer}>
      <KeyboardAvoidingView behavior='position'>
      <View style={styles.textContainer}>
        <Text style={styles.headerText}> Register</Text>
        <Text>Create your account</Text>
      </View>
      
      <View style={styles.inputContainer}>
        <View style={styles.inputView}>
          <Icon name="user" size={25} color="brown" />
          <TextInput
            placeholder="First Name"
            style={styles.input}
            value={firstName}
            onChangeText={setFirstName}
            
          />
        </View>
        <View style={styles.inputView}>
          <Icon name="user" size={25} color="brown" />
          <TextInput
            placeholder="username"
            style={styles.input}
            value={username}
            onChangeText={setUsername}
          />
        </View>
        <View style={styles.inputView}>
          <Icon name="envelope" size={25} color="brown" />
          <TextInput
            placeholder="Email"
            style={styles.input}
            value={email}
            onChangeText={setEmail}
          />
        </View>
        <View style={styles.inputView}>
          <Icon name="lock" size={25} color="brown" />
          <TextInput
            placeholder="Password"
            secureTextEntry
            style={styles.input}
            value={password}
            onChangeText={setPassword}
          />
        </View>
        <View style={styles.inputView}>
          <Icon name="lock" size={25} color="brown" />
          <TextInput
            placeholder="Confirm Password"
            secureTextEntry
            style={styles.input}
            value={password2}
            onChangeText={setPassword2}
          />
        </View>
      </View>
      <View style={styles.rememberMe}>
        <Text style={{ fontSize: 12, color: 'white' }}>
          By registering, you are agreeing to our Terms of use and privacy
          policy{' '}
        </Text>
      </View>
      
      <View>
        <Pressable style={styles.loginButton} onPress={handleRegistration}>
          <Text style={{ color: 'white' }}> REGISTER </Text>
        </Pressable>
        <Pressable
          onPress={() => {
            navigation.replace('Login');
          }}>
          <Text
            style={{ textAlign: 'center', textDecorationLine: 'underline' }}>
            {' '}
            Already have an account? Login{' '}
          </Text>
        </Pressable>
        
      </View>
    </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  loginButton: {
    marginHorizontal: '10%',
    backgroundColor: '#00BFFF',
    padding: 15,
    alignItems: 'center',
    borderRadius: 20,
    marginBottom: 10,
  },
  rememberMe: {
    // flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: '10%',
    marginBottom: 10,
  },
  MainContainer: {
    backgroundColor: '#4682B4',
    flex: 1,
    paddingTop: 30,
  },
  headerText: {
    fontSize: 32,
    color: 'white',
  },
  textContainer: {
    textAlign: 'center',
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    paddingLeft: 30,
    fontSize: 16,
    height: '100%',
    color: 'white',
  },
  inputContainer: {
    paddingTop: 20,
  },
  inputView: {
    flexDirection: 'row',
    marginHorizontal: '10%',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
  },
});
