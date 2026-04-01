
import React from 'react';
import { SafeAreaView,StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; 
import { ProviderContainer } from './Context/contextHook';
import 'react-native-gesture-handler';

//Components import
import ReorderBlock from './Components/Reorder/ReorderBlock'
import Moreblock from './Components/More/Moreblock';



//Tanstack query

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import CategoryGrids from './Components/OrderNow/CategoryGrid/CategoryGrid';
import Home from './Components/HomeScreen/HomeScreen';


//Subcategory screens

import ShowSubCat from './Subcategorycomponents/ShowSubCats';




function App(){
  
  const BottomStackTabs = createBottomTabNavigator()

   const rnQueryClient = new QueryClient()

  function BottomTabsHere(){

    return(
      <NavigationContainer>
        <ProviderContainer>
          <QueryClientProvider client={rnQueryClient}>
          <BottomStackTabs.Navigator>
            <BottomStackTabs.Screen name='Home' component={Home} />
            <BottomStackTabs.Screen name='Order Now' component={ShowSubCat} options={{headerShown : false}}/>
            <BottomStackTabs.Screen name='Re Order' component={ReorderBlock} />
            <BottomStackTabs.Screen name='More' component={Moreblock} />
          </BottomStackTabs.Navigator>
          </QueryClientProvider>
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
