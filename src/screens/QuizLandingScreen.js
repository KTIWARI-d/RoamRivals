import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity, Modal, ScrollView } from 'react-native';

const { width, height } = Dimensions.get('window');
const difficulty = 4; // Add the difficulty level from backend.
// const imageUrl = 'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' //Add the image URL from backend in this variable.

const StarRating = ({ rating }) => {
  const stars = [];

  for (let i = 1; i <= 5; i++) {
    const source = i <= rating ? require('../assets/star_filled.png') : require('../assets/star_empty.png');
    stars.push(<Image key={i} source={source} style={styles.star} />);
  }

  return <View style={styles.starsContainer}>{stars}</View>;
};

const QuizLandingScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <ScrollView contentContainerStyle={styles.container} scrollEnabled={false}>
      <Image source={require('../assets/quiz_landing.png')} style={styles.image} />
      {/* <Image source={{ uri: imageUrl }} style={styles.image} /> */}
      <View style={styles.contentContainer}>
        <Text style={styles.title}>Weekend in Goa</Text>
        <Text style={styles.subtitle}>From 13 March 12:00 AM{"\n"}To 14 March 12:00 AM</Text>
        <View style={styles.row}>
          <TouchableOpacity style={styles.rule_column} onPress={() => setModalVisible(true)}>
            <View style={styles.rulesIconContainer}>
              <Image source={require('../assets/rules_icon.png')} style={styles.rulesIcon} />
              <Text style={styles.overlayText}>Click for competition rules</Text>
            </View>
          </TouchableOpacity>
          <View style={styles.python_column}>
            <Image source={require('../assets/python_icon.png')} style={styles.icon} />
          </View>
        </View>
        <View style={styles.star_row}>
          <Text style={styles.difficultyLabel}>Difficulty :</Text>
          <StarRating rating={difficulty} />
        </View>
        <View style={styles.infoContainer}>
          <View style={styles.infoRow}>
            <Image source={require('../assets/time_icon.png')} style={styles.infoIcon} />
            <Text style={styles.infoText}><Text style={styles.largeText}>10</Text> {"\n"}Minutes</Text>
          </View>
          <View style={styles.infoRow}>
            <Image source={require('../assets/questions_icon.png')} style={styles.infoIcon} />
            <Text style={styles.infoText}><Text style={styles.largeText}>10</Text> {"\n"}Questions</Text>
          </View>
          <View style={styles.infoRow}>
            <Image source={require('../assets/entry_fee_icon.png')} style={styles.infoIcon} />
            <Text style={styles.infoText}><Text style={styles.largeText}>10 Rs.</Text>{"\n"}Entry Fee</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.registerButton}>
          <Text style={styles.registerButtonText}>Register</Text>
        </TouchableOpacity>
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Rules & Regulations</Text>
            <ScrollView contentContainerStyle={styles.modalScrollContent}>
              <Text style={styles.modalText}>
                <Text style={styles.boldText}>• Question Design:</Text> Set of MCQs covering various topics related to coding, algorithms, data structures, and programming languages. All questions have a single correct answer.{"\n\n"}
                <Text style={styles.boldText}>• Difficulty Level:</Text> Questions include varying difficulty to cater to participants with different skill levels.{"\n\n"}
                <Text style={styles.boldText}>• Time Limit:</Text> Each MCQ has a 30sec time limit to prevent participants from spending too much time on a single question.{"\n\n"}
                <Text style={styles.boldText}>• Scoring System:</Text> The Scoring system rewards correct answers and penalizes incorrect ones. Factors like speed and accuracy are considered in ranking.
              </Text>
            </ScrollView>
            <TouchableOpacity style={styles.continueButton} onPress={() => setModalVisible(false)}>
              <Text style={styles.continueButtonText}>Continue</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
  },
  image: {
    width: width,
    height: height * 0.5,
    resizeMode: 'cover',
  },
  contentContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: width * 0.05,
    marginTop: -height * 0.12,
    paddingLeft: height * 0.03,
  },
  title: {
    fontSize: width * 0.07,
    fontWeight: '700',
    color: '#1a1a2e',
    textAlign: 'left',
    marginBottom: height * 0.01,
    marginTop: width * 0.03,
  },
  subtitle: {
    fontSize: width * 0.04,
    color: '#666',
    textAlign: 'left',
    marginBottom: height * 0.02,
  },
  overlayText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',       
    padding: 10,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: height * 0.02,
  },
  python_column: {
    marginTop: -height * 0.045, // Adjusted to move the Python icon slightly up
  },
  rule_column: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rulesIconContainer: {
    position: 'relative',
    width: width * 0.67,
    height: width * 0.08,
    justifyContent: 'center',
    alignItems: 'center',
  },
  star_row: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginBottom: height * 0.02,
  },
  rulesIcon: {
    width: '100%',
    height: '100%',
    resizeMode: 'stretch',
  },
  icon: {
    width: width * 0.15,
    height: width * 0.15,
    resizeMode: 'contain',
  },
  difficultyLabel: {
    fontSize: width * 0.04,
    color: '#000',
  },
  starsContainer: {
    flexDirection: 'row',
  },
  star: {
    width: width * 0.05,
    height: width * 0.05,
    resizeMode: 'contain',
  },
  infoContainer: {
    marginBottom: height * 0.02,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: height * 0.01,
  },
  infoIcon: {
    width: width * 0.055,
    height: width * 0.055,
    resizeMode: 'contain',
    marginRight: width * 0.02,
  },
  infoText: {
    fontSize: width * 0.04,
    color: '#666',
  },
  largeText: {
    fontSize: width * 0.06,
    fontWeight: 'bold',
  },
  registerButton: {
    backgroundColor: '#000A23',
    paddingVertical: height * 0.02,
    borderRadius: width * 0.02,
    alignItems: 'center',
    marginTop: height * 0.03,
  },
  registerButtonText: {
    color: '#fff',
    fontSize: width * 0.05,
    fontWeight: '600',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: width * 0.9,
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: width * 0.05,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: width * 0.06,
    fontWeight: '700',
    color: '#1a1a2e',
    marginBottom: height * 0.02,
  },
  modalScrollContent: {
    flexGrow: 1,
    alignItems: 'center',
  },
  modalText: {
    fontSize: width * 0.04,
    color: '#666',
    textAlign: 'left',
  },
  boldText: {
    fontWeight: '700',
  },
  continueButton: {
    backgroundColor: '#000A23',
    paddingVertical: height * 0.015,
    paddingHorizontal: width * 0.2,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: height * 0.02,
  },
  continueButtonText: {
    color: '#fff',
    fontSize: width * 0.05,
    fontWeight: '600',
  },
});

export default QuizLandingScreen;
