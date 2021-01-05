/* 
包含应用的所有接口的接口请求函数
  函数内部调用ajax函数发送请求
  函数返回的是promise对象
*/
import ajax from './ajax'
import mockAjax from './mockAjax'

/* 
首页三级分类
/api/product/getBaseCategoryList  GET
*/
export function reqCategoryList () {
  // return ajax.get('/product/getBaseCategoryList')
  // return ajax('/product/getBaseCategoryList') // 发不带参数的get请求
  return ajax({
    url: '/product/getBaseCategoryList',
    // method: 'get'
  })
}

/* 
获取首页广告轮播列表
/api/cms/banner  GET
*/
export const reqBannerList = () => mockAjax('/banners')


/* 
mock接口函数
*/
export const reqRecommends = () => mockAjax('/recommends')
export const reqFloors = () => mockAjax('/floors')

// reqFloors().then(result => {
//   console.log('result--', result)
// })

/* 
搜索分页列表
/api/list  POST

*/
export const reqSearch = (searchParams) => ajax.post('/list', searchParams) 

//详情页
export const reqSkuDetail = (skuId) =>{
  return ajax({
    url:`/item/${ skuId }`,
    method:'GET'
  })
}
//添加到购物车
export const reqAddOrUpdate = (skuId,skuNum) =>{
  return ajax({
    url:`/cart/addToCart/${ skuId }/${ skuNum }`,
    method:'POST'
  })
}
//获取购物车数据
export const reqCartList = () =>{
  return ajax({
    url:'/cart/cartList',
    method:'get'
  })
}
//切换商品选中状态

export const reqCheckCart = (skuID,isChecked) =>{
  return ajax({
    url:`/cart/checkCart/${skuID}/${isChecked}`,
    method:'get'
  })
}
//删除购物车商品
export const reqDeleteCart = (skuId) =>{
  return ajax({
    url:`/cart/deleteCart/${skuId}`,
    method:'delete'
  })
}
//注册用户
export const reqRegister = (userInfo) =>{
  return ajax({
    url:'/user/passport/register',
    method:'post',
    data:userInfo
  })
}
//登陆
export const reqLogin = (userInfo) =>{
  return ajax({
    url:'/user/passport/login',
    method:'post',
    data:userInfo
  })
}
//获取用户信息
export const reqUserInfo = () =>{
  return ajax({
    url:'/user/passport/auth/getUserInfo',
    method:'get'
  })
}

//退出登录
export const reqUserLogout = () => {
  return ajax({
    url:'/user/passport/logout',
    method:'get'
  })
}

//获取订单交易页信息
export const reqTrade = () =>{
  return ajax({
    url:'/order/auth/trade',
    method:'get'
  })
}