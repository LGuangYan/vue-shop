<template>
  <div class="wrapper">
    <div class="titleWrapper">
      <div class="middleLine"></div>
      <div class="title">猜你喜欢</div>
    </div>
    <div class="contentWrapper">
      <YouLikeItem v-for="( product, index ) in you_like_product_list" :product="product" :key="index" />
    </div>
  </div>
</template>
<script>
import YouLikeItem from './YouLikeItem'
export default {
    props: {
        you_like_product_list: Array || []
    },
  components: {
    YouLikeItem
  }
};
</script>
<style lang="less" scoped>
.wrapper {
  margin-top: 0.1rem;
  .titleWrapper {
    height: 0.3rem;
    padding: 0 0.1rem;
    position: relative;
    .middleLine {
      padding-top: 0.15rem;
      border-bottom: 1px solid #d8d8d8;
    }
    .title {
      font-size: 0.16rem;
      position: absolute;
      top: 0.02rem;
      left: 50%;
      transform: translate(-50%);
      background: #f5f5f5;
      padding: 0 0.1rem;
    }
  }
  .contentWrapper{
    margin-bottom: .6rem;
  }
}
</style>
