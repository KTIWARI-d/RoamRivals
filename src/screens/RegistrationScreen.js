import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Alert, Dimensions, } from 'react-native';

const RegistrationForm = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [errors, setErrors] = useState({ name: '', email: '', age: '' });

  const validate = () => {
    let valid = true;
    let errors = { name: '', email: '', age: '' };

    // Name validation
    if (!name.trim()) {
      errors.name = 'Name is required';
      valid = false;
    }

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) {
      errors.email = 'Email is required';
      valid = false;
    } else if (!emailPattern.test(email)) {
      errors.email = 'Invalid email address';
      valid = false;
    }

    // Age validation
    const agePattern = /^[0-9]+$/;
    if (!age.trim()) {
      errors.age = 'Age is required';
      valid = false;
    } else if (!agePattern.test(age) || parseInt(age) <= 0) {
      errors.age = 'Invalid age';
      valid = false;
    }

    setErrors(errors);
    return valid;
  };

  const handleSubmit = () => {
    if (validate()) {
      // Handle successful form submission
      navigation.navigate('VerificationScreen');
      Alert.alert('Form Submitted', `Name: ${name}, Email: ${email}, Age: ${age}`);
    }
  };

  const allFieldsFilled = name && email && age && !errors.name && !errors.email && !errors.age;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('../assets/Registration.png')} style={styles.image} />
      </View>
      <View style={styles.formBackground}>
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder="Name"
            placeholderTextColor="#888"
            value={name}
            onChangeText={setName}
          />
          {errors.name ? <Text style={styles.errorText}>{errors.name}</Text> : null}

          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="#888"
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
          />
          {errors.email ? <Text style={styles.errorText}>{errors.email}</Text> : null}

          <TextInput
            style={styles.input}
            placeholder="Age"
            placeholderTextColor="#888"
            keyboardType="numeric"
            value={age}
            onChangeText={setAge}
          />
          {errors.age ? <Text style={styles.errorText}>{errors.age}</Text> : null}

          <TouchableOpacity
            style={[styles.button, allFieldsFilled && styles.buttonActive]}
            onPress={handleSubmit}
          >
            <Text style={styles.buttonText}>Next</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const { width, height } = Dimensions.get('window');

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
  errorText: {
    color: 'red',
    marginBottom: height * 0.01,
    marginTop: -height * 0.01,
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
});

export default RegistrationForm;
