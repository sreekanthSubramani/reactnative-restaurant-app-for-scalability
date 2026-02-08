
import {View, StyleSheet, Text, ScrollView, useWindowDimensions, Pressable} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import {useState} from 'react'

export default function Moreblock(){
    
        const {height, width} = useWindowDimensions()
        const [showExtra, setShowExtra] = useState(false)


        function handleExtrasHere(){
            setShowExtra((prev)=>!prev)
        }


    return(
        <ScrollView style={{flex : 1}} showsVerticalScrollIndicator={false}>
        <View style={{flex : 1}}>

            {/* Header content with profile picture */}
            <View style={[styles.headerDP, {height : height/9}]}>
                <View style={styles.insideHeaderProf}>
                    <Icon
                    name='person-circle'
                    size={60} 
                    color='gray'
                    />


                    <View style={styles.dispCol}>
                        <Text style={styles.allTxt}>Sreekanth Subramani</Text>
                        <Text style={styles.restTxt}>forplaystore.sree@gmail.com</Text>
                        <Text style={styles.restTxtBl}>Add Phone Number</Text>
                    </View>


                    <View>
                        <MaterialIcon
                        name='create'
                        color='blue'
                        size={30} />
                    </View>


                </View>

            </View>

            <View style={[{height : 'auto'}, styles.secondBlockMore]}>

            <View style={styles.iconProf}>
                <Icon
                name='person-circle-outline'
                size={30} />
                <Text style={{fontSize : 18, fontWeight : "500"}}>Profile</Text>
            </View>


            <View style={styles.iconProf}>
                <Icon
                name='reader-outline'
                size={30} />
                <Text style={{fontSize : 18, fontWeight : "500"}}>Reorder</Text>
            </View>
          


            <View style={styles.iconProf}>
                <Icon
                name='location-outline'
                size={30} />
                <Text style={{fontSize : 18, fontWeight : "500"}}>Address Book</Text>
            </View>


            <View style={styles.iconProf}>
                <MaterialIcon
                name='credit-card'
                size={30} />
                <Text style={{fontSize : 18, fontWeight : "500"}}>Saved Cards</Text>
            </View>



            <View style={styles.iconProf}>
                <Icon
                name='trophy-outline'
                size={30} />
                <Text style={{fontSize : 18, fontWeight : "500"}}>Loyalty Points</Text>
            </View>
            

            <View style={styles.iconProf}>
                <Icon
                name='notifications-outline'
                size={30} />
                <Text style={{fontSize : 18, fontWeight : "500"}}>Notifications</Text>
            </View>

            </View>


        {/* third block */}


                    <View style={[{height : 'auto'}, styles.secondBlockMore]}>

            <View style={styles.iconProf}>
                <Icon
                name='information-circle-outline'
                size={30} />
                <Text style={{fontSize : 18, fontWeight : "500"}}>About Us</Text>
            </View>


            <View style={styles.iconProf}>
                <Icon
                name='call-outline'
                size={30} />
                <Text style={{fontSize : 18, fontWeight : "500"}}>Support</Text>
            </View>
          


            <View style={styles.iconProf}>
                <Icon
                name='star-outline'
                size={30} />
                <Text style={{fontSize : 18, fontWeight : "500"}}>Rate App</Text>
            </View>


            <View style={styles.iconProf}>
                <Icon
                name='color-palette-outline'
                size={30} />
                <Text style={{fontSize : 18, fontWeight : "500"}}>Theme</Text>
            </View>

            </View>

        </View>

        <View style={[{height : 'auto'}, styles.secondBlockMore]}>  
            {!showExtra ?

             <Pressable onPress={handleExtrasHere}>  
            <View style={styles.iconProfChevrons}>
            <View style={styles.flexRow}>
            <Icon
            name='ellipsis-horizontal'
            size={30} />

            <Text style={{fontSize : 18, fontWeight : "500"}}>More</Text>
            </View>
            
            <Icon
            name='chevron-down-outline'
            size={20} />
            
            </View>
            </Pressable>

            :
            <>
            <Pressable onPress={handleExtrasHere}>  
            <View style={styles.iconProfChevrons}>
            <View style={styles.flexRow}>
            <Icon
            name='ellipsis-horizontal'
            size={30} />

            <Text style={{fontSize : 18, fontWeight : "500"}}>Less</Text>
            </View>
            
            <Icon
            name='chevron-up'
            size={20} />
            </View>
            </Pressable>

            <View style={styles.iconProf}>
            <Icon
            name='information-circle-outline'
            size={30} />

            <Text style={{fontSize : 18, fontWeight : "500"}}>Allergy Information</Text>
            </View>

            <View style={styles.iconProf}>
            <Icon
            name='file-tray'
            size={30} />

            <Text style={{fontSize : 18, fontWeight : "500"}}>Terms and Conditions</Text>
            </View>

            <View style={styles.iconProf}>
            <Icon
            name='file-tray-stacked'
            size={30} />

            <Text style={{fontSize : 18, fontWeight : "500"}}>Terms of Use</Text>
            </View>

            <View style={styles.iconProf}>
            <Icon
            name='file-tray-outline'
            size={30} />

            <Text style={{fontSize : 18, fontWeight : "500"}}>Privacy Policy</Text>
            </View>

            <View style={styles.iconProf}>
            <MaterialIcon
            name='logout'
            size={30} />

            <Text style={{fontSize : 18, fontWeight : "500"}}>Logout</Text>
            </View>
            </>
        
            }

           


           

            </View>



            </ScrollView>

    )
}


const styles = StyleSheet.create({
    headerDP : {
        marginHorizontal : 10,
        borderRadius : 10,
        marginTop : 10,
    },
    insideHeaderProf : {
        height : "100%",
        width : "100%",
        display : "flex",
        flexDirection : "row",
        justifyContent : "space-between",
        alignItems : "center",
        backgroundColor : "lightgray",
        borderRadius : 10,
        paddingHorizontal : 10
    },
    dispCol : {
        display : "flex",
        flexDirection : "column",
        width : "60%",
        gap : 2
    },
    allTxt : {
        fontSize : 18,
        fontWeight : "bold"
    },
    restTxt : {
        fontSize : 14,
        fontWeight : "light"
    },
    restTxtBl : {
        fontSize : 14,
        fontWeight : "light",
        color : 'blue'
    },
    secondBlockMore : {
        display : "flex",
        flexDirection : "column",
        gap : 8,
        marginTop : 20,
        backgroundColor : "lightgray",
        marginHorizontal : 10,
        borderRadius : 10,
        padding : 10
    },
    iconProf : {
        display : 'flex',
        flexDirection : "row",
        alignItems : "center",
        height : 40,
        marginLeft : 10,
        gap : 20
    },
    iconProfChevrons : {
        display : 'flex',
        flexDirection : "row",
        justifyContent : "space-between",
        alignItems : "center",
        height : 40,
        marginLeft : 10,
        gap : 20
    },
    flexRow : {
        display : "flex", 
        flexDirection : "row", 
        gap : 20
    }


})