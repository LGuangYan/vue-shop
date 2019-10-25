<template>
  <div class="wrapper">
    <div class="itemWrapper">
      <div class="imgWrapper">
        <div class="imgBox">
          <img :src="product.small_image" alt />
        </div>
      </div>
      <div class="infoWrapper">
        <div class="title">{{product.name}}</div>
        <div class="picWrapper">
          <span class="pic">{{product.price | moneyFormat}}</span>
          <span class="oPic">{{product.origin_price | moneyFormat}}</span>
        </div>
        <i class="icfont">&#xe68e;</i>
      </div>
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
.wrapper {
  position: relative;
  display: inline-block;
  width: 50%;
  padding: 0.05rem;
  vertical-align: top;
  .itemWrapper {
    background: #fff;
    border-radius: 0.04rem;
    overflow: hidden;
    .imgWrapper {
      position: relative;
      height: 0;
      padding-bottom: 100%;
      overflow: hidden;
      border-radius: 0.04rem;
      .imgBox {
        padding: 0.1rem;
        img {
          width: 100%;
          height: auto;
          display: block;
        }
      }
    }
    .infoWrapper {
      padding: 0.1rem;
      position: relative;
      .title {
        font-size: .12rem;
        white-space: pre-wrap;
        height: 0.4rem;
      }
      .picWrapper {
        font-size: 0.12rem;
        padding-top: 0.2rem;
        .pic {
          color: #fe625f;
          font-weight: bold;
        }
        .oPic {
          color: #999;
          padding: 0.1rem;
          text-decoration: line-through;
        }
      }
      i {
        position: absolute;
        right: 0.1rem;
        bottom: 0.1rem;
        display: block;
        width: 0.32rem;
        height: 0.32rem;
        line-height: 0.3rem;
        border-radius: 100%;
        text-align: center;
        font-size: 0.2rem;
        background: #fe625f;
        color: #fff;
        font-weight: bold;
      }
    }
  }
}
</style>
