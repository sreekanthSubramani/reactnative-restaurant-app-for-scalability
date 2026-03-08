import {View, Text, Button, StyleSheet, useWindowDimensions, Image} from 'react-native'
import TextWrap from '../../Defaults/TextWrapper'




export default function DiscountTag(){

    const {height,width} = useWindowDimensions()

    return(
        <View style={[styles.discountBoundary, {height : height/10, width : width}]}>

            <View style={styles.discountBox}>

                <View>
                    <Image 
                    source={require('../../assets/discount.png')}
                    style={styles.discountImage}
                    />
                </View>

                <View style={styles.discountTagRow}>
                    <Text style={{fontSize : 14, fontWeight : "bold"}}>GET 10% OFF</Text>
                    <Text style={{fontSize : 12, fontWeight : "bold"}}>On both delivery & pickup orders over $20.00</Text>
                </View>



            </View>
            
        </View>
    )
}


const styles = StyleSheet.create({
    discountBoundary : {
       display : 'flex',
       justifyContent : 'center',
       alignItems : 'center',
    },
    discountBox : {
        display : 'flex',
        flexDirection : 'row',
        borderWidth : 1,
        height : '70%',
        width : '90%',
        borderRadius : 10,
        borderColor : "grey",
        justifyContent : 'center',
        gap : 10
    },
    discountImage : {
        height : '100%',
        width : 40,
        objectFit : 'contain'
    },
    discountTagRow : {
        display : 'flex',
        flexDirection : 'column',
        justifyContent : "center"
    }
})