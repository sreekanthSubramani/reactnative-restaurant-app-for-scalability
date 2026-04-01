import { useContext, useState } from 'react'
import {View, Text, StyleSheet, FlatList, Pressable} from 'react-native'
import { ProviderContext } from '../Context/contextHook'
import { Divider } from '@rneui/base'
import CartItem from './CartItem'



export default function ItemComponent(){

    const {itemList, cartItems, setCartItems} = useContext(ProviderContext)
    const [cartItemCount, setCartItemCount] = useState(1)
    const [showCartBtn, setShowCartBtn] = useState(false)
    const [compItems, setCompItems] = useState({
        itemName : '',
        itemPrice : ''
    })

    function showCarts(name : string, price : string){
        setShowCartBtn(true)   
        setCompItems({
            itemName : name,
            itemPrice : price
        })

    }

    console.log(cartItems.flat(), 'cart items')
    console.log(cartItemCount, 'cart item count')



    
    return(
        <View style={styles.mainItemView}>
            <FlatList
            data={itemList}
            keyExtractor={(_, index)=> index.toString()}
            renderItem={({item})=>(
                <View>
                    <Pressable onPress={()=>showCarts(item.name, item.price)}>
                <View style={styles.itemView}>
                    <Text style={styles.textStyle}>{item.name}</Text>
                    <Text style={styles.textStyle}>{String(item.price).length == 2 ? `${item.price}.00` : item.price}</Text>
                </View>
                    </Pressable>
                <Divider width={2}/>
                </View>
            )} />

            {showCartBtn 
            &&
            <CartItem 
                name={compItems.itemName} 
                price={compItems.itemPrice} 
                setShowCartBtn={setShowCartBtn}
                cartItemCount = {cartItemCount}
                setCartItemCount = {setCartItemCount}  
                cartItems={cartItems}
                setCartItems={setCartItems}
                />
            }
        </View>
    )
}


const styles = StyleSheet.create({
    mainItemView : {
        flex : 1,
        marginTop : 10
    },
    itemView : {
        display : "flex",
        flexDirection : "row",
        justifyContent : "space-between",
        paddingHorizontal : 15,
        marginVertical : 20
    },
    textStyle : {
        fontSize : 20,
        fontWeight : "bold"
    }
})