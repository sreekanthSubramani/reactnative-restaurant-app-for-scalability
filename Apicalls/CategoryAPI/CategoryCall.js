import { axiosApi } from "../../axios"

export const showAllCategory = async (req, res) =>{
    try{
        const showCategory = await axiosApi.get('/rn/sendcategory')
        return showCategory.data.msg
    }catch(e){
        console.log(e)
    }
}