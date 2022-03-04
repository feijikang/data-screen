import axios from 'axios';
import QS from 'qs'; //对post请求做系列化  
import store from '../store/index' //引入vuex  判断token之类的全局标量 
import { devBaseURL,deBaseURL,proBaseURL } from './config.js' //引入公共baseURL  


// post请求头
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
// 获取数据请求提交
export function request(config) {
  const instance = new axios.create({
    baseURL:'',
    timeout:5000,
  });

  // 请求拦截器
  instance.interceptors.request.use(config => {
    //拦截后需要将拦截下来的请求数据返回发送
    return config;
  }, err => {

  })

  // 相应拦截器
  instance.interceptors.response.use(config => {
    // 拦截后需要将拦截下来处理成的结果返回
    return config
  }, err => {
    console.log(err)
  })

  return instance(config)
}


