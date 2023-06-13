import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  useColorScheme,
  View
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import BottomNavBar from './components/bottomNavbar';
import TopNavBar from './components/topNavBar';
import MainPage from './screens/homePage';
import Menu from './screens/menuPage';
import ReviewInfo from './screens/reviewInfo';
import Review from './screens/reviewPage';


const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen component={Main} name="Main" options={{ headerShown: false }} />
        <Stack.Screen component={Review} name="Review" options={{ headerShown: false }} />
        <Stack.Screen component={Menu} name="Menu" options={{ headerShown: false }} />
        <Stack.Screen component={ReviewInfo} name="ReviewInfo" options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const Main = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}
      >
        <TopNavBar />
        <View>
          <MainPage />
        </View>
        <BottomNavBar/>
      </ScrollView>
    </SafeAreaView>

  );
}

export default App;
