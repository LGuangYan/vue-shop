import axios from 'axios'

export default function ajax(url = '', parmas = {}, type = 'GET') {
    // 1.声明变量
    let promise
    //2.返回一个promise对象
    return new Promise(( resolve, reject ) => {
        //2.1 判断请求的类型
        if(type.toUpperCase() === 'GET') { // get请求
            //2.2 拼接字符串
            let parmasStr = ''
            //2.3 遍历
            Object.keys(parmas).forEach( key => {
                parmasStr += key + '=' + parmas[key] + '&'
            })
            //2.4 过滤最后一个&
            if( parmasStr ) {
                parmasStr = parmasStr.substr(0, parmasStr.lastIndexOf('&'))
            }
            //2.5 拼接完整路径
            url += '?' + parmasStr
            //2.6 发起get请求
            promise = axios.get( url ) 

        }else if(type.toUpperCase() === 'POST') { //post 
            //2.7 发起post请求
            promise = axios.post( url, parmas )
        }
        //2.8 处理结果并返回结果
        promise.then((res) => {
            resolve( res.data )
        }).catch( error => {
            reject( error )
        })
    })
}