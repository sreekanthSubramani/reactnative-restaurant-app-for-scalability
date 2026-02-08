
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
import ReviewFlatList from './Components/HomeScreen/ReviewFlatlist'
import ReorderBlock from './Components/Reorder/ReorderBlock'
import Moreblock from './Components/More/Moreblock';

//Order Now
import Headerblock from './Components/OrderNow/HeaderBlock/Headerblock';



function App(): React.JSX.Element {
  

  const BottomStackTabs = createBottomTabNavigator()


  function BottomTabsHere(){
    return(
      <NavigationContainer>
        <ProviderContainer>
          <BottomStackTabs.Navigator>
            <BottomStackTabs.Screen name='Home' component={HomeScreen} />
            <BottomStackTabs.Screen name='Order Now' component={Headerblock} />
            <BottomStackTabs.Screen name='Re Order' component={ReorderBlock} />
            <BottomStackTabs.Screen name='More' component={Moreblock} />
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
