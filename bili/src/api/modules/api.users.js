import service from '../server'

export const userList = ()=>{
    return service.get('/api/v1/users')
}

export const userCreate = (data)=>{
    return service.post('/api/v1/users/signup',data)
}

export  const userLogin = (data) =>{
    return service.post('/api/v1/users/login',data)
}
export const usersFindOne = (data) =>{
    return service.get(`/api/v1/users/${data.id}`,data)
}