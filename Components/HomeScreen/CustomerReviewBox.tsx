import {View, StyleSheet, Platform} from 'react-native'
import TextWrap from '../../Defaults/TextWrapper'
import { Typography } from '../../Theme/font_themes'

export default function CustomerReviewBox(){
    return(
        <View style={styles.boxCxReview}>
            <TextWrap style={Typography.chilBoldContent}> Customer Reviews </TextWrap>
            <TextWrap style={styles.clickReview}> View all </TextWrap>
        </View>
    )
}

const styles = StyleSheet.create({
    boxCxReview : {
        marginHorizontal : 10,
        flexDirection : "row",
        justifyContent : "space-between",
        alignItems : "center",
        height : 50,
        backgroundColor : "white",
        borderRadius : 10,
        marginTop : 10,
        paddingHorizontal : 10,
        ...Platform.select({
            ios : {
                shadowColor : '#000',
                shadowOffset : ({height : 0, width : 0}),
                shadowOpacity : 0.25
            },
            android : {
                elevation : 20
            }
        })
    },
    clickReview: {
        color : "blue",
        fontWeight : 600
    }
})