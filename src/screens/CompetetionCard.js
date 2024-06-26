import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const CompetitionCard = () => {
  return (
    <View style={styles.card}>
      <View style={styles.imageContainer}>
        <Image source={require('../assets/quiz_landing.png')} style={styles.image} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>Weekend in Goa</Text>
        <View style={styles.datesContainer}>
          <View style={styles.arrowDateBlock}>
            <Image source={require('../assets/union.png')} style={styles.arrowBackground} />
            <View style={styles.dateContent}>
              <Image source={require('../assets/python_logo.png')} style={styles.icon} />
              <View style={styles.lineContainer}>
                <Image source={require('../assets/line.png')} style={styles.line} />
              </View>
              <View style={styles.dateTextContainer}>
                <Text style={styles.date}>13 March</Text>
                <Text style={styles.time}>12:00 AM</Text>
              </View>
            </View>
          </View>
          <View style={styles.dateBlock}>
            <Text style={[styles.date, styles.whiteText]}>14 March</Text>
            <Text style={[styles.time, styles.whiteText]}>12:00 AM</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Register Now!</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    width: width * 0.9,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#FFFFFF',
    elevation: 3,
    margin: 10,
  },
  imageContainer: {
    width: width * 0.4,
    height: height * 0.25, // Adjust the height to ensure visibility
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  textContainer: {
    flex: 1,
    padding: 10,
    backgroundColor: '#F9A825',
    justifyContent: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 10,
  },
  datesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  arrowDateBlock: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
    height: 40, // Ensure height to fit the arrow background
  },
  arrowBackground: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
    resizeMode: 'stretch',
  },
  dateContent: {
    flexDirection: 'row',
    alignItems: 'center',
    zIndex: 1,
    paddingLeft: 10, // Ensure content is not flush against the left edge
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 5,
  },
  lineContainer: {
    height: '100%',
    justifyContent: 'center',
    marginRight: 5,
  },
  line: {
    width: 1,
    height: 20, // Ensure the line is properly visible
    resizeMode: 'contain',
  },
  dateTextContainer: {
    paddingLeft: 5,
    paddingRight: 10,
  },
  date: {
    fontSize: 14,
    color: '#4F4F4F',
  },
  time: {
    fontSize: 12,
    color: '#4F4F4F',
  },
  whiteText: {
    color: '#FFFFFF',
  },
  dateBlock: {
    alignItems: 'center',
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: '#FFFFFF',
    width: 160, // Set the desired width
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#000000',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default CompetitionCard;
