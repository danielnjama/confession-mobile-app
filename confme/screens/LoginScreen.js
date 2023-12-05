import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Pressable,
  Alert
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Checkbox } from 'react-native-paper';

export default function LoginScreen({navigation}) {
  const [checked, setChecked] = useState(true);

  const toggleCheckbox = () => {
    setChecked(!checked);
  };
  return (
    <View style={styles.MainContainer}>
      <View style={styles.imageContainer}>
        <Image source={require('../assets/user.jpg')} style={styles.image} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.headerText}> Welcome Back</Text>
        <Text>Login To your account</Text>
      </View>
      <View style={styles.inputContainer}>
        <View style={styles.inputView}>
          <Icon name="user" size={25} color="brown" />
          <TextInput placeholder="username" style={styles.input} />
        </View>
        <View style={styles.inputView}>
          <Icon name="lock" size={25} color="brown" />
          <TextInput
            placeholder="Password"
            secureTextEntry
            style={styles.input}
          />
        </View>
      </View>
      <View style={styles.rememberMe}>
        <View style={styles.checkbox}>
          <Checkbox.Android
            status={checked ? 'checked' : 'unchecked'}
            onPress={toggleCheckbox}
          />
          <Text> Remember me </Text>
        </View>
        <Pressable style={styles.forgotPassword} onPress={()=>{
          Alert.alert('Notify!','Reach out to support on confme@dtechnologys.com 😊')
        }}>
          <Text> Forgot Password? </Text>
        </Pressable>
      </View>
      <View>
        <Pressable style={styles.loginButton}>
          <Text style={{ color: 'white' }}> LOGIN </Text>
        </Pressable>
        <Pressable onPress={()=>{
          navigation.replace('Register')
        }}>
          <Text style={{ textAlign: 'center',textDecorationLine:'underline' }}>
            {' '}
            Dont have an account? Sign Up{' '}
          </Text>
        </Pressable>
      </View>
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
  forgotPassword: {
    justifyContent: 'center',
    alignItems: 'center',
    textDecorationLine: 'underline',
  },
  checkbox: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
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
  image: {
    width: '100%',
    height: 150,
    borderBottomLeftRadius: 80,
    borderBottomRightRadius: 80,
  },
});
