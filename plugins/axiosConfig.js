import axios from 'axios'

require('promise.prototype.finally').shim()

export default ({app, store, redirect}) => {
  const config = {

    // `method` is the request method to be used when making the request
    method: 'get', // default

    // `baseURL` will be prepended to `url` unless `url` is absolute.
    // It can be convenient to set `baseURL` for an instance of axios to pass relative URLs
    // to methods of that instance.
    baseURL: process.env.baseUrl,

    // `timeout` specifies the number of milliseconds before the request times out.
    // If the request takes longer than `timeout`, the request will be aborted.
    timeout: 0,

    // `withCredentials` indicates whether or not cross-site Access-Control requests
    // should be made using credentials
    withCredentials: false, // default

    // `responseType` indicates the type of data that the server will respond with
    // options are 'arraybuffer', 'blob', 'document', 'json', 'text'
    responseType: 'json', // default
    // `progress` allows handling of progress events for 'POST' and 'PUT uploads'
    // as well as 'GET' downloads
    progress: function (progressEvent) {
      // Do whatever you want with the native progress event
    }
  }

  for (let p in config) {
    axios.defaults[p] = config[p]
  }

  // 添加一个请求拦截器
  axios.interceptors.request.use(function (config) {
    // Do something before request is sent
    config.headers.Accept = 'application/json'
    config.headers.Authorization = 'token'
    return config
  }, function (error) {
    // Do something with request error
    return Promise.reject(error)
  })

  // 添加一个响应拦截器
  axios.interceptors.response.use(function (response) {
    // Do something with response data
    return response
  }, function (error) {
    // Do something with response error
    return Promise.reject(error)
  })
}
