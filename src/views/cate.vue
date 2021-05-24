<template>
  <div>
    <v-header title="分类"></v-header>
    <!-- 顶部和头部 -->
    <div id="page">
      <header>
        <input type="text" class="iconfont" placeholder="请输入关键字" />
      </header>
    </div>

    <!-- 分类 -->
    <div id="classify">
        <van-sidebar v-model="activeKey" class="ul1">
          <van-sidebar-item title="手机通讯" />
          <van-sidebar-item title="生活家电" />
          <van-sidebar-item title="家居" />
          <van-sidebar-item title="服装" />
          <van-sidebar-item title="电视" />
          <van-sidebar-item title="空调" />
          <van-sidebar-item title="洗衣机" />
        </van-sidebar>
      <div class="classify_right">
        <div class="hot">
          <h2>热门精选</h2>
          <ul class="ul2">
            <li>
              <img src="../assets/img/xinp.png" alt />
              <p>新品</p>
            </li>
            <li>
              <img src="../assets/img/xinp.png" alt />
              <p>新品</p>
            </li>
            <li>
              <img src="../assets/img/xinp.png" alt />
              <p>新品</p>
            </li>
            <li>
              <img src="../assets/img/xinp.png" alt />
              <p>新品</p>
            </li>
            <li>
              <img src="../assets/img/xinp.png" alt />
              <p>新品</p>
            </li>
          </ul>
        </div>
        <div class="hot">
          <h2>面部护肤</h2>
          <ul class="ul2">
            <li>
              <img src="../assets/img/jinh.png" alt />
              <p>精华</p>
            </li>
            <li>
              <img src="../assets/img/jinh.png" alt />
              <p>精华</p>
            </li>
            <li>
              <img src="../assets/img/jinh.png" alt />
              <p>精华</p>
            </li>
            <li>
              <img src="../assets/img/jinh.png" alt />
              <p>精华</p>
            </li>
            <li>
              <img src="../assets/img/jinh.png" alt />
              <p>精华</p>
            </li>
          </ul>
        </div>
        <div class="hot">
          <h2>个护工具</h2>
          <ul class="ul2">
            <li>
              <img src="../assets/img/mians.png" alt />
              <p>面霜</p>
            </li>
            <li>
              <img src="../assets/img/mians.png" alt />
              <p>面霜</p>
            </li>
            <li>
              <img src="../assets/img/mians.png" alt />
              <p>面霜</p>
            </li>
            <li>
              <img src="../assets/img/mians.png" alt />
              <p>面霜</p>
            </li>
            <li>
              <img src="../assets/img/mians.png" alt />
              <p>面霜</p>
            </li>
          </ul>
        </div>
        <div class="hot">
          <h2>个护工具</h2>
          <ul class="ul2">
            <li>
              <img src="../assets/img/mians.png" alt />
              <p>面霜</p>
            </li>
            <li>
              <img src="../assets/img/mians.png" alt />
              <p>面霜</p>
            </li>
            <li>
              <img src="../assets/img/mians.png" alt />
              <p>面霜</p>
            </li>
            <li>
              <img src="../assets/img/mians.png" alt />
              <p>面霜</p>
            </li>
            <li>
              <img src="../assets/img/mians.png" alt />
              <p>面霜</p>
            </li>
          </ul>
        </div>
      </div>
      <!-- 固定底栏 -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeKey: 0,
    };
  },
};
</script>

<style scoped>
html,
body {
  height: 100%;
}
body {
  display: flex;
  flex-direction: column;
  position: relative;
}
/*顶部和头部*/
#page {
  height: 0.8rem;
  width: 100%;
  background: #ff6040;
  padding: 0.1rem 0 0 0.3rem;
  position: fixed;
  top: .6rem;
  bottom: 1rem;
}
#page header input {
  padding-left: 0.22rem;
  height: 0.64rem;
  width: 94%;
  border-radius: 0.1rem;
  border: 0.02rem solid #e6e6e6;
  box-sizing: border-box;
}
#page header input::placeholder {
  color: #999;
  font-size: 0.26rem;
}
/* 分类*/
#classify {
  flex: 1;
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.62rem;
  overflow: auto;
  height: 100%;
}
#classify .ul1 {
  overflow: auto;
  width: 2.37rem;
  background: #fff;
  text-align: center;
  position: fixed;
  top: 1.6rem;
  
}
#classify .classify_right {
  overflow: auto;
  margin-left: 2rem;
  margin-top: 1.4rem;
}
#classify .classify_right .hot {
  width: 4.64rem;
  height: 4.36rem;
  background: #fff;
  margin: 0.3rem 0.2rem 0 0.3rem;
}
#classify .classify_right .hot h2 {
  height: 0.72rem;
  line-height: 0.72rem;
  font-size: 0.3rem;
  color: #333;
  font-weight: bold;
  padding-left: 0.21rem;
}
#classify .classify_right .hot .ul2 {
  display: flex;
  flex-wrap: wrap;
  height: 3.64rem;
}
#classify .classify_right .hot .ul2 li {
  width: 1.28rem;
  text-align: center;
  margin: 0 0 0.21rem 0.2rem;
}
#classify .classify_right .hot .ul2 li img {
  width: 1.28rem;
}
#classify .classify_right .hot .ul2 li p {
  font-size: 0.22rem;
  color: #9a9a9a;
  margin-top: 0.08rem;
}
/*固定底栏*/
#footer {
  width: 7.5rem;
  position: fixed;
  bottom: 0;
  left: 50%;
  margin-left: -3.75rem;
  height: 1.62rem;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 0.72rem 0 0.7rem;
  box-sizing: border-box;
  border-top: 1px solid #ccc;
}
#footer p {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #9b9b9b;
  font-size: 0.2rem;
}
#footer p.cur {
  color: #ff6040;
}
#footer p.cur span {
  color: #ff6040;
}
#footer p span {
  font-size: 0.4rem;
  margin-bottom: 0.08rem;
}
</style>