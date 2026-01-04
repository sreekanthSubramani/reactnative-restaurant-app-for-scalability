import { createContext, useState } from "react";
import { Appearance } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";



export const ProviderContext = createContext(null)

export const ProviderContainer = ({children} : any)=>{
    const getColorScheme = Appearance.getColorScheme()
    const [theme, setTheme] = useState(getColorScheme === 'dark' ? "dark" : 'light')
    


    const helperMethodsForTheme = {
        
        setDarkMode : async ()=>{
            setTheme('dark')
            Appearance.setColorScheme('dark')
            await AsyncStorage.setItem('theme', JSON.stringify('dark'))
        },

        setLightMode : async ()=>{
            setTheme('light')
            Appearance.setColorScheme('light')
            await AsyncStorage.setItem('theme', JSON.stringify('light'))
        },

        getMode : async ()=>{
            const getDark = await AsyncStorage.getItem('theme')
            if(getDark){
                const parsedData = JSON.parse(getDark)
                return parsedData
            }

        }

    }




    return(
        <ProviderContext.Provider value={{helperMethodsForTheme, theme}}>
            {children}
        </ProviderContext.Provider>
    )
}
