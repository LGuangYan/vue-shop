<template>
    <div>
        <div class="proItem" v-for="(item, index) in products" :key="index">
            <div class="lfetImg">
                <img :src="item.small_image" alt />
            </div>
            <div class="rightWrapper">
                <h2>{{item.product_name}}</h2>
                <h6>{{item.spec}}</h6>
                <span>{{item.price | moneyFormat}}</span>
                <i class="icfont" @click="addToCart(item)">&#xe68e;</i>
            </div>
        </div>
    </div>
</template>
<script>
import PubSub from 'pubsub-js'
export default {
  props: {
    products: Array
  },
  methods: {
    
    addToCart(goods){
      PubSub.publish('categroyAddToCart', goods)
    }
  }
}
</script>


<style lang="less" scoped>
.proItem {
  height: 1rem;
  background: white;
  display: flex;
  border-bottom: 1px solid #eee;
  .lfetImg {
    width: 0.7rem;
    display: flex;
    align-items: center;
    img {
        width: 100%;
    }
  }
  .rightWrapper {
    flex: 1;
    position: relative;
    h2 {
      font-size: 0.14rem;
      color: #222;
      line-height: 0.3rem;
      margin-top: 0.04rem;
    }
    h6 {
      font-size: 0.12rem;
      color: #959595;
      padding: 0.05rem 0;
    }
    span {
      font-size: 0.14rem;
      font-weight: bold;
      color: rgb(254, 98, 95);
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
      z-index: 99999;
    }
  }
}
</style>
