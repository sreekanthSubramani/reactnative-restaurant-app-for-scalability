import {View, Text, useWindowDimensions } from 'react-native'
import ReviewFlatList from './ReviewFlatlist'
import HomescreenCont from './ViewMenuBtn'




export default function Home(){

    const {height, width} = useWindowDimensions()
    const burgerSplashImage = 'https://images.unsplash.com/photo-1549611016-3a70d82b5040?q=80&w=2030&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'


    function dummyFunc(){

    }
    
    return(
        <>
            <View style={{flex : 1}}>
                <ReviewFlatList />
            </View>
                
        <View style={{zIndex : 1}}>
        <HomescreenCont bgColor='red' content='View Menu' height={height/17} width={width} pressFunction={dummyFunc}/>
        </View>
        
        </>

    )
}
