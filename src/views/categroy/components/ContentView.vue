<template>
    <div class="contentview">
        <div v-for="(categoriesDetail,index) in getCategoriesDetailsData" :key="index">
            <h1>{{categoriesDetail.name}}</h1>
            <ProdoctItem :products="categoriesDetail.products" />
        </div>
    </div>
</template>
<script>
import ProdoctItem from './ProdoctItem';
export default {
    components:{
        ProdoctItem
    },
    props: {
        getCategoriesDetailsData: Array
    }
}
</script>


<style lang="less" scoped>
   .contentview{
       flex: 1;
       h1{
           font-size: .12rem;
           line-height: .3rem;
           background: #f5f5f5;
           padding-left: .1rem;
       }
   }
</style>
