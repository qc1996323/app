<template>
  <div class="s">
    <v-header title="注册" :back="true"></v-header>
    <van-form @click="register">
      <van-field
        v-model="user.phone"
       name="手机号"
        label="手机号"
        placeholder="手机号"
        :rules="[{ required: true, message: '请填写手机号' }]"
      />
      <van-field
        v-model="user.nickname"
        name="昵称"
        label="昵称"
        placeholder="昵称"
        :rules="[{ required: true, message: '请填写昵称' }]"
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
        <van-button round block type="info" native-type="register" @click="register">注册</van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import { reqRegister } from "../request/api";
import { alertMsg } from "../utils/alert";
export default {
  data() {
    return {
      // 1. 初始化数据
      user: {
        phone: "",
        nickname: "",
        password: "",
      },
    };
  },
  methods: {
    // 2. 点击注册
    register() {
      reqRegister(this.user).then((res) => {
      if (
        this.user.phone === "" ||
        this.user.nickname === "" ||
        this.password == ""
      ) {
        alert("所有都不能为空");
        return;
      }
        // 注册成功，跳转到登录
        if (res.data.code == 200) {
            alertMsg(res.data.msg);
             //存用户信息
          localStorage.setItem("userInfo", JSON.stringify(res.data.list));
             //跳转路由
          this.$router.replace("/login");
        }
      });
    },
  },
};
</script>
   
<style scoped>
   .s{
       padding-top: 1rem;
   }
</style>