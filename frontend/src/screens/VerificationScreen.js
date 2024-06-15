import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

const VerificationScreen = ({ navigation }) => {
  const [timer, setTimer] = useState(60);
  const [otp, setOtp] = useState(['', '', '', '']);
  const inputRefs = useRef([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prevTimer) => (prevTimer > 0 ? prevTimer - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleInputChange = (text, index) => {
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);

    if (text.length === 1 && index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyPress = (e, index) => {
    if (e.nativeEvent.key === 'Backspace' && otp[index] === '' && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const allFieldsFilled = otp.every(value => value !== '');

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('../assets/Registration.png')} style={styles.image} />
      </View>
      <View style={styles.formBackground}>
        <View style={styles.pageIndicator}>
          <View style={[styles.dot, styles.dot]} />
          <View style={[styles.dot, styles.dotActive]} />
          <View style={[styles.dot, styles.dot]} />
        </View>
        <View style={styles.form}>
          <View style={styles.otpContainer}>
            {otp.map((value, index) => (
              <TextInput
                key={index.toString()} // Ensure key is a string
                style={[styles.otpInput, allFieldsFilled && styles.otpInputFilled]}
                maxLength={1}
                keyboardType="numeric"
                value={value}
                onChangeText={(text) => handleInputChange(text, index)}
                onKeyPress={(e) => handleKeyPress(e, index)}
                ref={(ref) => (inputRefs.current[index] = ref)}
              />
            ))}
          </View>
          <Text style={styles.instructionText}>
            Enter Verification Code we have sent onto <Text style={styles.emailText}>abc@gmail.com</Text>
          </Text>
          <TouchableOpacity>
            <Text style={styles.resendText}>
              Resend code - {timer > 0 ? `00:${timer < 10 ? `0${timer}` : timer}` : '00:00'}
            </Text>
          </TouchableOpacity>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('RegistrationScreen')}>
              <Text style={styles.backButtonText}>←</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.nextButton, allFieldsFilled && styles.nextButtonActive]}
              onPress={() => navigation.navigate('PasswordScreen')}
            >
              <Text style={styles.buttonText}>Next</Text>
            </TouchableOpacity>
          </View>
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
    marginTop: height * 0.06,
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
    marginTop: height * 0.04,
  },
  pageIndicator: {
    flexDirection: 'row',
    marginBottom: height * 0.02,
  },
  dot: {
    width: width * 0.020,
    height: width * 0.020,
    borderRadius: width * 0.0125,
    backgroundColor: '#888',
    marginHorizontal: width * 0.0100,
  },
  dotActive: {
    backgroundColor: '#000',
  },
  form: {
    width: '100%',
    justifyContent: 'center',
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%',
    marginBottom: height * 0.03,
  },
  otpInput: {
    width: width * 0.15,
    height: height * 0.07,
    borderColor: '#CCCCCC',
    borderWidth: 1,
    borderRadius: width * 0.02,
    textAlign: 'center',
    fontSize: width * 0.06,
    backgroundColor: '#FFFFFF',
  },
  otpInputFilled: {
    borderColor: 'green',
  },
  instructionText: {
    fontSize: width * 0.04,
    color: '#666',
    textAlign: 'center',
    marginBottom: height * 0.015,
  },
  emailText: {
    color: '#000A23',
    fontWeight: 'bold',
  },
  resendText: {
    fontSize: width * 0.04,
    color: '#1a1a2e',
    textAlign: 'center',
    marginBottom: height * 0.04,
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
    marginTop: height * 0.09,
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
    marginTop: height * 0.09,
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

export default VerificationScreen;
