import douyuGetData from './douyu';
import wangyiGetData from './wangyi';
import huyaGetData from './huya';
import bilibiliGetData from './bilibili'

async function getData(category) {
    let data = [];
    data = data.concat(await douyuGetData(category));
    data = data.concat(await wangyiGetData(category));
    data = data.concat(await huyaGetData(category));
    data = data.concat(await bilibiliGetData(category));

    data.sort((a, b) => {
        return b.hot - a.hot;
    })
    
    return data;
}


exports = module.exports = {
    getData
}