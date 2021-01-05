import {reqTrade} from '@/api'
const state = {
    tradeInfo:{}
}
const mutations = {
    RECEIVE_TRADEINFO(state,tradeInfo){
        state.tradeInfo = tradeInfo
    }
}
const actions = {
    async getTradeInfo({commit}){
        const result = await reqTrade()
        if(result.code === 200){
            commit('RECEIVE_TRADEINFO',result.data)
        }
    }
}
const getters = {
    detailArrayList(state){
        return state.tradeInfo.detailArrayList || []
    },
    userAddressList(state){
        return state.tradeInfo.userAddressList || []
    }
}
export default {
    state,
    mutations,
    actions,
    getters
}