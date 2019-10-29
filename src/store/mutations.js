import { ADD_GOODS } from './mutations-type'


export default {
    //1.往购物车中添加数据
    [ADD_GOODS](state, { goodsId, goodName, smallImage, goodsPrice }) {
        let shopCart = state.shopCart
            //1.判断商品是否存在
        if (shopCart[goodsId]) { //存在
            shopCart[goodsId]['num']++
        } else {
            shopCart[goodsId] = {
                "num": 1,
                "id:": goodsId,
                "name": goodsName,
                "small_image": smallImage,
                "price": goodsPrice
            }
        }
        //1.2 产生新对象
        state.shopCart = {...shopCart }
    }
}