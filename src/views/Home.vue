<template>
  <div>
    <!-- 顶部 -->
    <div id="page">
      <div id="top_box">
        <v-header title="小U商城"></v-header>
      </div>
      <!-- 头部和导航 -->
      <div id="header_box">
        <header>
          <span class="iconfont site">&#xe613;</span>
          <h1>
            <img src="../assets/img/logo1.png" alt />
          </h1>
          <input type="text" class="iconfont" placeholder="请输入关键字" />
          <span class="iconfont store">&#xe663;</span>
        </header>
        <div class="nav_box">
          <div>
            <span
              class="nav"
              v-for="item in navArr"
              :key="item.id"
              @click="toList(item.id)"
            >{{item.catename}}</span>
            <span class="iconfont">&#xe611;</span>分类
          </div>
        </div>
      </div>
    </div>
    <!-- banner -->
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="item in banner" :key="item.id">
        <img :src="$pre+item.img" alt />
      </van-swipe-item>
    </van-swipe>

    <!-- 功能区 -->
    <div id="macro">
      <ul>
        <li>
          <img src="../assets/img/icon_1.jpg" alt />
          <p>限时秒杀</p>
        </li>
        <li>
          <img src="../assets/img/icon_2.jpg" alt />
          <p>畅销商品</p>
        </li>
        <li>
          <img src="../assets/img/icon_3.jpg" alt />
          <p>品质大牌</p>
        </li>
        <li>
          <img src="../assets/img/icon_4.jpg" alt />
          <p>小U自营</p>
        </li>
        <li>
          <img src="../assets/img/icon_5.jpg" alt />
          <p>积分商城</p>
        </li>
      </ul>
    </div>
    <!-- 限时秒杀 -->
    <div id="shop">
      <div class="shop_left">
        <h2>限时秒杀</h2>
        <a href="#">
          查看更多
          <span class="iconfont">&#xe601;</span>
        </a>
        <p class="txt2">每天0点场，好货秒不停</p>
        <p class="txt3">
          <van-count-down :time="time">
            <template #default="timeData">
              <span class="block">{{ timeData.hours }}</span>
              <i class="colon">:</i>
              <span class="block">{{ timeData.minutes }}</span>
              <i class="colon">:</i>
              <span class="block">{{ timeData.seconds }}</span>
            </template>
          </van-count-down>
        </p>
      </div>
      <div class="shop_right">
        <div class="shop_top1">
          <h2>品牌上新</h2>
          <p class="txt2">9点整，抢大牌</p>
          <img src="../assets/img/mark_1.jpg" alt />
        </div>
        <div class="shop_bottom1">
          <h2>日用好物</h2>
          <p class="txt2">愿君多采撷</p>
          <img src="../assets/img/mark_2.jpg" alt />
        </div>
      </div>
    </div>
    <!-- 抢购 -->
    <van-tabs id="buy">
      <van-tab title="双十一尖货预购" class="buy_top1">
        <ul>
          <li>
            <img src="../assets/img/shop_bg1.png" alt />
          </li>
          <li>
            <img src="../assets/img/shop_bg1.png" alt />
          </li>
          <li>
            <img src="../assets/img/shop_bg1.png" alt />
          </li>
          <li>
            <img src="../assets/img/shop_bg1.png" alt />
          </li>
        </ul>
      </van-tab>
      <van-tab title="畅购全球" class="buy_top1">
        <ul>
          <li>
            <img src="../assets/img/shop.jpg" alt />
          </li>
          <li>
            <img src="../assets/img/shop.jpg" alt />
          </li>
          <li>
            <img src="../assets/img/shop.jpg" alt />
          </li>
          <li>
            <img src="../assets/img/shop.jpg" alt />
          </li>
        </ul>
      </van-tab>
    </van-tabs>

    <div class="navs">
      <!-- 5.遍历数据 -->
      <!-- 6.动态类名 -->
      <!-- 7.绑定事件修改n  -->
      <span
        v-for="(item,index) in navs"
        :key="item"
        :class="index==n?'select':''"
        @click="n=index"
      >{{item}}</span>
    </div>
    <div v-if="list.length>0">
      <!-- 8.遍历list[n].content  -->
      <div v-for="item in list[n].content" :key="item.id" class="hortgoods">
        <img :src="$pre+item.img" alt />
        <ul>
          <li>{{item.goodsname}}</li>
          <li>
            <span>现价格：￥{{item.price}}</span>
          </li>
          <li>
            <del>原价格：￥{{item.market_price}}</del>
          </li>
          <li class="shoaw">立即抢购</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { reqBanner, reqCate, reqHomeGoods } from "../request/api";
import { Toast } from "vant";
export default {
  data() {
    return {
      time: 30 * 60 * 60 * 1000,
      // 1.初始化
      navArr: [], //快速导航
      banner: [], //轮播图
      navs: ["热门推荐", "上新推荐", "所有商品"],
      n: 0,
      list: [],
    };
  },
  mounted() {
    //2.获取快速导航
    reqCate().then((res) => {
      this.navArr = res.data.list;
       console.log(res);
    });
    //获取轮播图
    reqBanner().then((res) => {
      this.banner = res.data.list;
      console.log(res);
    });
    reqHomeGoods().then((res) => {
      // 3.赋值
      this.list = res.data.list;
    });
  },
  methods: {
    toList(id) {
      this.$router.push("/list?id=" + id);
    },
    onClick() {
      Toast();
    },
  },
};
</script>

<style scoped>
body{
  width: 100%;
  box-sizing: border-box;
}
#page {
  padding-top: 1rem;
  background: #ff6040;
}

#page #header_box header {
  height: 0.64rem;
  display: flex;
  align-items: center;
}
#page #header_box header .site {
  font-size: 0.44rem;
  color: #fff;
  margin-left: 0.26rem;
}
#page #header_box header img {
  height: 0.48rem;
  margin: 0 0.4rem 0 0.25rem;
}
#page #header_box header input {
  width: 3.4rem;
  height: 0.64rem;
  border: 0.02rem solid #e6e6e6;
  box-sizing: border-box;
  border-radius: 0.1rem;
  padding-left: 0.22rem;
}
#page #header_box header input::placeholder {
  font-size: 0.26rem;
  color: #999;
}
#page #header_box header .store {
  font-size: 0.4rem;
  color: #fff;
  /* margin-left: 0.16rem; */
}
#page #header_box .nav_box {
  margin-top: 0.16rem;
  height: 1rem;
  display: flex;
}
#page #header_box .nav_box .nav {
  width: 6.2rem;
  background: url(../assets/img/line.jpg) no-repeat right top;
  padding: 0 0.17rem 0 0.21rem;
  height: 1.2rem;
}
#page #header_box .nav_box .nav i {
  width: 0.4rem;
  height: 0.04rem;
  background: #fff;
  position: absolute;
  bottom: 0;
  left: 0.1rem;
}
#page #header_box .nav_box .nav a {
  height: 0.6rem;
  line-height: 0.6rem;
  color: #fff3f2;
  font-size: 0.26rem;
}
#page #header_box .nav_box .nav a.cur {
  font-size: 0.3rem;
  position: relative;
}
#page #header_box .nav_box p {
  width: 1rem;
  text-align: center;
  line-height: 0.6rem;
  font-size: 0.26rem;
  color: #fff3f2;
}
#page #header_box .nav_box p span {
  font-size: 0.26rem;
}
/*banner*/
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
  height: 4rem;
   width: 100%;
}
.my-swipe .van-swipe-item img {
  width: 100%;
  height: 4rem;
}
/*功能区*/
#macro {
  background: #fff;
  overflow: hidden;
  height: 1.66rem;
}
#macro ul {
  display: flex;
  justify-content: space-between;
  height: 1.66rem;
  padding: 0 0.37rem 0 0.34rem;
}
#macro ul li {
  margin-top: 0.3rem;
  font-size: 0.18rem;
  color: #474747;
  display: flex;
  flex-direction: column;
  align-items: center;
}
#macro ul li img {
  width: 0.56rem;
  margin-bottom: 0.12rem;
}
/* 商品区*/
#shop {
  margin: 0.2rem;
  height: 3.5rem;
  display: flex;
  justify-content: space-between;
}
#shop .shop_left {
  width: 3.5rem;
  height: 3.5rem;
  background: url(../assets/img/shop_bg1.png);
  background-size: 100% 100%;
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  justify-content: space-between;
  margin-right: 0.1rem;
}
#shop .shop_left h2 {
  margin: 0.2rem 0 0.2rem 0.22rem;
  font-size: 0.28rem;
  color: #9db667;
  font-weight: bold;
}
#shop .shop_left a {
  margin: 0.2rem 0.29rem 0 0;
  color: #414140;
  font-size: 0.18rem;
}
#shop .shop_left a span {
  color: #676864;
  font-size: 0.18rem;
}
#shop .shop_left .txt2 {
  width: 3.27rem;
  margin-left: 0.21rem;
  color: #b4cd7e;
  font-size: 0.18rem;
}
#shop .shop_left .txt3 {
  display: flex;
  margin: 0.1rem 0 0 0.2rem;
}
#shop .shop_left .txt3 span {
  width: 0.32rem;
  height: 0.36rem;
  text-align: center;
  line-height: 0.36rem;
  background: #90b051;
  font-size: 0.2rem;
  color: #fff;
  font-weight: bold;
}
#shop .shop_left .txt3 i {
  margin: 0 0.04rem;
  color: #90b051;
  font-size: 0.04rem;
}
#shop .shop_right {
  width: 3.5rem;
  height: 3.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
#shop .shop_right .shop_top1 {
  width: 3.3rem;
  height: 1.7rem;
  background: url(../assets/img/shop_bg2.png);
  background-size: 100% 100%;
}
#shop .shop_right .shop_top1 h2 {
  margin: 0.2rem 0 0.16rem 0.22rem;
  font-size: 0.28rem;
  color: #ff6040;
  font-weight: bold;
}
#shop .shop_right .shop_top1 .txt2 {
  margin: 0.16rem 0 0.05rem 0.22rem;
  font-size: 0.2rem;
  color: #ffa592;
}
#shop .shop_right .shop_top1 img {
  width: 1.2rem;
  margin-left: 0.22rem;
}
#shop .shop_right .shop_bottom1 {
  width: 3.3rem;
  height: 1.7rem;
  background: url(../assets/img/shop_bg3.png);
  background-size: 100% 100%;
}
#shop .shop_right .shop_bottom1 h2 {
  margin: 0.2rem 0 0.16rem 0.22rem;
  font-size: 0.28rem;
  color: #af40ff;
  font-weight: bold;
}
#shop .shop_right .shop_bottom1 .txt2 {
  margin: 0.16rem 0 0.05rem 0.22rem;
  font-size: 0.2rem;
  color: #d59cff;
}
#shop .shop_right .shop_bottom1 img {
  width: 1.2rem;
  margin-left: 0.22rem;
}
/*抢购*/
#buy {
  margin: 0 auto;
  background: #fff;
  margin-bottom: 1.62rem;
}
#buy .buy_top1 {
  height: 0.64rem;
  display: flex;
  align-items: center;
  background: url(../assets/img/guag.png) no-repeat center top;
}
#buy .buy_top1 h2 {
  font-size: 0.3rem;
  color: #ff6040;
  margin-left: 0.94rem;
  font-weight: bold;
}
#buy .buy_top1 p {
  font-size: 0.26rem;
  color: #999;
  margin-left: 2.07rem;
}
#buy ul {
  display: flex;
}
#buy ul li {
  width: 1.6rem;
  margin-left: 0.1rem;
  position: relative;
  bottom: -0.8rem;
}
#buy ul li:nth-child(1) {
  margin-left: 0.2rem;
}
#buy ul li:nth-child(4) {
  margin-right: 0.2rem;
}
#buy ul li img {
  width: 1.6rem;
}
.hortgoods img {
  width: 30%;
  /* float: left; */
  /* height: 1.2rem; */
}

.navs {
  text-align: center;
  margin: 0 auto;
}

.navs span {
  margin: 0 0.38rem;
}

.hortgoods {
  padding: 0.2rem;
  display: flex;
  margin: 0.2rem;
  border: 1px solid #ccc;
  height: 1.6rem;
}
.hortgoods span {
  color: red;
}
.hortgoods del {
  color: rgb(78, 71, 71);
  text-decoration: line-through;
}

.hortgoods .shoaw{
  background: orange;
  width: 1.4rem;
  color: #fff;
  text-align: center;
  border-radius: 0.05rem;
}

.select {
  background: red;
  color: #fff;
}
</style>