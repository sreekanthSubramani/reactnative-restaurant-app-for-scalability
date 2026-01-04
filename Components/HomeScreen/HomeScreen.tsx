import {View, StyleSheet, Text, Image, useWindowDimensions,ScrollView, Platform } from 'react-native'
import { useContext, useEffect } from 'react'
import { ProviderContext } from '../../Context/contextHook'
import AsyncStorage from '@react-native-async-storage/async-storage'


//components
import OurRecommendations from './OurRecommendations'
import CustomerReviewBox from './CustomerReviewBox'


export default function HomeScreen() : JSX.Element{

    const {helperMethodsForTheme, theme} = useContext(ProviderContext)
    const {height, width} = useWindowDimensions()
    const burgerSplashImage = 'https://images.unsplash.com/photo-1549611016-3a70d82b5040?q=80&w=2030&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'



    return(
        <ScrollView>
        <View>
        {/* //header image block */}
            <View style={{height : height/4}}>
                <Image 
                    src={burgerSplashImage}
                    style={{height : '100%', width : "100%"}}
                />
            </View>

            {/* //recommendation block */}

                <View>
                    <OurRecommendations />
                </View>

            {/* //cx review block  */}

                <View>
                    <CustomerReviewBox />
                </View>



        
        </View>
        </ScrollView>
    )
}


const styles = StyleSheet.create({

})