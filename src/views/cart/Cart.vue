<template>
    <div id="cart">
        <header>
            购物车
            <span>清空购物车</span>
        </header>
        <div class="cartContent">
            <ul>
                <li v-for="(goods, index) in shopCart" :key="index">
                    <div class="left">
                        <van-checkbox v-model="goods.checked" checked-color="#fe625f"></van-checkbox>
                    </div>
                    <div class="center">
                        <img :src="goods.small_image" alt="">
                    </div>
                    <div class="right">
                        <h2>{{goods.name}}</h2>
                        
                        <span>{{goods.price | moneyFormat}}</span>
                        <div class="cartStepper">
                            <div class="mPlus">-</div>
                            <input class="stpInput" type="text" disabled>
                            <div class="mReduce">+</div>
                        </div>
                    </div>
                </li>    
            </ul>
        </div>
        <div class="cartToolBar">
            <div class="tLeft">
                <van-checkbox v-model="checked" checked-color="#fe625f">全选</van-checkbox>
            </div>
            <div class="tCenter">总计：<span>2000</span></div>
            <div class="tRight">结算(9)</div>
        </div>
    </div>
</template>
<script> 
import { Checkbox } from 'vant'
import { mapState } from 'vuex'
export default {
    components: {
        [Checkbox.name]: Checkbox
    },
    data() {
        return {
            checked: true,
            value: 1
        }
    },
    computed: {
        ...mapState(['shopCart'])
    },
    methods: {
       
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
                        padding: 0 .1rem;
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
                            width: .8rem;
                            height: .22rem;
                            display: flex;
                            align-items: center;
                            border:1px solid pink;
                            .mPlus{
                                width: .2rem;
                                height: .2rem;
                                font-size: .16rem;
                                border: 1px solid pink;
                                border-radius: 100%;
                                line-height: .2rem;
                                text-align: center;
                            }
                            .stpInput{
                                width: .4rem;
                                height: .2rem;
                                font-size: .12rem;
                                border: none;
                                
                            }
                            .mReduce{
                                width: .2rem;
                                height: .2rem;
                                font-size: .16rem;
                                border: 1px solid pink;
                                border-radius: 100%;
                                line-height: .2rem;
                                text-align: center;
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
                font-size: .13rem;
                padding: 0 .2rem 0 .1rem;
                line-height: .44rem;
                font-weight: bold;
            }
            .tCenter{
                flex: 1;
                height: 100%;
                font-size: .12rem;
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
