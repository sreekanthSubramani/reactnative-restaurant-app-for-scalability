import { axiosApi } from "../../axios";

export const sendSubCategory = async (category)=>{
    try{
        const getTheSubCat = await axiosApi.get(`/rn/sendSubcategory/${category}`)
        return getTheSubCat.data
    }catch(e){
        console.log(e)
    }
}