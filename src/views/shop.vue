
<template>
  <div>
    <v-header title="购物车" :back="true"></v-header>
  <van-tabs v-model="active" class="top">
  <van-tab title="全部"></van-tab>
  <van-tab title="降价"></van-tab>
  <van-tab title="常卖"></van-tab>
  <van-tab title="分类"></van-tab>
</van-tabs>
    <div class="top">
      <div @click="changeAll">
        <button v-if="allChecked">全选</button>
        <button v-else>不全选</button>
      </div>
      全选 ----总价：{{allprice}}
    </div>
    <!-- 列表 -->
    <div class="item" v-for="(item,index) in list" :key="item.id">
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

    <!-- 结算 -->
    <van-button type="primary" @click="toOrder">结算</van-button>
    
  </div>
</template>

<script>
import vHeader from '../components/vHeader.vue';
import { reqShopList } from "../request/api";
import { alertMsg } from '../utils/alert';
export default {
  components: { vHeader },
  data() {
    return {
      // 1.初始化数据
      list: [],
      allChecked: false,
      active:1
    };
  },
  mounted() {
    // 2.请数据
    reqShopList({ uid: JSON.parse(localStorage.getItem("userInfo")).uid }).then(
      (res) => {
        // 3.从后端返回的数据中没有checked字段，补了checked代表是否被选中
        let list = res.data.list ? res.data.list : [];
        list.forEach((item) => {
          item.checked = false;
        });
        this.list = list;
      }
    );
  },
  methods: {
    //4.修改了某条的checked
    changeOne(index) {
      this.list[index].checked = !this.list[index].checked;
      //查看是否都选中
      this.allChecked = this.list.every((item) => item.checked);
    },
    //5.点击了全选
    changeAll() {
      this.allChecked = !this.allChecked;
      this.list.forEach((item) => {
        item.checked = this.allChecked;
      });
    },
    // 7.结算
    toOrder(){
      if(!this.list.some(item=>item.checked)){
        alertMsg("请选择购物车")
        return;
      }

      //存总价、总数量、选中的购物车的id拼接成的字符串
      let orderInfo={
        countmoney:this.allprice,
        countnumber:this.list.reduce((val,item)=>item.checked?val+=item.num:val,0),
        idstr:this.list.reduce((val,item)=>item.checked?val+=','+item.id:val,'').slice(1),
      }
      localStorage.setItem("orderInfo",JSON.stringify(orderInfo))
      
      this.$router.push("/order")
    }
  },
  computed: {
    // 6.总价
    allprice() {
      return this.list.reduce(
        (val, item) => (item.checked ? (val += item.price * item.num) : val),
        0
      );
    },
  },
};
</script>

<style scoped>
.top{
  margin-top: 1rem;
}
.item {
  padding: 0.2rem;
  margin: 0.2rem;
  background: lightblue;
  display: flex;
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

.red{
  background: red;
}
</style>