import douyuGetData from './douyu';
import wangyiGetData from './wangyi';
import huyaGetData from './huya';
import bilibiliGetData from './bilibili'

async function getData(category) {
    let data = [];

    let douyuPromise = douyuGetData(category).then(res => data = [...data, ...res])
    let wangyiPromise = wangyiGetData(category).then(res => data = [...data, ...res])
    let huyaPromise = huyaGetData(category).then(res => data = [...data, ...res])
    let bilibiliPromise = bilibiliGetData(category).then(res => data = [...data, ...res])

    await Promise.all([douyuPromise, wangyiPromise, huyaPromise, bilibiliPromise]).then(() => {
        data.sort((a, b) => {
            return b.hot - a.hot;
        })
    })

    return data;
}


exports = module.exports = {
    getData
}