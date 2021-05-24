<template>
  <div>
    <div>
      <v-header title="确认订单" :back="true"></v-header>
      </div>
    <div class="box" v-if="$route.query.addressid">
      <h3>此处是你选择的地址</h3>
      {{address.username}} {{address.userphone}} {{address.location}}
    </div>
     <div class="boxx"><p class="box1" @click="toList">点击完善收货地址</p></div>
    <!-- 展示购物车的数据 -->
    <div class="item" v-for="(item,index) in shopList" :key="item.id">
      <div class="input" @click="changeOne(index)">
       
        <button v-if="item.checked">选中</button>
        <button v-else>没选中</button>
      </div>
      <img :src="$pre+item.img" alt />
      <div class="right">
        <h3>{{item.goodsname}}</h3>
        <div>{{item.price}}</div>
        <div>
          <button>-</button>
          {{item.num}}
          <button>+</button>
        </div>
        <div>{{item.price*item.num}}</div>
      </div>
    </div>

    <van-button @click="submit">提交订单</van-button>
  </div>
</template>

<script>
import { reqAddressList, reqOrderAdd, reqShopList } from "../request/api";
import { alertMsg } from "../utils/alert";
export default {
  data() {
    return {
      //1.地址
      address: {},
      //3.购物车
      shopList: [],
    };
  },
  methods: {
    //前往地址列表页
    toList() {
      this.$router.push("/addressList");
    },
    //提交订单
    submit() {
      if (!this.address.id) {
        alertMsg("请选择地址");
        return this.$router.push("/index/mine");
      }

      let orderInfo = JSON.parse(localStorage.getItem("orderInfo"));
      reqOrderAdd({
        ...orderInfo,
        uid: JSON.parse(localStorage.getItem("userInfo")).uid,
        addressid: this.address.id,
      }).then((res) => {});
    },
  },
  mounted() {
    //2.查询地址
    if (this.$route.query.addressid) {
      reqAddressList({
        uid: JSON.parse(localStorage.getItem("userInfo")).uid,
        id: this.$route.query.addressid,
      }).then((res) => {
        this.address = res.data.list[0];
      });
    }

    //4.查询购物车
    let idstr = JSON.parse(localStorage.getItem("orderInfo")).idstr; //"8,10,12"
    let idArr = idstr.split(","); //["8","10","12"]
    idArr.forEach((id) => {
      reqShopList({
        uid: JSON.parse(localStorage.getItem("userInfo")).uid,
        id: id,
      }).then((res) => {
        //从后端取回来数据，添加到shopList()
        this.shopList.push(res.data.list[0]);
        console.log(this.shopList);
      });
    });
  },
};
</script>

<style scoped>
.item {
  padding: 0.2rem;
  margin: 0.2rem;
  background: lightblue;
  display: flex;
  margin-top: .6rem;
}
.item .input {
  width: 0.4rem;
}
.item img {
  width: 1.5rem;
  height: 1.5rem;
}
.item.right {
  flex: 1;
}

.box1{
  /* margin-top: 1rem; */
  height: 2.2rem;
  line-height: 3.2rem;
  text-align: center;
  font-size: .4rem;
  background: #fff;
  width: 95%;
  margin: 0.2rem;;
}

.boxx{
    width: 100%;
      height: 2.2rem;
      background: red;
}



</style>