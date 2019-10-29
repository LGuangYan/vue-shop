<template>
  <div id="home">
    <div v-if="!isShowLoading">
      <Header />
      <Swiper :swiper_list="swiper_list" />
      <Nav :nav_list="nav_list" />
      <FlashSale :flash_sale_product_list="flash_sale_product_list" />
      <YouLike :you_like_product_list="you_like_product_list" />
    </div>
    <van-loading
      v-else
      type="spinner"
      style="position: absolute; left: 50%; top: 40%; transform: translate(-50%);"
    >数据拼命加载中...</van-loading>
  </div>
</template>
<script>
import { Loading } from "vant"
import Header from "./components/header/Header"
import Swiper from "./components/swiper/Swiper"
import Nav from "./components/nav/Nav"
import FlashSale from "./components/flashSale/FlashSale"
import YouLike from "./components/youLike/YouLike"
import { getHomeData } from "@/api/index"
export default {
  components: {
    [Loading.name]: Loading,
    Header,
    Swiper,
    Nav,
    FlashSale,
    YouLike
  },
  data() {
    return {
      //首页轮播数据
      swiper_list: [],
      //首页导航数据
      nav_list: [],
      //秒杀数据
      flash_sale_product_list: [],
      //猜你喜欢
      you_like_product_list: [],
      //是否显示加载loading
      isShowLoading: true
    };
  },
  created() {
    //请求网络数据
    this.reqData()
  },
  methods: {
    async reqData() {
        let res = await getHomeData()
        if (res.success) {
          this.swiper_list = res.data.list[0].icon_list
          this.nav_list = res.data.list[2].icon_list
          this.flash_sale_product_list = res.data.list[3].product_list
          this.you_like_product_list = res.data.list[12].product_list
          //隐藏加载loading
          this.isShowLoading = false
        }
    }
  }
}
</script>


<style lang="less" scoped>
#home {
  width: 100%;
  height: 100%;
  background: #f5f5f5;
}
</style>
