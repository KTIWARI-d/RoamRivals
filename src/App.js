// App.js

import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import OnBoardingScreen from './screens/OnBoardingScreen';
import RegistrationScreen from './screens/RegistrationScreen'
import VerificationScreen from './screens/VerificationScreen';
import PasswordScreen from './screens/PasswordScreen';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import QuizLandingScreen from './screens/QuizLandingScreen';
import CompetitionCard from './screens/CompetitionCard';


const Stack = createStackNavigator();

const App = () => {
  return (
    // <NavigationContainer>
    //   <Stack.Navigator initialRouteName="OnboardingScreen" screenOptions={{ headerShown: false }}>
    //     <Stack.Screen name="OnBoardingScreen" component={OnBoardingScreen} />
    //     <Stack.Screen name="LoginScreen" component={LoginScreen} />
    //     <Stack.Screen name="RegistrationScreen" component={RegistrationScreen} />
    //     <Stack.Screen name="VerificationScreen" component={VerificationScreen} />
    //     <Stack.Screen name="PasswordScreen" component={PasswordScreen} />

    //   </Stack.Navigator>
    // </NavigationContainer>
    <SafeAreaView style={styles.container}>
      <HomeScreen/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00072D',
  },
});

export default App;

