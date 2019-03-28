
var Router = require('koa-router');
import api from '../api'

var router = new Router();

router
    .get('/category/:category', async (ctx, next) => {
        ctx.response.body = await getData(ctx.params.category);
    })
    .get('/categories', (ctx, next) => {
        ctx.response.body = {
            'all': '全部',
            'lol': '英雄联盟',
            'hs': '炉石传说',
            'hos': '风暴英雄',
            'sc': '星际争霸',
            'ow': '守望先锋',
            'dance': '唱歌跳舞',
            'zzq': '自走棋',
            'wow': '魔兽世界',
            'dota2': 'DOTA2',
            'warcraft': '魔兽争霸'
        }
    })

async function getData(category){
    return await api.getData(category)
}

module.exports = router;