import React, { useEffect, useState } from 'react';
import { Dimensions, PermissionsAndroid, StyleSheet, View } from 'react-native';
import Geolocation, { GeoCoordinates } from 'react-native-geolocation-service';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

// Function to request permission for location
const requestLocationPermission = async () => {
    try {
        const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
            {
                title: 'Geolocation Permission',
                message: 'App needs your location',
                buttonNeutral: 'Ask Me Later',
                buttonNegative: 'Cancel',
                buttonPositive: 'OK',
            },
        );
        return granted === PermissionsAndroid.RESULTS.GRANTED;
    } catch (err) {
        console.log(err);
        return false;
    }
};

const MainPage = () => {
    const [location, setLocation] = useState<GeoCoordinates | null>(null);

    useEffect(() => {
        const getLocation = async () => {
            const hasPermission = await requestLocationPermission();
            if (hasPermission) {
                Geolocation.getCurrentPosition(
                    position => {
                        setLocation(position.coords);
                    },
                    error => {
                        console.log(error.code, error.message);
                        setLocation(null);
                    },
                    { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 },
                );
            }
        };

        getLocation();
    }, []);

    return (
        <View style={styles.container}>
            {location && (
                <MapView
                    provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                    style={styles.map}
                    initialRegion={{
                        latitude: location.latitude,
                        longitude: location.longitude,
                        latitudeDelta: 0.015,
                        longitudeDelta: 0.0121,
                    }}
                />
            )}
            
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: windowWidth * 1,
        height: windowHeight * 0.860,

    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },

});

export default MainPage;
