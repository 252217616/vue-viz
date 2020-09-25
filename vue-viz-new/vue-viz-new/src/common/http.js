import axios from 'axios'; 
import { Message } from 'element-ui';
import qs from 'qs'
 
if (process.env.NODE_ENV == 'development') {    
    axios.defaults.baseURL = 'http://localhost:9080/console';} 
else if (process.env.NODE_ENV == 'debug') {    
    axios.defaults.baseURL = 'http://localhost:9080/console';
} 
else if (process.env.NODE_ENV == 'production') {    
    axios.defaults.baseURL = 'http://localhost:9080/console';
}

axios.defaults.timeout = 10000 //请求超时时间

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'//设置post请求头
axios.defaults.headers.post['X-Access-Token'] = 'f8b997704ef14590ae81e49de74cb830'//设置post请求头
// axios.interceptors.request.use(    
//     config => {        
//         // 每次发送请求之前判断vuex中是否存在token        
//         // 如果存在，则统一在http请求的header都加上token，这样后台根据token判断你的登录情况
//         // 即使本地存在token，也有可能token是过期的，所以在响应拦截器中要对返回状态进行判断 
//         const token = store.state.token;        
//         token && (config.headers.Authorization = token);        
//         return config;    
//     },    
//     error => {        
//         return Promise.error(error);    
// })

axios.interceptors.response.use(    
    response => {   
        // 如果返回的状态码为200，说明接口请求成功，可以正常拿到数据     
        // 否则的话抛出错误
        if (response.status === 200) {            
            return Promise.resolve(response);        
        } else {            
            return Promise.reject(response);        
        }    
    },    
    // 服务器状态码不是2开头的的情况
    // 这里可以跟你们的后台开发人员协商好统一的错误状态码    
    // 然后根据返回的状态码进行一些操作，例如登录过期提示，错误提示等等
    // 下面列举几个常见的操作，其他需求可自行扩展
    error => {            
        if (error.response.status) {            
            switch (error.response.status) {                
                // 401: 未登录
                // 未登录则跳转登录页面，并携带当前页面的路径
                // 在登录成功后返回当前页面，这一步需要在登录页操作。                
                case 401:                    
                    router.replace({                        
                        path: '/login',                        
                        query: { 
                            redirect: router.currentRoute.fullPath 
                        }
                    });
                    break;

                // 403 token过期
                // 登录过期对用户进行提示
                // 清除本地token和清空vuex中token对象
                // 跳转登录页面                
                case 403:
                    Message.error('登录过期，请重新登录');
                    // 清除token
                    localStorage.removeItem('token');
                    store.commit('loginSuccess', null);
                    // 跳转登录页面，并将要浏览的页面fullPath传过去，登录成功后跳转需要访问的页面 
                    setTimeout(() => {                        
                        router.replace({                            
                            path: '/login',                            
                            query: { 
                                redirect: router.currentRoute.fullPath 
                            }                        
                        });                    
                    }, 1000);                    
                    break; 

                // 404请求不存在
                case 404:
                    Message.error('请求连接不存在。');
                    break;
                // 其他错误，直接抛出错误提示
                default:
                    Toast({
                        message: error.response.data.message,
                        duration: 1500,
                        forbidClick: true
                    });
            }
            return Promise.reject(error.response);
        }
    }    
)

export function get(url, params){    
    return new Promise((resolve, reject) =>{        
        axios.get(url, {            
            params: params        
        }).then(res => {
            if(res.data.resultCode == "99999999"){
                Message.error(res.data.resultMessage);
            }
            resolve(res.data);
        }).catch(err =>{
            reject(err.data)        
    })    
});}

export function post(url, params) {
    return new Promise((resolve, reject) =>{        
        axios.post(url, qs.stringify(params)).then(res => {
            if(res.data.resultCode == "99999999"){
                throw new Error(res.data.resultMessage)
            }
            resolve(res.data);
        }).catch(err =>{
            reject(err.data)        
    })    
});}