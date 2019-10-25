<template>
  <div id="dashboard">
    <van-tabbar v-model="active" active-color="#fe625f">
      <van-tabbar-item replace to="/dashboard/home">
        <span>首页</span>
        <img slot="icon" slot-scope="props" :src="props.active ? home_icon.active : home_icon.normal" />
      </van-tabbar-item>
      <van-tabbar-item replace to="/dashboard/categroy">
        <span>分类</span>
        <img slot="icon" slot-scope="props" :src="props.active ? category_icon.active : category_icon.normal" />
      </van-tabbar-item>
      <van-tabbar-item info="3" replace to="/dashboard/cart">
        <span>购物车</span>
        <img slot="icon" slot-scope="props" :src="props.active ? cart_icon.active : cart_icon.normal" />
      </van-tabbar-item>
      <van-tabbar-item replace to="/dashboard/mine">
        <span>我的</span>
        <img slot="icon" slot-scope="props" :src="props.active ? mine_icon.active : mine_icon.normal" />
      </van-tabbar-item>
    </van-tabbar>
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"/>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive" />
  </div>
</template>
<script>
import Vue from 'vue'
import { Tabbar, TabbarItem } from 'vant'
Vue.use(Tabbar).use(TabbarItem)
export default {
  components: {
    
  },
  data() {
    return {
      active: 0,
      home_icon: {
        normal: require('@/images/tabbar/home_default.png'),
        active: require('@/images/tabbar/home_selected.png'),
      },
      category_icon: {
        normal: require('@/images/tabbar/category_default.png'),
        active: require('@/images/tabbar/category_selected.png'),
      },
      cart_icon: {
        normal: require('@/images/tabbar/shoppingcart_default.png'),
        active: require('@/images/tabbar/shoppingcart_selected.png'),
      },
      mine_icon: {
        normal: require('@/images/tabbar/mine_default.png'),
        active: require('@/images/tabbar/mine_selected.png'),
      },
    };
  }
};
</script>


<style lang="less" scoped>
#dashboard {
  width: 100%;
  height: 100%;
  background: yellow;
  img{
    height: .22rem;
  }
}
</style>
