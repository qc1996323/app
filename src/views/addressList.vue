<template>
  <div>
      <v-header title="地址列表" :back="true">{{chosenAddressId}}</v-header>
    <h3>地址列表--{{chosenAddressId}}</h3>
    <div v-if="list.length==0">暂无数据</div>
    <van-address-list
      v-model="chosenAddressId"
      :list="list"
      default-tag-text="默认"
      @add="onAdd"
      @edit="onEdit"
      @select="select"
    />
  </div>
</template>

<script>
import { reqAddressList } from "../request/api";
export default {
  data() {
    return {
      //选中的地址的id
      chosenAddressId: "2",
      //1.展示列表数据
      list: [
        /*
        {
          id: "1",
          name: "张三",
          tel: "13000000000",
          address: "浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室",
          isDefault: true,
        },*/
      ],
    };
  },
  mounted() {
    /*
    {
      id: 36
      label: "家"
      location: "天津市天津市和平区"
      regioncode: "120101"
      status: 1
      uid: "71c729f0-b460-11eb-b814-9ba69420069c"
      useraddress: "11"
      username: "qq"
      userphone: "15722222222"
    }
    */
    //  2.请求数据
    reqAddressList({
      uid: JSON.parse(localStorage.getItem("userInfo")).uid,
    }).then((res) => {
      let list = res.data.list ? res.data.list : [];

      //list=[{id:36,label:"家",username:"qq"},{id:37,label:"家",username:"oo"}]
      //[{id:36,name:"qq"},{id:37,name:"oo"}]

      this.list = list.map((item) => {
        return {
          id: item.id,
          name: item.username,
          tel: item.userphone,
          address: item.location,
          isDefault: item.status == 1 ? true : false,
          areaCode: item.regioncode,
          label: item.label,
          addressDetail: item.useraddress,
        };
      });
    });
  },
  methods: {
    //添加
    onAdd() {
      this.$router.push("/addressAdd");
    },
    //编辑
    onEdit(e) {
      let str = "";
      for (let key in e) {
        str += key + "=" + e[key] + "&";
      }
      //str="id=1&username=123&userphone=23&"
      str = str.slice(0, str.length - 1);
      this.$router.push("/addressAdd?" + str);
    },
    //切换
    select(e){
      this.$router.push("/order?addressid="+e.id)
     
    }
  },
};
</script>

<style scoped>
.z{
  margin-top: 3rem;
}

</style>