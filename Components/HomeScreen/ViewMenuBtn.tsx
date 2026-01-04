import type { HomescreenButton } from '../../Types/types'
import {Pressable, Text, View, StyleSheet, Platform} from 'react-native'
import { Typography } from '../../Theme/font_themes'

export default function HomeScreenButton({bgColor, content, height, width}:HomescreenButton){
    return(
        <Pressable>
        <View style={[styles.viewMenuBtn,{height : height, width : width - 10, backgroundColor : bgColor}]}>
               <Text style={[Typography.boldContent, styles.txtCenter]}>{content}</Text> 
        </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    viewMenuBtn : {
        alignItems : "center",
        justifyContent : "center",
        alignSelf : "center",
        ...Platform.select({
            ios : {
                shadowColor : "#000",
                shadowOpacity : 0.25,
                shadowOffset : {height : 0, width : 0}
            },
            android : {
                elevation : 20
            }
        })
    },
    txtCenter : {
        color : "white",   
    }
})