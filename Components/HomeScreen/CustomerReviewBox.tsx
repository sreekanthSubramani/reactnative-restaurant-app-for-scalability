import {View, StyleSheet, Platform, Text} from 'react-native'
import { Typography } from '../../Theme/font_themes'

export default function CustomerReviewBox(){
    return(
        <View style={styles.boxCxReview}>
            <Text style={Typography.chilBoldContent}> Customer Reviews </Text>
            <Text style={styles.clickReview}> View all </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    boxCxReview : {
        marginBottom : 10,
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