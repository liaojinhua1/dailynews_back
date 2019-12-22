// 引入
import axios from '../utils/myaxios.js'

// 1.实现登录验证
export const userLogin = (data) => {
  // axios({})返回是一个promise对象
  return axios({
    method: 'post',
    url: '/login',
    data
  })
}
