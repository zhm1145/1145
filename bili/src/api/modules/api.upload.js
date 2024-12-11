import service from '../server'

export const uploadImg = (data) =>{
    return service.post('api/v1/uploadImage/uploadimg',data)
}
