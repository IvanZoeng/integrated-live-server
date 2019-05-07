
const axios = require('axios');
import {handleLiveInfo} from './util';
import Room from '../model/room';

const instance = axios.create({
    baseURL: 'https://api.live.bilibili.com/room/v3/area/getRoomList',
    timeout: 3000
})


function formatOne(data) {
    let owner = data.uname;
    let name = data.title;
    let img = data.user_cover;
    let url = 'https://live.bilibili.com/' + data.roomid;
    let hot = data.online;
    let website = 'Bilibili';
    return new Room(owner, name, img, url, hot, website);
}

const apiMap = {
    'all': '',
    'lol': '86',
    'hs': '91',
    'hos': '114',
    'sc': '93',
    'ow': '87',
    'dance': '',
    'zzq': '239',
    'wow': '83',
    'dota2': '92',
    'warcraft': '181'
}

export default async function getData(category){
    let gameId = apiMap[category];
    if(!gameId) {
        return [];
    }

    let p = await instance.get('', {
        params: {
            platform: 'web',
            parent_area_id: 2,
            cate_id: 0,
            area_id: gameId,
            sort_type: '',
            page: 1,
            page_size: 300
        }
    });
    return handleLiveInfo(p.data.data.list, formatOne, `Get Bilibili ${category} Data Fail`)
}
