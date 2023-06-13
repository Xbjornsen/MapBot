import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const TopNavBar = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => console.log('Menu button pressed')}>
        <View style={styles.reviewButtonWrapper}>
          <Icon name="bars" style={styles.menuButton} />
        </View>
      </TouchableOpacity>
      <Text style={styles.title}>Map Bot</Text>
      <TouchableOpacity onPress={() => navigation.navigate("Review")}>
        <View style={styles.reviewButtonWrapper}>
          <Icon name="angle-double-right" style={styles.reviewButton} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 12,
    backgroundColor: '#16262E',
    height: 60,
  },
  menuButton: {
    fontSize: 24,
    color: 'white',
  },
  title: {
    fontFamily: 'Inter',
    fontSize: 24,
    color: 'white',
  },
  reviewButton: {
    fontSize: 28,
    color: 'white',
  },
  reviewButtonWrapper: {
    width: 50, // Increase the width as needed
    height: 50, // Increase the height as needed
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default TopNavBar;
