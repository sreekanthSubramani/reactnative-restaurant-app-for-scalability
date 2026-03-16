import {View, StyleSheet, Text, Image, FlatList,useWindowDimensions, Pressable} from 'react-native'
import { useQuery } from '@tanstack/react-query'
import { showAllCategory } from '../../../Apicalls/CategoryAPI/CategoryCall'
import Ordernow from '../HeaderBlock/Headerblock'



export default function CategoryGrids(){

    const showCategory = useQuery({
            queryKey : ['categoryList'],
            queryFn : showAllCategory
    })


    const {height, width} = useWindowDimensions()

    return(
        <View style={{ width : width}}>
            <View>
                <FlatList 
                data={showCategory?.data}
                renderItem={({item} : any)=>(
                    <Pressable onPress={()=> console.log(item?.categoryNames)}>
                        <View style={styles.insideCol}>
                            <Image
                            source={{uri : item?.images}}
                            style={[styles.flatImage, {height : height/6}]} />
                            <Text style={styles.textAligners}>{item?.categoryName}</Text>
                        </View>
                    </Pressable>
                )}
                keyExtractor={(item)=> item._id}
                numColumns={2}
                ListHeaderComponent={()=>(
                <View style={{ width: "100%"}}>
                    <Ordernow />
                </View>
                )}
                />
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    insideCol : {
        display : "flex",
        width : 200,
        borderColor : "red",
        gap : 10,
        marginVertical : 10,
        justifyContent : 'center',
        marginTop : 20
    },
    textAligners : {
        textAlign : "center",
        fontSize : 16,
        fontWeight : "bold"
    },
    flatImage : {
        width : 'auto',
        objectFit : 'fill',
        borderTopLeftRadius : 20,
        borderTopRightRadius : 20,
        marginHorizontal : 20,
    }

})