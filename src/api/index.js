import base from './base'
import axios from '../plugins/request'



const api = {
  // 登录接口
  login (params) {
    return axios.post(base.baseUrl + base.login, params)
  },
  // 商品管理
  goodsList (params) {
    return axios.get(base.baseUrl + base.goodsList, { params })
  },
  // 搜索框
  search (params) {
    return axios.get(base.baseUrl + base.search, {
      params
    })
  },
  // 删除商品
  delete (params) {
    return axios.get(base.baseUrl + base.delete, { params })
  },
  // 修改商品信息
  update (params) {
    return axios.get(base.baseUrl + base.update, { params })
  },
  // 添加商品信息
  insert (params) {
    return axios.get(base.baseUrl + base.insert, { params })
  },
  selectItemCategory (params) {
    return axios.get(base.baseUrl + base.selectItemCategory, { params })
  }
}

export default api