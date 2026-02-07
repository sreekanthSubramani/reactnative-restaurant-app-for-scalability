import {View, StyleSheet, Text, Button, FlatList, Image} from 'react-native'

export default function RecomendedBlock(){

    const recommendedTest = [
        {
            name : "Peshawari Naan",
            price : "10.00",
            pic : "https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&w=3342&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },{
            name : "Tarka Daal",
            price : "6.00",
            pic : "https://plus.unsplash.com/premium_photo-1699293238624-819cfcfa1de3?q=80&w=2411&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },{
            name : "Lamb Chops",
            price : "12.00",
            pic : "https://images.unsplash.com/photo-1706265765961-dda67304a326?q=80&w=2444&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },{
            name : "Butter Chicken",
            price : "15.00",
            pic : 'https://images.unsplash.com/photo-1728910107534-e04e261768ae?q=80&w=1760&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },{
            name : "Chicken Kebab",
            price : "10.00",
            pic : 'https://images.unsplash.com/photo-1605908580297-f3e1c02e64ff?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        }
    ]

    return(
        <View style={styles.setBoundary}>
            <FlatList
            nestedScrollEnabled
            data={recommendedTest}
            keyExtractor={(it)=> it.name} 
            showsHorizontalScrollIndicator={false}
            horizontal
            pagingEnabled={false}
            decelerationRate="fast"
            renderItem={({item})=>{
                return(
                    <View style={styles.insideFlats}>
                        <Image  
                        source={{uri : item.pic}}
                        style={{
                            objectFit : "fill",
                            height : "70%",
                        }}
                        />
                        <Text style={styles.recomTexts}>{item.name}</Text>
                        <Text style={styles.recomTexts}>{item.price}</Text>
                    </View>
                )
            }}
       />
        
        </View>
    )
}


const styles = StyleSheet.create({
    setBoundary : {
        marginTop : 10,
        height : 150,
        width : "100%",
        overflow : "visible",
    },
    insideFlats : {
        display : "flex",
        flexDirection : "column",
        height : "100%",
        width : 180,
        marginHorizontal : 10,
        borderRadius : 20,
        overflow : "hidden"
    },
    recomTexts : {
        fontWeight : "bold"
    }

})