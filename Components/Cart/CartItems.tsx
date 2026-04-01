import { useState } from 'react';
import {View, Text, StyleSheet, Pressable, FlatList} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { ButtonGroup } from '@rneui/themed';
import Icon from 'react-native-vector-icons/Ionicons'
import { Divider } from '@rneui/base';

export default function CartComponent(){

    const [indexSelect, setIndexSelect] = useState(0)

    console.log(indexSelect, 'index select')


    return(
        <SafeAreaView style={{flex : 1, marginTop : 10}}>
        <View style={{display : "flex", flexDirection : "column", justifyContent : "center", gap : 5}}>
            <ButtonGroup 
            containerStyle={{
                height : 50,
                borderRadius : 20,
                borderWidth : 2
            }}
            textStyle={{
                fontSize : 16,
                color : "black"
            }}
            selectedButtonStyle={{
                backgroundColor : "red"
            }}
            buttons={['Delivery', 'Collection']} 
            selectedIndex={indexSelect}
            onPress={(value)=> setIndexSelect(value)}
            />

        <View style={{display : "flex", flexDirection : "row", alignItems : "center", gap : 10, marginLeft : 10}}>
        <Icon
        name='add-circle-outline'
        size={30} />
        <Text style={{fontSize : 20, fontWeight : 'bold'}}>Coupon</Text>
        </View>

        <Divider width={1} style={{marginTop : 10}}/>
        </View>

        <View>
            <Text style={{fontWeight : 'bold', fontSize : 16}}>YOU MAY ALSO LIKE</Text>

        </View>

        
        </SafeAreaView>

    )
}

const styles = StyleSheet.create({

})