import { createNativeStackNavigator } from '@react-navigation/native-stack'
import {View, Text, StyleSheet} from 'react-native'
import SubcategoryLister from './Components/SubCatShow'
import CategoryGrids from '../Components/OrderNow/CategoryGrid/CategoryGrid'
import ItemComponent from '../Itemcomponents/Itemcomponent'
import CartItem from '../Itemcomponents/CartItem'
import CartComponent from '../Components/Cart/CartItems'


export default function ShowSubCat(){

    const StackNavigator = createNativeStackNavigator()

    return(
        <StackNavigator.Navigator>
                <StackNavigator.Screen name='Categorygrid' component={CategoryGrids} options={{ headerShown : false}} />
                <StackNavigator.Screen name='Cart' component={CartComponent} />
                <StackNavigator.Screen name='SubCategory' component={SubcategoryLister} options={({route})=>({
                    title : route.params?.categoryName
                })} />
                <StackNavigator.Screen name='Item' component={ItemComponent} options={({route})=> ({
                    title : route.params?.item
                })} />
        </StackNavigator.Navigator>
    )
}

const styles = StyleSheet.create({

})