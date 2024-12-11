import service from '../server'

export const columnListMy = (data) => {
    return service.get(`/api/v1/users/${data.user}/columns/getMyColumn`, data);
}

export const columnCreate = (data)=>{
    return service.post(`/api/v1/users/${data.user}/columns`,data)
}//columnList({ user: 'someUser' })

export const columnsListAll = (data) =>{
    return service.get(`/api/v1/users/${data.user}/columns`,data)
}

export const columnsGetOne = (data) =>{
    return service.get(`/api/v1/users/${data.user}/columns/${data.id}`,data)
}

export  const deletecolumn=(data)=>{
    return service.delete(`api/v1/users/${data.user}/columns/${data.videoId}`,data)
}