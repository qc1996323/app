<template>
  <div class="top">
    <v-header title="商品列表" :back="true"></v-header>
    <!-- <div v-if="arr.length===0">暂无数据</div> -->
    <van-search shape="round" background="red" placeholder="请输入搜索关键词" />
    <div class="nav">
      <span>综合排序</span>
      <span>销量</span>
      <span>价格</span>
      <span>好评度</span>
      <span>店铺</span>
      <span>筛选</span>
    </div>
    <div class="item" v-for="item in arr" :key="item.id" @click="toDetail(item.id)">
      <img :src="$pre+item.img" alt />
      <div class="des">
        <h6>{{item.goodsname}}</h6>
        <span>￥{{item.market_price}} </span><del>  ￥{{item.price}}</del>
         <p class="p1">双11.11限制</p>
         <p><b>3565评论</b>  <b>99%好评</b></p>
      </div>
    </div>
  </div>
</template>

<script>
/*
1.home 跳转的时候传id
2.list接收id,然后根据id发请求
3.遍历数据
*/
import { reqCateList } from "../request/api";
export default {
  data() {
    return {
      // 1.初始值
      arr: [],
    //   goodData:[]
    };
  },
  mounted() {
    // 2.发请求
    reqCateList({type:1,cateid:this.$route.query.id}).then((res) => {
        this.arr = res.data.list.goodData;
    });
  },
  methods: {
    // 4.跳转到详情
    toDetail(id) {
      this.$router.push("/detail?id="+id);
    },
  },
};
</script>

<style scoped>
.top{
    padding-top: .8rem;
}
.item{
  display: flex;
}
img {
  width: 50%;
  height: 3rem;
}
.des {
  width: 50%;
  height: 3rem;
  display: block;
  padding: 0.2rem;
}
.des span{
  color: red;
  font-size: .4rem;
  margin-top: 0.2rem;
}
.des del{
    font-size: .4rem;
    color: rgb(121, 118, 118);
    text-decoration:line-through;
}
h6{
    margin-bottom: 0.2rem;
}
.nav {
  background: rgb(224, 59, 59);
  height: 0.8rem;
  width: 100%;
  line-height: 0.8rem;
}
.nav span {
  margin: 0.22rem;
  color: aliceblue;
}
.p1{
    background:red;
    color: azure;
    width: 2rem;
    text-align: center;
    margin:.2rem 0;
}
b{
    color: cadetblue;
    font-weight: normal;
}
</style>