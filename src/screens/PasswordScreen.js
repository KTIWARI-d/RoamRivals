import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const PasswordPage = ({ navigation }) => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({ password: '', confirmPassword: '' });

  const validate = () => {
    let valid = true;
    let errors = { password: '', confirmPassword: '' };

    if (!password) {
      errors.password = 'Password is required';
      valid = false;
    } else if (password.length < 6) {
      errors.password = 'Password must be at least 6 characters';
      valid = false;
    }

    if (confirmPassword !== password) {
      errors.confirmPassword = 'Passwords do not match';
      valid = false;
    }

    setErrors(errors);
    return valid;
  };

  const handleSubmit = () => {
    if (validate()) {
      // Handle successful form submission
      console.log('Password set successfully');
    }
  };

  const getBorderColor = (inputField) => {
    if (password && confirmPassword && password === confirmPassword) {
      return 'green';
    }
    if (errors[inputField]) {
      return 'red';
    }
    return '#CCCCCC';
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('../assets/Registration.png')} style={styles.image} />
      </View>
      <View style={styles.formBackground}>
        <View style={styles.form}>
          <TextInput
            style={[styles.input, { borderColor: getBorderColor('password') }]}
            placeholder="Create New Password"
            placeholderTextColor="#888"
            secureTextEntry={true}
            value={password}
            onChangeText={setPassword}
          />
          {errors.password ? <Text style={styles.errorText}>{errors.password}</Text> : null}

          <TextInput
            style={[styles.input, { borderColor: getBorderColor('confirmPassword') }]}
            placeholder="Confirm Password"
            placeholderTextColor="#888"
            secureTextEntry={true}
            value={confirmPassword}
            onChangeText={setConfirmPassword}
          />
          {errors.confirmPassword ? <Text style={styles.errorText}>{errors.confirmPassword}</Text> : null}

          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
              <Text style={styles.backButtonText}>←</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={[styles.nextButton, (password && confirmPassword && password === confirmPassword) && styles.nextButtonActive]} 
              onPress={handleSubmit}>
              <Text style={styles.buttonText}>Join</Text>
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
    marginTop: height * 0.07,
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
    marginTop: height * 0.05,
  },
  form: {
    width: '100%',
    justifyContent: 'center',
  },
  input: {
    width: '100%',
    height: height * 0.07,
    borderWidth: 1,
    borderRadius: width * 0.02,
    paddingHorizontal: width * 0.025,
    marginBottom: height * 0.015,
    backgroundColor: '#FFFFFF',
  },
  errorText: {
    color: 'red',
    marginBottom: height * 0.01,
    marginTop: -height * 0.01,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  backButton: {
    width: '20%',
    height: height * 0.07,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: width * 0.02,
    borderColor: '#CCCCCC',
    borderWidth: 1,
    marginTop: height * 0.14,
  },
  backButtonText: {
    color: '#000',
    fontSize: width * 0.06,
  },
  nextButton: {
    width: '70%',
    height: height * 0.07,
    backgroundColor: '#696969',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: width * 0.02,
    marginTop: height * 0.14,
  },
  nextButtonActive: {
    backgroundColor: '#000A23',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default PasswordPage;
