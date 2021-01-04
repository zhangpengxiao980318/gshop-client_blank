import {reqAddOrUpdate,reqCartList,reqCheckCart,reqDeleteCart} from '@/api'
const state = {
    shopCartList : []
}

const mutations = {
    RECEIVE_CARTLIST(state,shopCartList){
        state.shopCartList = shopCartList
    }
}

const actions = {
    //添加(修改)到购物车
    async addOrUpdateCart({commit},{skuId,skuNum}){
        const result = await reqAddOrUpdate(skuId,skuNum)
        if(result.code === 200){
            return 'ok'
        }else{
            return Promise.reject(new Error('failed'))
        }
    },
    //获取购物车列表
    async getCartList({commit}){
        const result = await reqCartList()
        if(result.code === 200){
            commit('RECEIVE_CARTLIST',result.data)
        }
    },
    //获取商品选中状态(单个)
    async getCheckCart({commit},{skuId,isChecked}){
       const result = await reqCheckCart(skuId,isChecked)
       if(result.code === 200){
           return 'ok'
       }else{
           return Promise.reject(new Error('failed'))
       }
    },
    //获取商品选中状态(多个)
    async getCheckCartAll({commit,dispatch,state},isChecked){
        let promises = []
        state.shopCartList.forEach(item =>{
            if(item.isChecked === isChecked) return
            let promise = dispatch('getCheckCart',{skuId:item.skuId,isChecked})
            promises.push(promise)
        })
        return Promise.all(promises)
    },
    //删除单个商品
    async getDeleteCart({commit},skuId){
        const result = await reqDeleteCart(skuId)
        if(result.code === 200){
            return 'ok'
        }else{
            return Promise.reject(new Error('failed'))
        }
    },
    //删除选中的商品
    async getDeleteCartAll({commit,dispatch,state}){
        let promises = []
        state.shopCartList.forEach(item =>{
            if(!item.isChecked) return
            let promise = dispatch('getDeleteCart',item.skuId)
            promises.push(promise)
        })
        return Promise.all(promises)
    }
}

const getters = {}

export default{
    state,
    mutations,
    actions,
    getters
}