<template>
    <div id="categroy">
        <!-- header -->
        <SHeader />
        <!-- content -->
        <div class="listWraaper" v-if="!isShowLoading">
            <div class="leftWrapper">
                <ul class="warpper">
                    <li 
                        class="item"
                        :class="{selectItem: currentIndex === index}"
                        v-for="(cate, index) in getCategoriesData" 
                        :key="index"
                        @click="clickLeftLi(index)"
                        ref="menuList"                       
                        >
                        <span>{{cate.name}}</span>
                    </li>
                </ul>
            </div>
            <div class="rightWrapper">
                <ContentView :getCategoriesDetailsData="getCategoriesDetailsData"/>
            </div>
           
        </div>
        <van-loading
            v-else
            type="spinner"
            style="position: absolute; left: 50%; top: 40%; transform: translate(-50%);"
            >数据拼命加载中...
        </van-loading>
        
    </div>
</template>
<script>
import SHeader from './components/Header'
import ContentView from './components/ContentView'
import BScoll from 'better-scroll'
import { getCategories, getCategoriesDetails } from './../../api/index' 
import { Loading } from 'vant'
export default {
    components: {
        [Loading.name]: Loading,
        SHeader,
        ContentView
    },
    data() {
        return {
            //是否显示加载loading
            isShowLoading: true,
            getCategoriesData: [],
            getCategoriesDetailsData: [],
            //left 选中
            currentIndex: 0
        }
    },
    created() {
        this.initData()
    },
    methods:{
        //1.初始化页面数据
        async initData() {
            //1.left Data
            let leftRes = await getCategories()
            if(leftRes.success) {
                this.getCategoriesData = leftRes.data.cate
            }
            //2.right Data
            let rightRes = await getCategoriesDetails('/lk001')
            if(rightRes.success) {
                this.getCategoriesDetailsData = rightRes.data.cate
            }

            //3. hide loading
            this.isShowLoading = false

            //4.初始化滚动框架
            this.$nextTick(()=>{
                this.leftScroll = new BScoll('.leftWrapper',{probeType: 3})
                this.rightScroll = new BScoll('.rightWrapper',{probeType: 3})
            })
        },
        //2.处理left click
        async clickLeftLi(index) { 
            //2.1 改变索引值
            this.currentIndex = index

            //2.2 滚动到对应的位置
            let menuLists = this.$refs.menuList
            let el = menuLists[index]
            
            //2.3 滚动到元素上
            this.leftScroll.scrollToElement( el, 300 )

            //2.4 right Data
            let rightRes = await getCategoriesDetails(`/lk00${index + 1}`)
            if(rightRes.success) {
                this.getCategoriesDetailsData = rightRes.data.cate
            }
        }
    }
}
</script>


<style lang="less" scoped>
    #categroy {
        width: 100%;
        height: 100%;
        font-size: .12rem;
        overflow: hidden;
        .listWraaper{
            width: 100%;
            display: flex;
            flex-direction: row;
            overflow: hidden;
            position: absolute;
            top: .44rem;
            bottom: .5rem;
            .leftWrapper{
                width: 1rem;
                height: 100%;
                background: #f5f5f5;
                .warpper{
                    width: 100%;
                    .item{
                        width: 100%;
                        height: .4rem;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        border-bottom: 1px solid #eee;
                        span{
                            width: 100%;
                            text-align: center;
                            font-size: .12rem;
                            color: #222;  
                        }
                    }
                    .selectItem{
                        background: #fff;
                        span{
                            color: #fe625f;
                            border-left: 2px solid #fe625f;
                            font-weight: 900; 
                        }
                    }
                    
                }
            }
        }
    }
</style>
