import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const BottomNavBar = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Earn 1 Coin per Km </Text>
            <TouchableOpacity onPress={() => console.log('Profile button pressed')}>
                <Icon name='info-circle' style={styles.infoButton} />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
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
    profileButton: {
        fontSize: 24,
        color: 'white',
    },
    infoButton: {
        fontSize: 24,
        color: 'white',
    },
});

export default BottomNavBar;