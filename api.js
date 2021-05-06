const axios = require('axios');
const commandNames = require('./commandNames');

const yotaApi = axios.create({
  baseURL: 'http://status.yota.ru/devcontrol',
  method: 'get',
  params: {
    callback: 'const extract = (text) => {return text}; extract' //HACK for converting JSONP
  },
});


yotaApi.interceptors.response.use(
  response => {
    return eval(response.data)
  },
  async error => {
    const originalRequest = error.config
    if (error.code === 'ECONNABORTED' || error.code === 'ENOTFOUND') {
      console.warning('http://status.yota.ru not found. Trying to get http://10.0.0.1')
      originalRequest._retry = true
      originalRequest.baseURL = 'http://10.0.0.1/devcontrol'
      return yotaApi(originalRequest)
    }

    return Promise.reject(error)
  },
)


const call = commandName => {
  if (commandNames.includes(commandName)) {
    return yotaApi.request({
      params: {
        command: 'getGeneralInfo'
      },
    }).catch(err => {
      console.error(err)
    })
  } else {
    console.error('This command is not available')
    return false
  }
}

module.exports = call;