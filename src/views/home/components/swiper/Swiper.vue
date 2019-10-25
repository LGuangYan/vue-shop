<template>
  <div class="swiperWarpper">
    <van-swipe :autoplay="3000" indicator-color="white" :height="235">
      <van-swipe-item v-for="(item, index) in swiper_list" :key="index">
        <img :src="item.icon_url" :alt="item.icon_url" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>
<script>
import { Swipe, SwipeItem } from "vant";

export default {
  props: {
    swiper_list: Array
  },
  components: {
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem
  }
};
</script>
<style lang="less" scoped>
.swiperWarpper{
  img{
    width: 100%;
    height: 100%;
  }
}
</style>
