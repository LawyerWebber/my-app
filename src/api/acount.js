import service from '../utils/request.js';

export function Login(data){
    service.request({
        url:'/login/',
        method:'post',
        data
    })
}