import {Text, TextProps, StyleSheet} from 'react-native'

export default function TextWrap(props : TextProps){
    return(
        <Text {...props} style={[styles.txtStyle, props.style]}/>
    )
}

const styles = StyleSheet.create({
    txtStyle : {
        color : "#000"
    }
})