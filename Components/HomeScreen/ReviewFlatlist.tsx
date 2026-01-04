import {View, StyleSheet, FlatList, Platform, Image, useWindowDimensions} from 'react-native'
import TextWrap from '../../Defaults/TextWrapper'
import { Typography } from '../../Theme/font_themes'
import { reviewsHere } from '../../Defaults/ReviewClass'
import Ionicons from 'react-native-vector-icons/Ionicons'
import OurRecommendations from './OurRecommendations'
import CustomerReviewBox from './CustomerReviewBox'


export default function ReviewFlatList(){

     const {height, width} = useWindowDimensions()
    const burgerSplashImage = 'https://images.unsplash.com/photo-1549611016-3a70d82b5040?q=80&w=2030&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'

    function renderFlatlist(data : any){
        return(

                <View style={styles.insideFLatlistView}>
                    <TextWrap>{data.item.name}</TextWrap>

                    <View style={{flexDirection : "row"}}>
                    {Array.from({length : data.item.star}).map((_,i)=>(
                        <Ionicons 
                        key={i}
                        name='star-sharp' 
                        size={20} 
                        color="#EFBF04" />
                    ))}
                    </View>

                    <TextWrap>{data.item.review}</TextWrap>
                    {data.item.from === "Foodhub" ?
                        <Image 
                         source={require('../../assets/foodhub.png')}
                         style={styles.imageStyle}
                         resizeMode="contain"
                        />
                        :
                        null
                    }
                </View>
            )

    }


    return (
        <View style={{flex : 1}}>


        <FlatList
        showsVerticalScrollIndicator={false}
        data={reviewsHere}
        keyExtractor={(item, index)=> index.toString()}
        renderItem={renderFlatlist} 
        ListHeaderComponent={
            <View style={{flex : 1}}>
            <View style={{height : height/3}}>
                <Image 
                    src={burgerSplashImage}
                    style={{height : '100%', width : "100%"}}
                />
            </View>

            <View>
                <OurRecommendations />
            </View>
            
            <View>
                <CustomerReviewBox />
            </View>

            <View style={styles.mainReviewBlock}>
                <TextWrap style={Typography.boldContent}>Review of the Roti Food Bar in</TextWrap>
                <TextWrap style={Typography.boldContent}>Peterborough</TextWrap>
                <TextWrap style={styles.textReviewBlock}>4.7</TextWrap>
                <TextWrap>(45 Reviews)</TextWrap>
                <View style={{marginTop : 20}}>
                <TextWrap style={styles.recommendBlock}>Highly Recommended</TextWrap>
            </View>
            </View>




            </View>
        }
        
        />


        </View>
    )
}

const styles = StyleSheet.create({
    mainReviewBlock : {
        borderRadius : 10,
        marginHorizontal : 10,
        alignItems : "center",
        paddingVertical : 10,
        backgroundColor : "white",
        ...Platform.select({
            ios : {
                shadowColor : "#000",
                shadowOpacity : 0.25,
                shadowOffset : {height : 0, width : 0}
            },
            android : {
                elevation : 10
            }
        })
    },
    textReviewBlock : {
        fontSize : 60,
        fontWeight : 500
    },
    recommendBlock : {
        fontWeight : "400",
        fontSize : 18
    },
    insideFLatlistView : {
        borderRadius : 10,
        marginHorizontal : 10,
        alignItems : "flex-start",
        paddingVertical : 10,
        backgroundColor : "white",
        marginVertical : 10,
        paddingHorizontal : 10
    },
    imageStyle : {
        height : 40, 
        width : 80
    }
})