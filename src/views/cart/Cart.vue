<template>
    <div id="cart">
        <header>
            购物车
            <span @click="clearCart">清空购物车</span>
        </header>
        <div class="cartContent">
            <ul>
                <li v-for="(goods, index) in shopCart" :key="index">
                    <div class="left">
                        <!-- <input type="checkbox" @click="singerGoodsSelected(goods.id)"> -->
                        <!-- <input type="checkbox" :checked="goods.checked" @click="singerGoodsSelected(goods.id)"> -->
                        <em class="iconfont" :checked="goods.checked" @click="singerGoodsSelected(goods.id)"></em>
                    </div>
                    <div class="center">
                        <img :src="goods.small_image" alt="">
                    </div>
                    <div class="right">
                        <h2>{{goods.name}}</h2>
                        
                        <span>{{goods.price | moneyFormat}}</span>
                        <div class="cartStepper">
                            <div class="mPlus" @click="removeOutCart(goods.id, goods.num)">-</div>
                            <input class="stpInput" type="text" disabled v-model="goods.num">
                            <div class="mReduce" @click="addToCart(goods.id, goods.name, goods.small_image, goods.price)">+</div>
                        </div>
                    </div>
                </li>    
            </ul>
        </div>
        <div class="cartToolBar">
            <div class="tLeft">
                <em class="iconfont" :checked="isSelectedAll" @click="singerGoodsSelectedAll(isSelectedAll)"></em><label>全选</label>
            </div>
            <div class="tCenter">总计：<span>{{totalPrice | moneyFormat}}</span></div>
            <div class="tRight">结算({{goodsCount}})</div>
        </div>
    </div>
</template>
<script> 
import { Checkbox, Dialog } from 'vant'
import { mapState, mapMutations } from 'vuex'
export default {
    components: {
        [Checkbox.name]: Checkbox,
        [Dialog.name]: Dialog
    },
    data() {
        return {
            // checked: null,
            value: 1
        }
    },
    computed: {
        ...mapState(['shopCart']),

        //0.计算商品数量
        goodsCount() {
            let selectedGoodsCount = 0
             Object.values(this.shopCart).forEach((goods, index)=>{
                if(goods.checked) {
                   selectedGoodsCount += 1
                }
            })
            return selectedGoodsCount
        },

        //1.计算商品是否全选
        isSelectedAll() {
            // let tag = Object.keys(this.goodsCount).length > 0
            let goodsCount = Object.keys(this.shopCart).length
            let tag = goodsCount > 0
            Object.values(this.shopCart).forEach((goods, index)=>{
                if(!goods.checked) {
                    tag = false
                }
            })
            return tag
        },

        //2.计算商品总价
        totalPrice() {
            let totalPrice = 0;
            Object.values(this.shopCart).forEach((goods, index) => {
                if(goods.checked) {
                    totalPrice += goods.price * goods.num
                }
            })
            return totalPrice
        }


    },
    methods: {
        ...mapMutations([
            'REDUCE_CART',
            'ADD_GOODS', 
            'SELECTED_SINGER_GOODS', 
            'SELECTED_ALL_GOODS', 
            'CLEAR_CART']),
        //1. 移出购物车
        removeOutCart(goodsId, goodsNum) {
           if(goodsNum > 1) {
               this.REDUCE_CART({ goodsId })
           } else if(goodsNum === 1){
                Dialog.confirm({
                    title: '提示',
                    message: '你确定要删除该商品吗?'
                }).then(() => {
                // on confirm
                    this.REDUCE_CART({ goodsId })
                }).catch(() => {
                // on cancel
                })
            }
        },
        //2.增加商品
        addToCart(goodsId, goodsName, smallImage, goodsPrice) {
            this.ADD_GOODS({
                goodsId,
                goodsName,
                smallImage,
                goodsPrice
            })
        },
        //3.单个商品选中&取消选中
        singerGoodsSelected(goodsId) {
            this.SELECTED_SINGER_GOODS({ goodsId })
        },
        //4.全选与取消全选
        singerGoodsSelectedAll(isSelected) {
            this.SELECTED_ALL_GOODS({isSelected})
        },
        //5.清空购物车
        clearCart() {
            Dialog.confirm({
                title: '提示',
                message: '你确定要清空购物车?'
            }).then(() => {
            // on confirm
                this.CLEAR_CART()
            }).catch(() => {
            // on cancel
            })
        }
    }

}
</script>


<style lang="less" scoped>
    #cart {
        width: 100%;
        height: 100%;
        background: #f5f5f5;
        display: flex;
        flex-direction: column;

        header{
            font-size: .16rem;
            height: .44rem;
            text-align: center;
            line-height: .44rem;
            background: #fff;
            position: relative;
            span{
                position: absolute;
                display: block;
                height: .44rem;
                width: .8rem;
                top: 0;
                right: 0;
                line-height: .44rem;
                color: #fe625f;
                text-align: center;
                font-size: .12rem;
            }
        }
        .cartContent{
            margin-top: .1rem;
            flex: 1;
            background: #fff;
            overflow: hidden;
            ul{
                height: 100%;
                overflow-y: scroll;
                li{
                    height: .9rem;
                    display: flex;
                    padding: .05rem 0;
                    border-bottom: 1px solid #f5f5f5;
                    
                    .left{
                        display: flex;
                        align-items: center;
                        width: .5rem;
                        position: relative;
                        em {
                            position: absolute;
                            width: .2rem;
                            height: .2rem;
                            border: solid 1px #e6e6e6;
                            border-radius: 50%;
                            left: .1rem;
                            top: .3rem;
                        }
                        .iconfont {
                            font-family: iconfont;
                            color: #fff;
                            font-size: .24rem;
                        }
                        em[checked]:before {
                            content: '\E659';
                            position: absolute;
                            font-size: .12rem;
                            line-height: .2rem;
                            text-align: center;
                            width: .2rem;
                            background: #fe625f;
                            border-radius: 100%;
                        }
                    }
                    .center{
                        width: .9rem;
                        display: flex;
                        align-items: center;
                        padding: .05rem;
                        img{
                            width: 100%;
                        }
                    }
                    .right{
                        width: 100%;
                        padding: 0 .1rem;
                        position: relative;
                        h2{
                            font-size: .14rem;
                        }
                         
                        span{
                            display: block;
                            font-size: .13rem;
                            font-weight: 500;
                            line-height: .3rem;
                            color: #fe625f;
                            position: absolute;
                            bottom: 0;
                        }
                        .cartStepper{
                            position: absolute;
                            right: .1rem;
                            bottom: 0rem;
                            width: .7rem;
                            height: .22rem;
                            display: flex;
                            align-items: center;
                            border:1px solid #fe625f;
                            border-radius: .25rem;
                            box-sizing: border-box;
                            .mPlus{
                                width: .2rem;
                                height: .2rem;
                                font-size: .16rem;
                                border: 1px solid #fe625f;
                                border-left: none;
                                border-radius: 100%;
                                line-height: .18rem;
                                text-align: center;
                                box-sizing: border-box;
                            }
                            .stpInput{
                                width: .3rem;
                                height: .2rem;
                                font-size: .12rem;
                                border: none;
                                text-align: center;
                                
                            }
                            .mReduce{
                                width: .2rem;
                                height: .2rem;
                                font-size: .16rem;
                                border: 1px solid #fe625f;
                                border-right: none; 
                                border-radius: 100%;
                                line-height: .2rem;
                                text-align: center;
                                box-sizing: border-box;
                            }
                        }
                    }   
                }
            }
        }
        .cartToolBar{
            height: .44rem;
            background: #fff;
            margin-bottom: .5rem;
            display: flex;
            align-items: center;
            .tLeft{
                display: flex;
                width: 1rem;
                position: relative;
                label{
                    display: block;
                    font-size: .15rem;
                    line-height: .23rem;
                }
                em {
                    margin: 0 .1rem;
                    width: .2rem;
                    height: .2rem;
                    border: solid 1px #e6e6e6;
                    border-radius: 50%;
                }
                .iconfont {
                    font-family: iconfont;
                    color: #fff;
                    font-size: .24rem;
                }
                em[checked]:before {
                    content: '\E659';
                    position: absolute;
                    font-size: .12rem;
                    line-height: .2rem;
                    text-align: center;
                    width: .2rem;
                    background: #fe625f;
                    border-radius: 100%;
                }
            }
            .tCenter{
                flex: 1;
                height: 100%;
                font-size: .15rem;
                line-height: .44rem;
                color: #666;
                span{
                    font-size: .16rem;
                    color: #fe625f;
                    font-weight: 500;
                }
            }
            .tRight{
                width: 1rem;
                height: 100%;
                font-size: .13rem;
                text-align: center;
                background: #fe625f;
                line-height: .44rem;
                color: #fff;
                font-weight: bold;
            }
        }
    }
</style>
