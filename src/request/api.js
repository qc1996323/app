import { get, post } from "./http"

//注册
export let reqRegister = user => post("/api/register",user)
//登录
export let reqLogin = user => post("/api/login", user)

//首页 分类导航  轮播图  
export let reqCate = params => get("/api/getcate",params)
export let reqBanner = params => get("/api/getbanner",params)
export let reqHomeGoods = params => get("/api/gethortgoods",params)

//获取列表
export let reqCateList = params => get("/api/getgoodlist",params)

//一个商品详情
export let reqDetail = params => get("/api/getgoodsinfo", params)

//加入购物车
export let reqAddShop = params => post("/api/cartadd", params)

//购物车列表
export let reqShopList = params => get("/api/cartlist", params)

//地址添加
export let reqAddressAdd = params => post("/api/addressadd", params)

//地址列表
export let reqAddressList = params => get('/api/addresslist', params)

//地址编辑
export let reqAdressEdit = params => post("/api/addressedit", params)

//订单生成
export let reqOrderAdd = params => post("/api/orderadd", params)

export let reqMemberlist = params => get('/api/memberlist', params)
export let reqMemberinfo = params => get('/api/memberinfo', params)