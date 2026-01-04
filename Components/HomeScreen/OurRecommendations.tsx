import {View, StyleSheet, Platform, Text} from 'react-native'
import TextWrap from '../../Defaults/TextWrapper'
import { Typography } from '../../Theme/font_themes'



export default function OurRecommendations(){
    return(
        <>
        <View style={styles.shadowView}>
                    <View 
                style={styles.insideShadowView}>

                <TextWrap style={Typography.boldContent}>Our Recommendations</TextWrap>
                    <View style={styles.childViewColoumn}>
                            <View style={styles.menuItemandPrice}>
                            <TextWrap style={Typography.chilBoldContent}>Chicken Sheek Kebab</TextWrap>
                            <TextWrap>5.00</TextWrap>
                            </View>
                            <TextWrap>Regular - 2 Succulent minced chicken kebabs cooked on skewers in the clay oven</TextWrap>
                    </View>

                    <View style={styles.childViewColoumn}>
                            <View style={styles.menuItemandPrice}>
                            <TextWrap style={Typography.chilBoldContent}>Haleem</TextWrap>
                            <TextWrap>11.00</TextWrap>
                            </View>
                            <TextWrap>Regular - 2 Succulent minced chicken kebabs cooked on skewers in the clay oven</TextWrap>
                    </View>

                            <View style={styles.childViewColoumn}>
                            <View style={styles.menuItemandPrice}>
                            <TextWrap style={Typography.chilBoldContent}>Karahi Lamb</TextWrap>
                            <TextWrap>13.00</TextWrap>
                            </View>
                            <TextWrap>Regular - 2 Succulent minced chicken kebabs cooked on skewers in the clay oven</TextWrap>
                    </View>

                            <View style={styles.childViewColoumn}>
                            <View style={styles.menuItemandPrice}>
                            <TextWrap style={Typography.chilBoldContent}>Lamb Chops</TextWrap>
                            <TextWrap>10.00</TextWrap>
                            </View>
                            <TextWrap>Regular - 2 Succulent minced chicken kebabs cooked on skewers in the clay oven</TextWrap>
                    </View>

                            <View style={styles.childViewColoumn}>
                            <View style={styles.menuItemandPrice}>
                            <TextWrap style={Typography.chilBoldContent}>Karahi Daal Lamb</TextWrap>
                            <TextWrap>16.00</TextWrap>
                            </View>
                            <TextWrap>Regular - 2 Succulent minced chicken kebabs cooked on skewers in the clay oven</TextWrap>
                    </View>

            </View>
            </View>
        
        </>
    )
}


const styles = StyleSheet.create({
    shadowView : {
        marginHorizontal : 10,
        backgroundColor : "white",
        borderRadius : 10,

        ...Platform.select({
            android : {
                elevation : 20,
            },
            ios : {
            shadowColor : "black",
            shadowOffset : {height : 1, width : 1},
            shadowOpacity : 0.25,
            },
        }),
    },
    insideShadowView : {
        height : 'auto', 
        marginHorizontal : 10, 
        paddingHorizontal : 10, 
        paddingVertical : 10, 
        gap : 10,
        borderRadius : 5,
        backgroundColor : "white"
    },
    menuItemandPrice : {
        flexDirection : "row", 
        justifyContent : "space-between"
    },
    childViewColoumn : {
        flexDirection : "column"
    }
})


