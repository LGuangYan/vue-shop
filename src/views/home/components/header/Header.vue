<template>
    <div class="headerWarpper">
        <div class="locationWarpper">
            <i class="icfont leftIcon">&#xe650;</i>
            <span>科兴科学园</span>
            <i class="icfont rightIcon">&#xe79b;</i>
            <i></i>
        </div>
        <div class="searchWarpper">
            <div class="search">
                <i class="icfont searchIcon">&#xe65c;</i>
                <span>输入商品名称</span>
            </div>
        </div>
    </div>
</template>

<style lang="less" scoped>
    .headerWarpper{
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 44px;
        display: flex;
        background: #fff;
        z-index: 2;
        .locationWarpper{
            flex: 2;
            height: 44px;
            display: flex;
            align-items: center;
            .leftIcon{
                width: .34rem;
                font-size: .18rem;
                text-align: center;
                color: #888;
            }
            span{
                font-size: .12rem;
                color: #333;
                max-width: .8rem;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
            }
            .rightIcon{
                width: .24rem;
                font-size: .12rem;
                text-align: center;
                color: #888;
            }
        }
        .searchWarpper{
            flex: 3;
            height: 44px;
            font-size: .12rem;
            display: flex;
            justify-content: center;
            align-items: center;
            .search{
                width: 80%;
                height: .3rem;
                border: 1px solid #f5f5f5;
                border-radius: 25px;
                display: flex;
                align-items: center;
                .searchIcon{
                    padding: 0 .05rem;
                    color: #888;
                    font-size: .14rem;
                }
                span{
                    color: #888;
                }
            }
        }
    }
</style>
