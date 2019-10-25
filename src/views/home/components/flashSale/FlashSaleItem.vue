<template>
    <div class="saleItem">
      <div class="top">
        <img :src="product.small_image" alt />
      </div>
      <div class="bottom">
        <div class="itemTitle">{{product.name}}</div>
        <span class="originPrice">{{product.origin_price | moneyFormat}}</span>
        <span class="price">{{product.price | moneyFormat}}</span>
        <i class="icfont">&#xe68e;</i>
      </div>
  </div>
</template>
<script>
export default {
    props: {
        product: Object
    }
}
</script>
<style lang="less" scoped>
  .saleItem {
    width: 30%;
    margin: 0.1rem;
    display: inline-block;
    .top {
      height: 0;
      padding-bottom: 100%;
      overflow: hidden;
      position: relative;
      img {
        display: block;
        width: 100%;
        height: auto;
      }
    }
    .bottom {
      height: 1rem;
      display: flex;
      flex-direction: column;
      position: relative;
      .itemTitle {
        font-size: 0.12rem;
        height: 0.4rem;
        white-space: pre-wrap;
      }
      .originPrice {
        font-size: 0.12rem;
        line-height: 0.3rem;
        text-decoration: line-through;
        color: #999;
      }
      .price {
        font-size: 0.12rem;
        color: #fe625f;
      }
      i{
          position: absolute;
          right: .1rem;
          bottom: .1rem;
          display: block;
          width: .32rem;
          height: .32rem;
          line-height: .3rem;
          border-radius: 100%;
          text-align: center;
          font-size: .2rem;
          background: #fe625f;
          color: #fff;
          font-weight: bold;
      }
    }
  }
</style>
