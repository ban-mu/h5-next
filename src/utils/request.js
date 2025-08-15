import axios from 'axios';
import qs from 'qs';
import { config } from "@/config";
const baseurl = config.apiBaseUrl;

const Axios = axios.create({
  baseURL: baseurl, // 你的后端接口地址
});
// 添加请求拦截器
Axios.interceptors.request.use(
  function(config) {
    return config;
  },
  function(error) {
    return Promise.reject(error);
  }
)

Axios.interceptors.response.use(
  function(response) {
    console.log(response);
    return response;
  },
  function(error) {
    return Promise.reject(error);
  }
)

const request = (method, url, options, responseType = {}) => {
  const params = {};
  const option = { ...params, ...options }
  option.wtoken = localStorage.getItem('wtoken');
  if (method === 'get') {
    options = {
      params: option
    }
  } else {
    options = {
      data: qs.stringify(option)
    }
  }
  let config = {
    method,
    // url,
    ...options,
    ...responseType
  }
  if (method === 'post' && responseType.dataType === 'json') {
    config.headers = {
      'Content-Type': 'application/json',
      ...config.headers
    }
    
  } else if (method === 'post' && responseType.dataType === 'formdata') {
    config.headers = {
      'Content-Type': 'multipart/form-data',
      ...config.headers
    }
  } else if (method === 'post' && !responseType.dataType) {
    config.headers = {
      'Content-Type': 'application/x-www-form-urlencoded',
      ...config.headers
    }
  }
  return new Promise((resolve, reject) => {
    Axios(url, config)
      .then(result => {
        resolve(result.data);
      })
      .catch(err => {
        reject(err)
      })
  })
}

export default {
  get(url, config, responseType) {
    return request('get', url, config, responseType)
  },
  post(url, config, responseType) {
    return request('post', url, config, responseType)
  },
};


// axios.defaults.baseURL = config.apiBaseURL
// axios.defaults.withCredentials = false
// console.log(config.apiBaseUrl, 'request.js');
// export async function request(reqUrl, options = { method: 'GET', retrunChange: false }) {
//   const response = await axios(reqUrl, options)
//     // .then(checkStatus)
//     .catch(async error => {
//         throw error
//     })
//   if (get(response, 'status') == 200) {
//       if (options.retrunChange) {
//           return get(response, 'data')
//       } else {
//           if (get(response, 'data.code') == 0) {
//               return get(response, 'data.data')
//           } else {
//               console.log(get(response, 'data.msg'))
//               return false
//           }
//       }
//   } else {
//       return console.log(`${get(response, 'status')}:${get(response, 'statusText')}`)
//   }
// }
