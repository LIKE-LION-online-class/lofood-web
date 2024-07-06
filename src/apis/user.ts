import instance from '../utils/axios'
export const updateUserHttp = (data) => {
    return instance.post('/user/update', data)
}
export const getUserByIdHttp = ({ queryKey }) => {
    return instance.get(`/user/findById/${queryKey[1]}`)
}
export const updatePasswordUserHttp = (data) => {
    return instance.post('/user/updatePassword', data)
}
