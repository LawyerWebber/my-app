import service from '../utils/request.js';

export function Login(data){
    return service.request({
        url:'/login/',
        method:'post',
        data
    })
}

export function CodeLogin(data){
    return service.request({
        url:'/getSms/',
        method:'post',
        data
    })
}