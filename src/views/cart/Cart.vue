<template>
    <div id="cart">
        <header>
            购物车
            <span>清空购物车</span>
        </header>
        <div class="cartContent">
            <ul>
                <li>
                    <div class="left">
                        <van-checkbox v-model="checked" checked-color="#fe625f"></van-checkbox>
                    </div>
                    <div class="center">
                        <img src="https://img.alicdn.com/bao/uploaded/i3/3193724813/TB2rg1uaN6I8KJjSszfXXaZVXXa_!!3193724813.jpg" alt="">
                    </div>
                    <div class="right">
                        <h2>范德萨范德萨范德萨发生的方式地方</h2>
                        <h6>山东省打算的撒的撒的撒的撒打算的撒的撒的撒的撒打算的撒打算的撒打算的撒的</h6>
                        <span>2122</span>
                        <div class="cartStepper">
                            <van-stepper v-model="value" button-size="22" />
                        </div>
                    </div>
                </li>
                <li>
                    <div class="left">
                        <van-checkbox v-model="checked" checked-color="#fe625f"></van-checkbox>
                    </div>
                    <div class="center">
                        <img src="https://img.alicdn.com/bao/uploaded/i3/3193724813/TB2rg1uaN6I8KJjSszfXXaZVXXa_!!3193724813.jpg" alt="">
                    </div>
                    <div class="right">
                        <h2>范德萨范德萨范德萨发生的方式地方</h2>
                        <h6>山东省打算的撒的撒的撒的撒打算的撒的撒的撒的撒打算的撒打算的撒打算的撒的</h6>
                        <span>2122</span>
                        <div class="cartStepper">
                            <van-stepper v-model="value" button-size="22" />
                        </div>
                    </div>
                </li>
                <li>
                    <div class="left">
                        <van-checkbox v-model="checked" checked-color="#fe625f"></van-checkbox>
                    </div>
                    <div class="center">
                        <img src="https://img.alicdn.com/bao/uploaded/i3/3193724813/TB2rg1uaN6I8KJjSszfXXaZVXXa_!!3193724813.jpg" alt="">
                    </div>
                    <div class="right">
                        <h2>范德萨范德萨范德萨发生的方式地方</h2>
                        <h6>山东省打算的撒的撒的撒的撒打算的撒的撒的撒的撒打算的撒打算的撒打算的撒的</h6>
                        <span>2122</span>
                        <div class="cartStepper">
                            <van-stepper v-model="value" button-size="22" />
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
            <div class="tRight">结算</div>
        </div>
    </div>
</template>
<script> 
import { Checkbox } from 'vant'
import { Stepper } from 'vant'
export default {
    components: {
        [Checkbox.name]: Checkbox,
        [Stepper.name]: Stepper
    },
    data() {
        return {
            checked: true,
            value: 1
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
            ul{
                height: 100%;
                overflow: hidden;
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
                        img{
                            width: 100%;
                        }
                    }
                    .right{
                        padding: 0 .1rem;
                        position: relative;
                        h2{
                            font-size: .14rem;
                        }
                        h6{
                            font-size: .12rem;
                            color: #989898;
                        }
                        span{
                            display: block;
                            font-size: .13rem;
                            font-weight: 500;
                            line-height: .3rem;
                            color: #fe625f;
                        }
                        .cartStepper{
                            position: absolute;
                            right: .1rem;
                            bottom: 0rem;
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
