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
      <van-tabbar-item :info="goodsNum > 0 ? goodsNum : ''" replace to="/dashboard/cart">
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
import { mapState, mapMutations } from 'vuex'
import { Tabbar, TabbarItem } from 'vant'

export default {
   components: {
        [Tabbar.name]: Tabbar,
        [TabbarItem.name]: TabbarItem
    },
  data() {
    return {
      active: Number(sessionStorage.getItem('tabBarActiveIndex')) || 0,
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
    }
  },
  watch: {
    active(val) {
      let tabBarActiveIndex = val > 0 ? val : 0
      //缓存到本地
      sessionStorage.setItem('tabBarActiveIndex', val)
    }
  },
  computed: {
    ...mapState(['shopCart']),
    goodsNum() {
      if(this.shopCart) {
        //总得购物车商品数量
        let num = 0  
        Object.values(this.shopCart).forEach((goods, index)=>{
          num += goods.num
        })
        return num
      }else {
        return 0
      }
    }
  },
  mounted() {
    //获取购物车数据
    this.INIT_SHOP_CART()
  },
  methods: {
    ...mapMutations(['INIT_SHOP_CART'])
  }
}
</script>


<style lang="less" scoped>
#dashboard {
  width: 100%;
  height: 100%;
  img{
    height: .22rem;
  }
}
</style>
