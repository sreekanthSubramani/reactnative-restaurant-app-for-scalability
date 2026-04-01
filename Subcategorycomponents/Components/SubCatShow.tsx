import { useContext, useState } from 'react'
import {View, Text, StyleSheet, FlatList, Pressable} from 'react-native'
import { ProviderContext } from '../../Context/contextHook'
import { Divider } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native'; 
import { showItemCall } from '../../Apicalls/ItemAPI/ItemCall';


export default function SubcategoryLister(){

    const {subCats, setItemList} = useContext(ProviderContext)
    const navigate = useNavigation()
    const [showItems, setShowItems] = useState([])

    async function navigateToItem(item : string, id : any){ 
        
        navigate.navigate('Item',{
            item : item, 
        })

        const finalId = typeof id === 'object' ? id.$oid || id._id : id

        try{
            const itemList = await showItemCall(finalId)
            setItemList(itemList?.msg)

        }catch(e){
            console.log(e, 'error from here')
        }   
    }

    console.log(showItems, ' show items ')



    return(
        <View style={styles.viewSubCat}>

                <FlatList
                data={subCats}
                keyExtractor={(item, index)=> index.toString()}
                renderItem={({item})=>(
                    <Pressable onPress={()=>navigateToItem(item.subCategory,item._id)}>
                    <View style={styles.indivSubs}>
                        <Text style={{fontSize : 20, marginLeft : 10}}>{item?.subCategory}</Text>
                        <Divider width={3}/>
                    </View>
                    </Pressable>
                )} />


        </View>
    )
}

const styles = StyleSheet.create({
    viewSubCat : {
        flex : 1,
        marginTop : 10
    },
    indivSubs : {
        display : 'flex',
        flexDirection : "column",
        justifyContent : "center",
        marginTop : 10,
        gap : 10,
    }
})