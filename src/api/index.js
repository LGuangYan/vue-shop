import ajax from './ajax'

// http://demo.itlike.com/web/xlmc/api/homeApi

//1.定义基础路径
const BASE_URL = 'http://demo.itlike.com/web/xlmc'

// http://demo.itlike.com/web/xlmc/api/homeApi?

export const getHomeData = () => ajax(BASE_URL + '/api/homeApi') //首页
export const getCategories = () => ajax(BASE_URL + '/api/homeApi/categories') //分类
export const getCategoriesDetails = (preParams) => ajax(BASE_URL + '/api/homeApi/categoriesdetail' + preParams) //分类商品