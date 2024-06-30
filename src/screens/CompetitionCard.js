import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const CompetitionCard = ({ title, startDate, endDate, startTime, endTime }) => {
  return (
    <View style={styles.card}>
      <Image source={require('../assets/cardimage.png')} style={styles.image} />
      <View style={styles.overlay}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.datesContainer}>
          <View style={styles.arrowDateBlock}>
            <Image source={require('../assets/Union.png')} style={styles.arrowBackground} />
            <View style={styles.dateContent}>
              <Image source={require('../assets/python_icon2.png')} style={styles.icon} />
              <Image source={require('../assets/Line.png')} style={styles.lineicon} />
              <View style={styles.dateTextContainer}>
                <Text style={styles.date}>{startDate}</Text>
                <Text style={styles.time}>{startTime}</Text>
              </View>
            </View>
          </View>
          <View style={styles.dateBlock}>
            <Text style={styles.date_second}>{endDate}</Text>
            <Text style={styles.time_second}>{endTime}</Text>
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
    width: width * 0.75,
    borderRadius: 20,
    overflow: 'hidden',
    backgroundColor: '#FFFFFF',
    elevation: 1,
    margin: 10,
    height: width * 0.5,
    position: 'relative', // Make card relative for overlay positioning
  },
  image: {
    width: '100%',
    height: '100%',
    right: width * 0.228,
    resizeMode: 'contain',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: width * 0.25,
    right: 0,
    bottom: 0,
    backgroundColor: '#F9A825',
    padding: 10,
    justifyContent: 'center',
  },
  title: {
    position: 'absolute',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000000',
    marginTop: width * -0.3,
  },
  datesContainer: {
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: width * 0.05,
  },
  arrowDateBlock: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
    height: 40,
    left: -width * 0.024,
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
  },
  icon: {
    width: 20,
    height: 20,
    marginLeft: 5,
  },
  lineicon: {
    width: 1,
    height: 25,
    margin: 5,
  },
  dateTextContainer: {
    paddingLeft: 5,
    paddingRight: 10,
  },
  date: {
    fontSize: 11,
    fontWeight: 'bold',
    color: '#4F4F4F',
  },
  date_second: {
    fontSize: 11,
    fontWeight: 'bold',
    color: '#FFFFFF',
    right: width * 0.01,
  },
  time: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#4F4F4F',
  },
  time_second: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#FFFFFF',
    left: width * 0.01,
  },
  dateBlock: {
    alignItems: 'center',
    paddingVertical: 5,
    paddingHorizontal: 10,
    right: width * 0.04,
  },
  button: {
    position: 'absolute',
    backgroundColor: '#FFFFFF',
    width: width * 0.3,
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 5,
    left: width * 0.07,
    top: width * 0.02,
    alignItems: 'center',
    marginTop: width * 0.38,
  },
  buttonText: {
    color: '#000000',
    fontWeight: 'semibold',
    fontSize: 16,
  },
});

export default CompetitionCard;
