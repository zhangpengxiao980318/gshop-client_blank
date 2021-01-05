import {getUserTempId,setToken,getToken,removeToken} from '@/utils/userabout'
import {reqRegister,reqLogin,reqUserInfo,reqUserLogout} from '@/api'
const state = {
  userTempId : getUserTempId(),
  token:getToken(),
  userInfo:{}
}
const mutations = {
  RECEIVE_TOKEN(state,token){
    state.token = token
  },

  RECEIVE_USERINFO(state,userInfo){
    state.userInfo = userInfo
  },

  RESET_USERINFO(state){
    state.userInfo = {}
    state.token = ''
  }
}
const actions = {
  async getRegister({commit},userInfo){
    const result = await reqRegister(userInfo)
    if(result.code === 200){
      return 'ok'
    }else{
      return Promise.reject(new Error('failed'))
    }
  },

  async getLogin({commit},userInfo){
    const result = await reqLogin(userInfo)
    if(result.code === 200){
      commit('RECEIVE_TOKEN',result.data.token)
      setToken(result.data.token)
      return 'ok'
    }else{
      return Promise.reject(new Error('failed'))
    }
  },

  async getUserInfo({commit}){  
    const result = await reqUserInfo()
    if(result.code === 200){  
      commit('RECEIVE_USERINFO',result.data)
      return 'ok'
    }else{
      return Promise.reject(new Error('failed'))
    }
  },

  async resetUserInfo({commit}){
    removeToken()
    commit('RESET_USERINFO')
  },

  async getUserLogout({commit}){
    const result = await reqUserLogout()
    if(result.code === 200){
      removeToken()
      commit('RESET_USERINFO')
      return 'ok'
    }else{
      return Promise.reject(new Error('failed'))
    }
  }
}
const getters = {}
export default {
  state,
  mutations,
  actions,
  getters
}