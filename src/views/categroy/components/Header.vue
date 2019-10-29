<template>
    <div id="searchHeader">
        <div class="headerBox">
            <i class="icfont">&#xe65c;</i>
            <span>输入商品名称</span>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>


<style lang="less" scoped>
    #searchHeader{
        width: 100%;
        height: .44rem;
        background: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        border-bottom: 1px solid #f5f5f5;
        .headerBox{
            width: 95%;
            height: .32rem;
            background: #f5f5f5;
            border-radius: .25rem; 
            display: flex;
            align-items: center;
            justify-content: center;
            i{
                font-size: .14rem;
                padding: .1rem;
                color: #999;
            }
            span{
                font-size: .14rem;
                 color: #999;   
            }
        }
    }
</style>
