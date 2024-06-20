import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({ email: '', password: '' });
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const validate = () => {
    let valid = true;
    let errors = { email: '', password: '' };

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) {
      errors.email = 'Email is required';
      valid = false;
    } else if (!emailPattern.test(email)) {
      errors.email = 'Invalid email address';
      valid = false;
    }

    // Password validation
    if (!password.trim()) {
      errors.password = 'Password is required';
      valid = false;
    }

    setErrors(errors);
    return valid;
  };

  const handleSubmit = () => {
    if (validate()) {
      // Handle successful form submission
      console.log('Login successful');
      // Navigate to the next screen
    }
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('../assets/Login.png')} style={styles.image} />
      </View>
      <View style={styles.formBackground}>
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="#888"
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
          />
          {errors.email ? <Text style={styles.errorText}>{errors.email}</Text> : null}

          <View style={styles.passwordContainer}>
            <TextInput
              style={styles.passwordInput}
              placeholder="Password"
              placeholderTextColor="#888"
              secureTextEntry={!isPasswordVisible}
              value={password}
              onChangeText={setPassword}
            />
            <TouchableOpacity style={styles.eyeIcon} onPress={togglePasswordVisibility}>
              <Text>{isPasswordVisible ? '👁️' : '👁️‍🗨️'}</Text>
            </TouchableOpacity>
          </View>
          {errors.password ? <Text style={styles.errorText}>{errors.password}</Text> : null}

          <TouchableOpacity style={styles.forgotPassword}>
            <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.button, email && password && styles.buttonActive]}
            onPress={handleSubmit}
          >
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>

          <View style={styles.registerContainer}>
            <Text style={styles.registerText}>Want to Join us? </Text>
            <TouchableOpacity onPress={() => navigation.navigate('RegistrationScreen')}>
              <Text style={styles.registerLink}>Register</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00072D',
    alignItems: 'center',
  },
  header: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: width * 0.8, // Adjust width based on screen size
    height: height * 0.3, // Adjust height based on screen size
    resizeMode: 'contain',
    marginTop: height * 0.05,
  },
  formBackground: {
    flex: 1,
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: width * 0.05,
    paddingVertical: height * 0.03,
    alignItems: 'center',
    marginTop: height * 0.03,
  },
  form: {
    width: '100%',
    justifyContent: 'center',
  },
  input: {
    width: '100%',
    height: height * 0.07,
    borderColor: '#CCCCCC',
    borderWidth: 1,
    borderRadius: width * 0.02,
    paddingHorizontal: width * 0.025,
    marginBottom: height * 0.015,
    backgroundColor: '#FFFFFF',
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#CCCCCC',
    borderWidth: 1,
    borderRadius: width * 0.02,
    marginBottom: height * 0.015,
    backgroundColor: '#FFFFFF',
  },
  passwordInput: {
    flex: 1,
    height: height * 0.07,
    paddingHorizontal: width * 0.025,
  },
  eyeIcon: {
    paddingHorizontal: width * 0.025,
  },
  errorText: {
    color: 'red',
    marginBottom: height * 0.01,
    marginTop: -height * 0.01,
  },
  forgotPassword: {
    alignItems: 'flex-end',
    marginBottom: height * 0.02,
  },
  forgotPasswordText: {
    color: '#888',
  },
  button: {
    width: '100%',
    height: height * 0.07,
    backgroundColor: '#696969',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: width * 0.02,
    marginTop: height * 0.09,
  },
  buttonActive: {
    backgroundColor: '#000A23',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  registerContainer: {
    flexDirection: 'row',
    marginTop: height * 0.02,
  },
  registerText: {
    color: '#888',
  },
  registerLink: {
    color: '#000A23',
    fontWeight: 'bold',
  },
});

export default LoginScreen;
