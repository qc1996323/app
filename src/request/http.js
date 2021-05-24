// 封装拦截器
// 封装get post

// 1.引入模块
import axios from "axios"
import qs from "qs"
import Vue from "vue"
import router from "../router"
import { alertMsg } from "../utils/alert"

// 2.根据环境配置$pre
//开发环境 8080
if (process.env.NODE_ENV == "development") {
    Vue.prototype.$pre = "http://localhost:3000"
}
//生产环境 3000
if (process.env.NODE_ENV == "production") {
    Vue.prototype.$pre = ""
}

// 3.请求拦截 携带token
axios.interceptors.request.use(config => {
    let userInfo = localStorage.getItem("userInfo");
    //如果有token,就加；如果没有，就不加
    userInfo && (config.headers.authorization = JSON.parse(userInfo).token)

    return config;
})

// 4.响应拦截
axios.interceptors.response.use(res => {
    //打印
    console.log("请求地址：" + res.config.url)
    console.log(res);

    //失败弹信息
    if (res.data.code !== 200) {
        alertMsg(res.data.msg)
    }
    //掉线处理
    if (res.data.msg == "登录已过期或访问权限受限") {
        router.replace("/login")
    }
    return res;
})

// 5. get
/**  
 * url:请求路径 eg:"/api/login"
 * params:请求参数 eg:{phone:"",password:""}
*/
/** 调用演示
 get("/api/login",{phone:"",password:""}).then(d=>{
    
})
 */
export let get = (url, params = {}) => {
    return new Promise((resolve, reject) => {
        axios.get(url, { params }).then(res => {
            resolve(res)
        })
    })
}

// 6.post 
/**
 * url:请求路径 eg:"/api/login"
 * params:参数 eg:{phone:"",password:""}
 * isFile:是否是文件 eg:是：true ；不是就不传
*/

export let post = (url, params, isFile = false) => {
    let data = null;
    // 如果是文件，转FormData ；不是，就qs.stringify()
    if (isFile) {
        data = new FormData()
        for (let i in params) {
            data.append(i, params[i])
        }
    } else {
        data = qs.stringify(params)
    }
    //返回
    return new Promise((resolve, reject) => {
        axios.post(url, data).then(res => {
            resolve(res)
        })
    })

}
