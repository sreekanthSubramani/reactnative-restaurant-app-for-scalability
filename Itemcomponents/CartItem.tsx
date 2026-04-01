
import {View, StyleSheet, useWindowDimensions, Text, Pressable} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native'


export default function CartItem({name,price,setShowCartBtn,cartItemCount,setCartItemCount,cartItems,setCartItems}){

    const {height, width} = useWindowDimensions()
    const navigation = useNavigation()

    function clickCartList(){
        console.log('click click click')
        navigation.navigate('Cart')
        setCartItems((prev)=>[{...prev,
            name : name,
            price : price,
            qty : cartItemCount
        }])
    }
    

    console.log(cartItems, 'cart items')

    return(

    <View>

        <View style={[styles.topContainer, {height : height / 20}]}>
        <View style={[styles.insideTopContainer, {height : height/20, width : width}]}>
        
        <View style={styles.borderNumberCount}>
        <Text style={styles.countBox}>2</Text>
        </View>

        <Text style={styles.itemNameProp}>{name}</Text>

        <Icon
        name='close-circle'
        size={20} 
        color="white"
        onPress={()=>{setShowCartBtn(false)}}
        />
        
        
        </View>
        </View>




        <View style={[styles.mainBox, {width : width/1.1, height : height / 9}]}>
        
        <View style={styles.adderRemover}>
        <Icon
        name='remove-circle' 
        size={50}
        color='red'
        onPress={()=>setCartItemCount(--cartItemCount)}
        />
        <Text style={{fontSize : 40, fontWeight : "bold"}}>
            {cartItemCount < 0 ? 
                setCartItemCount(0):
                cartItemCount
            }
        </Text>
        <Icon
        name='add-circle' 
        size={50}
        color='red'
        onPress={()=>setCartItemCount(++cartItemCount)}
        />
        </View>

        <View style={styles.addCartWithPrice}>
            <Pressable onPress={()=>clickCartList()}>
            <Text style={styles.fontStyler}>Add</Text>
            </Pressable>
        </View>
        
        </View>
    </View>

    )
}


const styles = StyleSheet.create({

    mainBoxContainer : {
        display : "flex",
        flexDirection : "column",
        backgroundColor : "red",
        justifyContent : "center",
        alignItems : "center",
    },

    mainBox : {
        display : 'flex',
        alignItems : "center",
        justifyContent : "space-between",
        flexDirection : "row",
        backgroundColor : "white",
        marginHorizontal : 10,
        marginBottom : 20,
        borderRadius : 20,
        zIndex : 10,
        marginLeft : 16,
        borderColor : "rgba(255,255,255,0.3)",
        borderWidth : 2,
    },
    adderRemover : {
        display : "flex",
        flexDirection : "row",
        gap : 5,
        justifyContent : "center",
        alignItems : "center"
    },
    addCartWithPrice : {
        marginRight : 10,
        height : '70%',
        width : "55%",
        backgroundColor : 'red',
        borderRadius : 20,  
        display : "flex",
        justifyContent : "center",
        alignItems : 'center',
    },
    fontStyler : {
        fontSize : 20, 
        color : 'white', 
        fontWeight : "bold",   
    },
    topContainer : {
        display : "flex", 
        backgroundColor : 'red',
        justifyContent : "space-around", 
        flexDirection : "row", 
        alignItems : "center", 
        paddingHorizontal : 10, 
        borderTopLeftRadius : 20,
        borderTopRightRadius : 20
    },
    insideTopContainer : {
        display : "flex", 
        backgroundColor : 'red',
        justifyContent : "space-between", 
        flexDirection : "row", 
        alignItems : "center", 
        paddingHorizontal : 10, 
        borderTopLeftRadius : 20, 
        borderTopRightRadius : 20,
    },
    borderNumberCount : {
        backgroundColor : "white", 
        width : 50, 
        justifyContent : "center", 
        alignItems : 'center', 
        borderTopLeftRadius : 10, 
        borderTopRightRadius : 10
    },
    countBox : {
        fontSize : 30, 
        fontWeight : "bold", 
        color : "red"
    },
    itemNameProp : {
        color : "white", 
        fontWeight : "bold", 
        fontSize : 20
    }
})