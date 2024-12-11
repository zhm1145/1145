
import service from '../server'
//get my favorList
export const getMyFavor = (data)=>{
    return service.get(`api/v1/users/${data.user}/favorites/getMyFavor`,data)
}
//add new favorName,新增收藏夹
export const addMyFavorName = (data)=>{
    return service.post(`api/v1/users/${data.user}/favorites/`,data)
}

//add video to favorList（favoriteId，videoId）
export const addVideoToMyFavorName = (data)=>{
    return service.post(`api/v1/users/${data.user}/favorites/addFavoriteNameIntoList`,data)
}
