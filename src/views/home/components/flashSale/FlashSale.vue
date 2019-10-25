<template>
  <div class="wrapper">
    <div class="titleWarpper">
      <div class="title">限时抢购</div>
      <span class="actionStateTex">07:00场</span>
      <div class="actionStateTexEnd">已结束</div>
      <span class="more">更多</span>
    </div>
    <div class="itemsWarpper">
      <FlashSaleItem
        v-for="(product, index) in flash_sale_product_list"
        :product="product"
        :key="index"
      />
    </div>
  </div>
</template>
<script>
import FlashSaleItem from "./FlashSaleItem";
export default {
  props: {
    flash_sale_product_list: Array
  },
  components: {
    FlashSaleItem
  }
};
</script>
<style lang="less" scoped>
.wrapper {
  width: 100%;
  height: 2.8rem;
  background: #fff;
  .titleWarpper {
    padding: 0.1rem;
    display: flex;
    align-items: center;
    .title {
      font-size: 0.16rem;
      border-left: 0.04rem solid #fe625f;
      padding-left: 0.05rem;
    }
    .actionStateTex {
      font-size: 0.12rem;
      color: red;
      padding: 0 0.1rem;
    }
    .actionStateTexEnd {
      font-size: 0.12rem;
      border: 1px solid #aaa;
      color: rgb(118, 118, 118);
      border-radius: 0.04rem;
    }
    .more {
      flex: 1;
      text-align: right;
      font-size: 0.12rem;
      color: #fe625f;
    }
  }
  .itemsWarpper {
    white-space: nowrap;
    overflow-x: auto;
    overflow-y: hidden;
  }
  .itemsWarpper::-webkit-scrollbar {
    display: none;
  }
}
</style>