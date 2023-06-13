import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Swiper from 'react-native-swiper';
import Icon from 'react-native-vector-icons/FontAwesome';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const ReviewScreen = () => {
    const [cards, setCards] = useState([
        { id: 1, isOpen: true },
        { id: 2, isOpen: true },
        { id: 3, isOpen: true },
        { id: 4, isOpen: true },
        { id: 5, isOpen: true },
    ]); // Initial array of cards

    // const toggleCard = (cardId: number) => {
    //     setCards((prevCards) => {
    //         const updatedCards = [...prevCards];
    //         const currentIndex = prevCards.findIndex((card) => card.id === cardId);
    //         updatedCards[currentIndex].isOpen = false;
    //         const nextIndex = (currentIndex + 1) % prevCards.length;
    //         updatedCards[nextIndex].isOpen = true;
    //         return updatedCards;
    //     });
    // };

    const navigation = useNavigation();

    return (
        <View style={styles.backgroundContainer}>
            <View style={styles.topContainer}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <View style={styles.reviewButtonWrapper}>
                        <Icon name="angle-double-left" style={styles.button} />
                    </View>
                </TouchableOpacity>
                <View style={styles.centeredContainer}>
                    <Text style={styles.heading}>Review</Text>
                </View>
            </View>

            <View style={styles.mainContainer}>
                <Swiper showsButtons={true}>
                    {cards.map((card) => (
                        <TouchableOpacity
                            key={card.id}
                            style={styles.cardContainer}>
                            {/* Card Content */}
                            <Text style={styles.header}>Video Title {card.id}</Text>
                            {card.isOpen && (
                                <View style={styles.videoContainer}>
                                    {/* Your embedded video component */}
                                </View>
                            )}
                            <Text style={styles.videoInfo}>Video Info</Text>
                            <View style={styles.iconsContainer}>
                            <TouchableOpacity onPress={() => console.log('thumbs down button pressed')}>
                                    <Icon name="thumbs-o-down" style={styles.downButton} />
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => console.log('thumbs Up button pressed')}>
                                    <Icon name="thumbs-o-up" style={styles.upButton} />
                                </TouchableOpacity>
                            </View>
                        </TouchableOpacity>
                    ))}
                </Swiper>
            </View>

            <View style={styles.btmContainer}>
                <Text style={styles.note}>Earn 1 Coin per 10 Cards</Text>
                <TouchableOpacity onPress={() => console.log('Info button pressed')}>
                    <Icon name="info-circle" style={styles.button} />
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {},
    backgroundContainer: {
        flex: 1,
        backgroundColor: '#16262E',
    },
    topContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        paddingTop: 12,
        height: 60,
    },
    centeredContainer: {
        flex: 1,
        alignItems: 'center',
    },
    mainContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 16,
    },
    cardContainer: {
        backgroundColor: '#274351',
        borderRadius: 10,
        elevation: 5,
        width: windowWidth * 0.9,
        height: windowHeight * 0.80,
        marginBottom: 10,
    },
    header: {
        fontSize: 24,
        marginTop: 10,
        textAlign: 'center',
        color: 'white',
    },
    videoContainer: {
        borderRadius: 10,
        backgroundColor: '#E5E5E5',
        height: '33%',
        marginTop: 20,
        marginLeft: 10,
        marginRight: 10,
    },
    videoInfo: {
        fontSize: 18,
        marginBottom: 5,
        marginTop: 10,
        textAlign: 'center',
        color: 'white',
    },
    iconsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        width: '100%',
        paddingHorizontal: 10,
    },
    btmContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#16262E',
        height: 60,
    },
    heading: {
        fontFamily: 'Inter',
        fontSize: 28,
        color: 'white',
        paddingRight: 8,
    },
    note: {
        fontFamily: 'Inter',
        fontSize: 22,
        color: 'white',
    },
    button: {
        width: 50, // Increase the width as needed
        fontSize: 28,
        color: 'white',
        alignSelf: 'flex-start',
    },
    upButton: {
        width: 50, // Increase the width as needed
        fontSize: 28,
        color: '#1AD643',
        alignSelf: 'flex-start',
    },
    downButton: {
        width: 50, // Increase the width as needed
        fontSize: 28,
        color: 'red',
        alignSelf: 'flex-start',
    },
    reviewButtonWrapper: {
        width: 25, // Increase the width as needed
        height: 50, // Increase the height as needed
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default ReviewScreen;
