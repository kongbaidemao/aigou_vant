<template>
  <div class="hello">
    <router-view/>
    <van-tabbar route fixed border
                active-color="#FF3D00"
                inactive-color="#000">
      <van-tabbar-item replace to="/home" icon="home-o">
        主页
      </van-tabbar-item>
      <van-tabbar-item replace to="/search" icon="search" dot>
        发现
      </van-tabbar-item>
      <van-tabbar-item replace to="/cart" icon="cart-o" info="5">
        购物车
      </van-tabbar-item>
      <van-tabbar-item replace to="/user" icon="user-o  ">
        我的
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
    export default {
        name: 'HelloWorld',
        data() {
            return {
                msg: 'Welcome to Your Vue.js App'
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
