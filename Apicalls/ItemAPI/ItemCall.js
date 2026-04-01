import { axiosApi } from "../../axios";

export const showItemCall = async (finalId)=>{
    try{
        const getItems = await axiosApi.get(`/rn/sendItems/${finalId}`)
        return getItems?.data
    }catch(e){
        console.log(e)
    }
    
}   