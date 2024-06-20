import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions, SafeAreaView,ScrollView } from 'react-native';

const onboardingData = [
{
image: require("../assets/creativity.png"),
title: 'Unleash Your Creativity',
description: 'Lorem ipsum dolor sit amet consectetur. Dolor a convallis n',
},
{
image: require("../assets/creativity_2.png"),
title: 'Stay Productive',
description: 'Enhance your workflow with our tools and stay productive.',
},
{
image: require("../assets/creativity_3.png"),
title: 'Achieve Your Goals',
description: 'Set goals and track your progress with our application.',
},
];

const OnboardingScreen = ({ navigation }) => {
const [currentIndex, setCurrentIndex] = useState(0);

const handleNextPress = () => {
if (currentIndex < onboardingData.length - 1) {
setCurrentIndex(currentIndex + 1);
} else {
// Optional: Add navigation to the next screen or other logic here when the onboarding is finished
navigation.navigate('LoginScreen')
console.log('Onboarding complete');
}
};

return (
<SafeAreaView style={styles.safeArea}>
<ScrollView contentContainerStyle={styles.scrollViewContent}>
<View style={styles.container}>
<View style={styles.imageContainer}>
<Image
           source={onboardingData[currentIndex].image}
           style={styles.image}
         />
</View>
<View style={styles.textContainer}>
<Text style={styles.title}>{onboardingData[currentIndex].title}</Text>
<Text style={styles.description}>{onboardingData[currentIndex].description}</Text>
</View>
<View style={styles.pagination}>
{onboardingData.map((_, index) => (
<View
key={index}
style={index === currentIndex ? styles.activeDot : styles.dot}
/>
))}
</View>
<TouchableOpacity style={styles.button} onPress={handleNextPress}>
<Text style={styles.buttonText}>Next</Text>
</TouchableOpacity>
</View>
</ScrollView>
</SafeAreaView>
);
};

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
safeArea: {
flex: 1,
},
scrollViewContent: {
flexGrow: 1,
justifyContent: 'center',
},
container: {
flex: 1,
justifyContent: 'center',
alignItems: 'center',
backgroundColor: '#fff',
paddingHorizontal: 20,
},
imageContainer: {
marginBottom: height * 0.05,
},
image: {
width: width * 0.8, // Adjust image width based on screen width
height: height * 0.3, // Adjust image height based on screen height
resizeMode: 'contain',
marginTop: width * 0.1
},
textContainer: {
alignItems: 'center',
marginBottom: height * 0.05,
},
title: {
fontSize: width * 0.06, // Responsive font size based on screen width
fontWeight: '700', // Increased boldness
marginBottom: 10,
color: '#1a1a2e', // Changed text color to dark navy blue
fontFamily: 'Monda-Bold', // Use Monda-Bold font
textAlign: 'center',
},
description: {
fontSize: width * 0.04, // Responsive font size based on screen width
color: '#666',
textAlign: 'center',
paddingHorizontal: 20,
},
pagination: {
flexDirection: 'row',
alignItems: 'center',
justifyContent: 'center',
marginBottom: height * 0.05,
},
dot: {
width: 10,
height: 10,
borderRadius: 5,
backgroundColor: '#ccc',
marginHorizontal: 5,
},
activeDot: {
width: 10,
height: 10,
borderRadius: 5,
backgroundColor: '#000',
marginHorizontal: 5,
},
button: {
backgroundColor: '#000A23', // Changed button color to dark navy blue
paddingVertical: 10,
paddingHorizontal: 40,
borderRadius: 10,
width: '80%', // Set button width to 80% of the container's width
alignItems: 'center',
marginTop: width * 0.2,
marginBottom: width * 0.05
},
buttonText: {
color: '#fff',
fontSize: width * 0.05, // Responsive font size based on screen width
fontWeight: '600', // Increased boldness for button text
},
});

export default OnboardingScreen;