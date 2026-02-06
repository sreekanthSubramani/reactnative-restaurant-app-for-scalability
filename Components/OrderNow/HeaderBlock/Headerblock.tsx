import {View, Text, StyleSheet, useWindowDimensions, ImageBackground} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import IconMaterial from 'react-native-vector-icons/MaterialIcons'
import { ButtonGroup } from '@rneui/themed';
import { useState } from 'react';


export default function Ordernow(){

    const {height, width} = useWindowDimensions()
    const [selectedIndex, setSelectedIndex] = useState(0)

    
    const headerImage = 'https://images.unsplash.com/photo-1710091691780-c7eb0dc50cf8?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW5kaWFuJTIwZGlzaGVzfGVufDB8fDB8fHww'
    
    const deliveryBtn = () =>{
        return(
            <View style={styles.delBtn}>
                <Icon 
                name='car-outline'
                size={30}/>
                <View style={styles.insideCovert}>
                <Text>Delivery</Text>
                <Text>45 Mins</Text>
                </View>
            </View>
        )
    }

        const collBtn = () =>{
        return(
            <View style={styles.delBtn}>
                <Icon 
                name='bag-handle-outline'
                size={30}/>
                <View>
                <Text>Collection</Text>
                <Text>25 Mins</Text>
                </View>
            </View>
        )
    }


    return(
        <View style={[styles.markBorder,{height : height / 2, width : width}]}>
            <View style={styles.overlapHere}>
            <ImageBackground
            src={headerImage}
            style={{height : height/4, width}} />

            <View style={[styles.iconOverlap,{right : 8}]}>
            <Icon
            name='search-sharp'
            size={20} 
            style={{color : "white"}}
            />
            </View>

            </View>

        {/* heading section */}

            <View>
                <View style={styles.headingTitle}>
                    <View>
                    <Text style={styles.taName}>Roti Food Bar</Text>
                    <Text>Indian, Briyani, Kebab</Text>
                    </View>
                    <View style={styles.headingTitle}>
                    <Icon 
                    name='star'
                    size={20}
                    color='gold' />
                    <Text>4.7(45)</Text>
                    </View>

                </View>

                    <View style={styles.locationInserter}>
                        <Icon
                        name='location-outline'
                        size={30} />
                        
                        <View style={styles.locationBlock}>
                        <Text>491, Linclon Rd, Peterborough, United Kingdom, PE1 2PB</Text>
                        </View>
                    </View>
            </View>

            <View>
                <ButtonGroup 
                buttons={[deliveryBtn(),collBtn()]}
                containerStyle={{
                    display : "flex",
                    flexDirection : "row",
                    height : 50,
                    borderRadius : 40,
                    marginTop : 10,
                    
                }}
                selectedIndex={selectedIndex}
                onPress={(value)=>setSelectedIndex(value)}
                selectedButtonStyle={{
                    backgroundColor : "gray",
                    margin : 3,
                    borderRadius : 30
                }}
                innerBorderStyle={{
                    width : 0
                }}
                />
            </View>

            <View style={styles.multiStyleOps}>
            <View>
                <View style={styles.sidesQuest}>
                    <IconMaterial
                    name='groups'
                    size={20} />

                </View>

            </View>
                <View style={styles.sidesQuest}>

                </View>
            </View>
            
        </View>
    )
}


const styles = StyleSheet.create({
    markBorder : {

    },
    overlapHere : {
        display : "flex",
    },
    iconOverlap : {
        position : 'absolute',
        color : "white",
        backgroundColor : "black",
        padding : 10,
        borderRadius : 30
    },
    headingTitle : {
        display : "flex",
        flexDirection : "row",
        justifyContent : "space-between",
        marginHorizontal : 5
    },
    taName : {
        fontSize : 20,
        fontWeight : "bold"
    },
    locationInserter : {
        display : 'flex',
        flexDirection : "row",
        marginTop : 10
    },
    locationBlock : {
        width : 300,
    },
    delBtn : {
        display : "flex",
        flexDirection : "row",
        gap : 10
    },
    insideCovert : {
        display : 'flex',
        flexDirection : "column",
        justifyContent : "center",
        alignItems : "center"
    },
    multiStyleOps : {
        display : "flex",
        flexDirection : "row",
        justifyContent : "space-between",
        marginHorizontal : 20
    },
    sidesQuest : {
        height : 40,
        width : 130,
        borderWidth : 1,
        borderRadius : 30,
        borderColor : "red"
    }
})