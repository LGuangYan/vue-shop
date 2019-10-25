<template>
    <div class="nav">
        <div class="navItem" v-for="(nav, index) in nav_list" :key="index">
            <img :src="nav.icon_url" :alt="nav.name">
            <span>{{nav.name}}</span>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        nav_list: Array
    }
}
</script>

<style lang="less" scoped>
    .nav{
        width: 100%;
        height: 1.6rem;
        background: #fff;
        display: flex;
        flex-wrap: wrap;
        .navItem{
            width: 20%;
            height: .75rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            img{
                display: inherit;
                width: .4rem;
            }
            span{
                display: inherit;
                font-size: .12rem;
                margin-top: .05rem;
            }
        }
    }
</style>