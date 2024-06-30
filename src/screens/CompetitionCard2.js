import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const difficulty = 4;

const StarRating = ({ rating }) => {
    const stars = [];
  
    for (let i = 1; i <= 5; i++) {
      const source = i <= rating ? require('../assets/star_filled.png') : require('../assets/star_empty.png');
      stars.push(<Image key={i} source={source} style={styles.star} />);
    }
  
    return <View style={styles.starsContainer}>{stars}</View>;
  };

const CompetitionCard2 = ({ title, duration, startDate, endDate, startTime, endTime }) => {
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
                {/* <Text style={styles.date}>{startDate}</Text>
                <Text style={styles.time}>{startTime}</Text> */}
                <View style={styles.star_row}>
                <Text style={styles.duration}>{duration}</Text>
                    <StarRating rating={difficulty} />
                </View>
              </View>
            </View>
          </View>
        </View>
        <Text style={styles.subtitle}>From {startDate} {startTime}{"\n"}To {endDate} {endTime}</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Register Now!</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: width * 0.85,
    borderRadius: 20,
    overflow: 'hidden',
    backgroundColor: '#FFFFFF',
    elevation: 1,
    margin: 10,
    height: width * 0.4,
    position: 'relative', // Make card relative for overlay positioning
  },
  image: {
    width: '100%',
    height: '100%',
    right: width * 0.3,
    resizeMode: 'contain',
  },
  overlay: {
    position: 'absolute',
    top: width * -0.01,
    left: width * 0.3,
    right: 0,
    bottom: 0,
    backgroundColor: '#FFFFFF', // Change to white
    padding: 10,
    justifyContent: 'center',
  },
  title: {
    position: 'absolute',
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000000',
    marginTop: width * -0.28,
  },
  subtitle: {
    position: 'absolute',
    fontSize: width * 0.035,
    color: '#666',
    textAlign: 'left',
    fontWeight: 'semibold',
    marginTop: width * 0.06,
  },
  datesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  arrowDateBlock: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
    height: 35,
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
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'center',
    zIndex: 1,
    marginBottom: width * 0.1,
  },
  icon: {
    width: 10,
    height: 10,
    marginLeft: 10,
  },
  lineicon: {
    width: 1,
    height: 20,
    margin: 5,
    marginRight: width * -0.003,
  },
  duration: {
    fontSize: 13,
    fontWeight: 'semibold',
    color: '#4F4F4F',
    marginRight: width * 0.03,
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
    fontSize: 13,
    fontWeight: 'bold',
    color: '#4F4F4F',
  },
  time_second: {
    fontSize: 13,
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
    backgroundColor: '#08092C',
    width: width * 0.3,
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 5,
    left: width * 0.07,
    top: width * 0.02,
    alignItems: 'center',
    marginTop: width * 0.31,
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'semibold',
    fontSize: 14,
  },
  star_row: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  starsContainer: {
    flexDirection: 'row',
  },
  star: {
    width: width * 0.03,
    height: width * 0.03,
    resizeMode: 'contain',
  },
});

export default CompetitionCard2;
