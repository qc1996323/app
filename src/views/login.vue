<template>
  <div>
    <v-header title="手机登录" :register="true"></v-header>
    <img src="../assets/img/logo1.png" alt />
    <van-form @click="login">
      <van-field
        v-model="user.phone"
        name="手机号"
        label="手机号"
        placeholder="手机号"
        :rules="[{ required: true, message: '请填写手机号' }]"
      />
      <van-field
        v-model="user.password"
        type="password"
        name="密码"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div style="margin: 16px;">
        <van-button round block type="info" native-type="login" @click="login">登录</van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import { reqLogin } from "../request/api";
import { alertMsg } from "../utils/alert";
export default {
  data() {
    return {
      user: {
        phone: "",
        password: "",
      },
    };
  },
  methods: {
    //登录
    login() {
      reqLogin(this.user).then((res) => {
        if (res.data.code == 200) {
          alertMsg(res.data.msg);

          //存用户信息
          localStorage.setItem("userInfo", JSON.stringify(res.data.list));
          //跳转路由
          this.$router.push("/index/home");
        }
      });
    },
  },
};
</script>

<style scoped>
    img{
    margin:2rem .5rem auto 2rem;
    width: 3.63rem;
    border: 0;
    display: block;  
}
</style>