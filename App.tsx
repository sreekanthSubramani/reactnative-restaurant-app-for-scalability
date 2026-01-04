
import React, {useContext} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ProviderContainer } from './Context/contextHook';

//Components import
import HomeScreen from './Components/HomeScreen/HomeScreen';
import OurRecommendations from './Components/HomeScreen/OurRecommendations'





function App(): React.JSX.Element {
  

  const BottomStackTabs = createBottomTabNavigator()


  function BottomTabsHere(){
    return(
      <NavigationContainer>
        <ProviderContainer>
          <BottomStackTabs.Navigator>
            <BottomStackTabs.Screen name='Home' component={HomeScreen} />
          </BottomStackTabs.Navigator>
          </ProviderContainer>
      </NavigationContainer>
    )
  }



  return (
    <SafeAreaView style={{flex : 1}}>
      <BottomTabsHere />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
