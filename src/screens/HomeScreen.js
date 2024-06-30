import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import CompetitionCard from './CompetitionCard'; // Adjust the path if necessary
import CompetitionCard2 from './CompetitionCard2'; // Import the new CompetitionCard2

const { width, height } = Dimensions.get('window');

const HomeScreen = () => {
  const coinText = "123456"; // Change this to test different lengths



  const horizontalData = [
    { id: '1', title: 'Weekend in Goa', startDate: '13 March', endDate: '14 March', startTime: '12:00 AM', endTime: '12:00 AM' },
    { id: '2', title: 'Holiday in Paris', startDate: '20 March', endDate: '21 March', startTime: '1:00 PM', endTime: '1:00 PM' },
    { id: '3', title: 'Trip to Ladakh', startDate: '27 March', endDate: '28 March', startTime: '2:00 PM', endTime: '2:00 PM' },
    // Add more cards as needed
  ];

  const verticalData = [
    { id: '4', title: 'Adventure in Bali', duration: '10 Min', startDate: '15 April', endDate: '16 April', startTime: '10:00 AM', endTime: '10:00 AM' },
    { id: '5', title: 'Safari in Kenya', duration: '10 Min', startDate: '20 April', endDate: '21 April', startTime: '8:00 AM', endTime: '8:00 AM' },
    { id: '4', title: 'Adventure in Bali', duration: '10 Min', startDate: '15 April', endDate: '16 April', startTime: '10:00 AM', endTime: '10:00 AM' },
    { id: '5', title: 'Safari in Kenya', duration: '10 Min', startDate: '20 April', endDate: '21 April', startTime: '8:00 AM', endTime: '8:00 AM' },
    { id: '4', title: 'Adventure in Bali', duration: '10 Min', startDate: '15 April', endDate: '16 April', startTime: '10:00 AM', endTime: '10:00 AM' },
    { id: '5', title: 'Safari in Kenya', duration: '10 Min', startDate: '20 April', endDate: '21 April', startTime: '8:00 AM', endTime: '8:00 AM' },
    // // Add more vertical cards as needed
  ];

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <View style={styles.iconRow}>
            <View style={styles.profileIconContainer}>
              <Image source={require('../assets/profile_icon.png')} style={styles.profileIcon} />
              <View style={styles.notificationBadge}>
                <Text style={styles.notificationBadgeText}>1</Text>
              </View>
            </View>
            <View style={styles.walletContainer}>
              <Image source={require('../assets/wallet.png')} style={styles.coinIcon} />
              <Text style={[styles.coinText, { right: `${37 - coinText.length}%` }]}>{coinText}</Text>
            </View>
          </View>
          <View style={styles.headerLeft}>
            <Text style={styles.welcomeText}>Welcome Back!</Text>
            <Text style={styles.username}>Lorem Ipsum</Text>
            <Text style={styles.username}>Doloresque</Text>
          </View>
        </View>
        <View style={styles.bottomBlueSection} />
        <View style={styles.cardListContainer}>
          <FlatList
            data={horizontalData}
            renderItem={({ item }) => (
              <View style={styles.cardWrapper}>
                <CompetitionCard
                  title={item.title}
                  startDate={item.startDate}
                  endDate={item.endDate}
                  startTime={item.startTime}
                  endTime={item.endTime}
                />
              </View>
            )}
            keyExtractor={item => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.cardList}
            snapToAlignment="center"
            decelerationRate="fast"
            snapToInterval={width * 0.85 + width * 0.05} // Adjust based on card width and margin
            pagingEnabled
            initialScrollIndex={1} // Start with the second card
            getItemLayout={(data, index) => (
              { length: width * 0.85, offset: (width * 0.85 + width * 0.05) * index, index }
            )}
          />
        </View>
        <View style={styles.tabsContainer}>
          <Text style={styles.competitionText}>Competitions:</Text>
          <TouchableOpacity style={styles.tabLatest}>
            <Text style={styles.tabText}>Latest</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tabUpcoming}>
            <Text style={styles.tabText}>Upcoming</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.verticalCardListContainer}>
          {verticalData.map(item => (
            <View key={item.id} style={styles.verticalCardWrapper}>
              <CompetitionCard2
                title={item.title}
                duration={item.duration}
                startDate={item.startDate}
                endDate={item.endDate}
                startTime={item.startTime}
                endTime={item.endTime}
              />
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5F5F5',
    flexGrow: 1,
  },
  header: {
    padding: width * 0.05,
    paddingBottom: width * 0.15,
    backgroundColor: '#FFFFFF',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    marginBottom: height * 0.12, // Increase margin to make space for cards
  },
  iconRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  profileIconContainer: {
    position: 'relative',
  },
  profileIcon: {
    width: width * 0.15, // Increased width
    height: width * 0.15, // Increased height
    resizeMode: 'contain',
  },
  notificationBadge: {
    position: 'absolute',
    bottom: width * 0.001,
    left: width * 0.1,
    backgroundColor: 'orange',
    borderRadius: width * 0.05,
    paddingHorizontal: width * 0.02,
    paddingVertical: width * 0.01,
  },
  notificationBadgeText: {
    color: 'white',
    fontWeight: 'bold',
  },
  headerLeft: {
    flexDirection: 'column',
    marginTop: height * 0.02,
  },
  welcomeText: {
    fontSize: width * 0.04,
    color: '#666',
  },
  username: {
    fontSize: width * 0.06,
    fontWeight: 'bold',
    color: '#1a1a2e',
  },
  walletContainer: {
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
  },
  coinIcon: {
    width: width * 0.25, // Increased width
    height: width * 0.15, // Increased height
    resizeMode: 'contain',
  },
  coinText: {
    position: 'relative',
    bottom: width * 0.03,
    left: width * 0.04,
    marginTop: -width * 0.045,
    transform: [{ translateY: -width * 0.03 }],
    fontSize: width * 0.035,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
  },
  cardListContainer: {
    position: 'absolute',
    top: height * 0.22, // Adjust based on how much you want the cards to overlap the header
    left: 0,
    right: 0,
  },
  cardList: {
    // paddingHorizontal: (width * 0.05), // Ensure padding for start and end
  },
  cardWrapper: {
    width: width * 0.8, // Adjust based on card width
    left: width * 0.1,
    alignItems: 'center',
  },
  tabsContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: width * 0.02,
    paddingLeft: width * 0.05,
    backgroundColor: '#FFFFFF',
    // borderTopLeftRadius: 20,
    // borderTopRightRadius: 20,
    marginTop: height * 0.1,
    marginBottom: height * 0.02,
  },
  competitionText: {
    paddingRight: width * 0.1,
    fontSize: width * 0.05,
    fontWeight: 'bold',
    color: '#1a1a2e',
    marginRight: width * 0.05,
  },
  tabLatest: {
    backgroundColor: '#000A23',
    borderRadius: width * 0.03,
    paddingHorizontal: width * 0.05,
    paddingVertical: width * 0.02,
    marginRight: width * 0.035,
    marginLeft: width * -0.12,
  },
  tabUpcoming: {
    backgroundColor: '#A0A0A0',
    borderRadius: width * 0.03,
    paddingHorizontal: width * 0.05,
    paddingVertical: width * 0.02,
  },
  tabText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: width * 0.03,
  },
  verticalCardListContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  verticalCardWrapper: {
    width: '100%',
    alignItems: 'center',
  },
  bottomBlueSection: {
    position: 'absolute',
    top: width * 0.55,
    left: 0,
    right: 0,
    height: height * 0.25, // Adjust the height as needed
    backgroundColor: '#000A23',
    zIndex: -1,
  },
});

export default HomeScreen;
