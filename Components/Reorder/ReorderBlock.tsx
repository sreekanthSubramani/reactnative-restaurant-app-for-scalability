import {View, StyleSheet, Text} from 'react-native'

export default function ReorderBlock(){
    return(
        <View style={styles.reOrderBlock}>
            <Text>Use this page to reorder your favourite items!</Text>
            <Text>Order something to see it here</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    reOrderBlock : {
        display : "flex",
        justifyContent : "center",
        alignItems : "center",
        flexDirection : "column",
        gap : 20,
        marginTop : 20
    }
})