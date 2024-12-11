import service from '../server'


//得到玩家自己的videos
export  const videoOwe=(data)=>{
    return service.get(`api/v1/users/${data.user}/videos/myVideo`,data)
}
//得到的是所有玩家的videos
export  const videoGetAllUser=(data)=>{
    return service.get(`api/v1/users/${data.user}/videos/`,data)
}
export  const createOneVideo=(data)=>{
    return service.post(`api/v1/users/${data.user}/videos/`,data)
}
export  const videoOneVideo=(data)=>{
    return service.get(`api/v1/users/${data.user}/videos/${data.id}`,data)
}
//发表视频评论
export  const vreateVideoReview=(data)=>{
    return service.post(`api/v1/users/${data.user}/videos/${data.video}/videoReviews`,data)
}
//发表视频弹幕
export  const vreateVideoDanmu=(data)=>{
    return service.post(`api/v1/users/${data.user}/videos/${data.video}/danmus`,data)
}

//获取首页的轮播图的所有信息

export  const getAllCarousel=(data)=>{
    return service.get(`api/v1/carousel`,data)
}
//视频播放量加1
export  const addPlayCount=(data)=>{
    return service.post(`api/v1/users/${data.user}/videos/${data.videoId}/addPlayCount`,data)
}
