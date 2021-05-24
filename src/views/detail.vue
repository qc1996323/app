<template>
  <div>
    <v-header title="商品详情" :back="true"></v-header>
    <img :src="$pre+detail.img" alt />
    <div class="xx">
      <p>
        <strong class="price1">
          ￥
          <b>{{detail.price}}</b>
        </strong>
        <del>￥{{detail.market_price}}</del>
      </p>
      <div class="x1">{{detail.goodsname}}</div>
      <!-- <div class="x2" >{{detail.specsname}}: <span v-for="item in detail.specsattr" :key="item">{{item}}&nbsp;</span></div> -->
      <div class="x3" v-html="detail.description"></div>
    </div>
    <van-popup v-model="show" position="bottom" :style="{ height: '30%' }">
      <h2 class="x2">{{detail.specsname}}</h2>
      <div class="navs">
        <span
          v-for="(item,index) in detail.specsattr"
          :key="item"
          :class="index==n?'select':''"
          @click="n=index"
        >{{item}}</span>
      </div>
      <van-button type="primary" @click="add">加入购物车</van-button>
    </van-popup>
    <van-coupon-cell :coupons="coupons" :chosen-coupon="chosenCoupon" @click="showList = true" />
    <!-- 优惠券列表 -->
    <van-popup v-model="showList" round position="bottom" style="height: 90%; padding-top: 4px;">
      <van-coupon-list
        :coupons="coupons"
        :chosen-coupon="chosenCoupon"
        :disabled-coupons="disabledCoupons"
        @change="onChange"
        @exchange="onExchange"
      />
    </van-popup>
    <van-goods-action>
      <van-goods-action-icon icon="chat-o" text="客服" color="#ee0a24" />
      <van-goods-action-icon icon="cart-o" text="购物车" @click="toShop()" />
      <van-goods-action-icon icon="star" text="已收藏" color="#ff5000" />
      <van-goods-action-button type="warning" text="加入购物车" @click="show=true" />
      <van-goods-action-button type="danger" text="立即购买" />
    </van-goods-action>
  </div>
</template>

<script>
import { reqAddShop, reqDetail } from "../request/api";
import { alertMsg } from "../utils/alert";
const coupon = {
  available: 1,
  condition: "无使用门槛\n最多优惠1200元",
  reason: "过期无效",
  value: "60000",
  name: "优惠券名称",
  startAt: 1601104000,
  endAt: 1621592000,
  valueDesc: "600",
  unitDesc: "元",
};
export default {
  data() {
    return {
      // 1.初始化数据
      chosenCoupon: -1,
      coupons: [coupon],
      disabledCoupons: [coupon],
      detail: {},
      showList: false,
      show: false,
      n: 0,
    };
  },
  mounted() {
    // 2.请求数据
    reqDetail({ id: this.$route.query.id }).then((res) => {
      // 3.赋值
      this.detail = res.data.list[0];
      //specsattr  "白色，黑色"  --》【”白色“,"黑色"】
      this.detail.specsattr = this.detail.specsattr.split(",");
    });
  },
  methods: {
    //加入购物车
    add() {
      //加入购物车
      reqAddShop({
        uid: JSON.parse(localStorage.getItem("userInfo")).uid,
        goodsid: this.detail.id,
        num: 1,
      }).then((res) => {
        alertMsg(res.data.msg);
        this.show = false;
      });
    },
    onChange(index) {
      this.showList = false;
      this.chosenCoupon = index;
    },
    onExchange(_code) {
      this.coupons.push(coupon);
    },
    toShop() {
      this.$router.push("/index/shop");
    },
  },
};
</script>

<style scoped>
.van-button__text {
  border: none;
}
.select {
  border: 1px solid coral;
  color: coral;
}
.price1 {
  color: red;
  margin-left: 0.1rem;
}
b {
  font-size: 0.64rem;
  color: red;
  margin-right: 0.2rem;
}
img {
  width: 100%;
  margin-top: 1.2rem;
}
.x1 {
  margin-left: 0.2rem;
  color: black;
  font-size: 0.4rem;
}
del {
  color: #666;
  text-decoration: line-through;
}
</style>