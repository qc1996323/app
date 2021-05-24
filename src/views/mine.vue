<template>
  <div>
    <div id="top2">
      <v-header title="会员中心"></v-header>
      <img src="../assets/img/mine1.jpg" alt class="i1" />
      <div class="d1">
        <p>{{getTel()}}</p>
        <p>完善资料让小U更懂你</p>
      </div>
      <div class="d2">
        <img src="../assets/img/mine2.jpg" alt class="i2" />
        <i>每日签到</i>
      </div>
    </div>
    <div id="header_box">
      <p>
        <i>12</i>
        <a href="#">我的收藏</a>
      </p>
      <p>
        <i>12</i>
        <a href="#">浏览记录</a>
      </p>
      <p>
        <i>
          <span>￥</span>0
        </i>
        <a href="#">我的红包</a>
      </p>
      <p>
        <i>12</i>
        <a href="#">优惠券</a>
      </p>
    </div>
    <div id="middle1">
      <h2>我的订单</h2>
      <i>全部订单<span class="iconfont">&#xe601;</span>
      </i>
      <ul class="middle12">
        <li><img src="../assets/img/mine3.jpg" alt /><p>待付款</P></li>
        <li><img src="../assets/img/mine4.jpg" alt /><p>待收货</P></li>
        <li><img src="../assets/img/mine5.jpg" alt /><p>评价</P></li>
        <li><img src="../assets/img/mine6.jpg" alt /><p>售后/退款</P></li>
      </ul>
    </div>
    <div id="middle2">
      <p>
        <img src="../assets/img/mine7.jpg" alt />地址管理
        <span class="iconfont" @click="toAddressList()">&#xe601;</span>
      </p>
      <p>
        <img src="../assets/img/mine8.jpg" alt />我的钱包
        <span class="iconfont">&#xe601;</span>
        <i>剩余200U币</i>
      </p>
      <p>
        <img src="../assets/img/mine9.jpg" alt />我的二维码
        <span class="iconfont">&#xe601;</span>
      </p>
      <p>
        <img src="../assets/img/mine10.jpg" alt />我的小伙伴
        <span class="iconfont">&#xe601;</span>
      </p>
      <p>
        <img src="../assets/img/mine11.jpg" alt />0元试用
        <span class="iconfont">&#xe601;</span>
      </p>
    </div>
  </div>
</template>

<script>
import { reqMemberlist,reqMemberinfo } from "../request/api";
export default {
  data() {
    return {
      tel: "15711111111",
      list:[]
    };
  },
   mounted() {
    reqMemberlist({
      // uid: JSON.parse(localStorage.getItem("userInfo")).uid,
    }).then((res) => {
      // 3.赋值
      this.list = res.data.list;
    });
    reqMemberinfo({
      uid: JSON.parse(localStorage.getItem("userInfo")).uid,
    }).then((res) => {
      // 3.赋值
      this.info = res.data.info;
    });
  },
  methods: {
    toAddressList() {
      this.$router.push("/AddressList");
    },
    getTel() {
      return this.tel.slice(0,3)+"****"+this.tel.slice(7);
    },
  },
};
</script>

<style scoped>
#top2 {
  background: #ff6344;
  height: 2rem;
  padding-top: 1rem;
}
#top2 .d1 {
  float: left;
  margin-left: 0.2rem;
}
#top2 .d1 p:nth-child(1) {
  font-size: 0.32rem;
  color: #fff;
  margin: 0.26rem 0;
}
#top2 .d1 p:nth-child(2) {
  font-size: 0.2rem;
  color: #fff;
  width: 2.2rem;
  height: 0.8rem;
  line-height: 0.4rem;
  text-align: center;
  border: 0.01rem solid #fff;
}
#top2 .i1 {
  width: 2rem;
  height: 2rem;
  float: left;
}
#top2 .d2 {
  float: right;
  height: 0.6rem;
  width: 1.6rem;
  border: 0.01rem solid #fff4f2;
  background: #ffd5cc;
  margin-top: 0.6rem;
  border-bottom-left-radius: 0.3rem;
  border-top-left-radius: 0.3rem;
}
#top2 .d2 .i2 {
  width: 0.4rem;
  height: 0.5rem;
  float: left;
  margin-top: 0.05rem;
  margin-left: 0.08rem;
}
#top2 .d2 i {
  font-size: 0.26rem;
  color: #ff6243;
  line-height: 0.6rem;
  font-style: normal;
  display: inline-block;
}
#header_box {
  height: 3rem;
  display: flex;
  background: #ff694e
}
#header_box p {
  width: 24%;
  text-align: center;
  display: flex;
  flex-direction: column;
}
#header_box p a {
  display: inline-block;
  color: #fff3f2;
  font-size: 0.26rem;
}
#header_box p i {
  font-size: 0.38rem;
  color: #fff;
  text-align: center;
  font-style: normal;
}
#header_box p i span {
  font-size: 0.12rem;
}
#middle1 {
  background: #fff;
  height: 2.5rem;
  top: 4.5rem;
  width: 94%;
  position: absolute;
  border-radius: 5px;
  padding: 0.2rem;
  box-sizing: border-box;
  margin-left: 0.2rem;
}
#middle1 h2 {
  float: left;
  font-size: 0.35rem;
}
#middle1 i {
  float: right;
  color: #ff6040;
  font-size: 0.26rem;
  font-style: normal;
}
#middle1 i .iconfont {
  display: inline-block;
  font-size: 0.26rem;
}
#middle1 .middle12 {
  margin-top: 0.8rem;
  display: flex;
  justify-content: space-around;
}
#middle1 .middle12 p {
  text-align: center;
  font-size: 0.26rem;
  color: #333;
}
#middle1 .middle12 img {
  width: 0.9rem;
  height: 0.8rem;
}
#middle2 {
  height: 4rem;
  background: #fff;
  margin-top: 1rem;
  padding: 0.3rem;
  box-sizing: padding-box;
}
#middle2 p {
  height: 0.8rem;
  line-height: 0.8rem;
  font-size: 0.3rem;
}
#middle2 img {
  float: left;
  width: 0.4rem;
  height: 0.4rem;
  margin-top: 0.2rem;
  margin-right: 0.03rem;
}
#middle2 p i {
  float: right;
  color: #666;
  font-weight: normal;
  font-style: normal;
}
#middle2 p .iconfont {
  float: right;
  font-weight: normal;
  font-size: 0.26rem;
}
</style>