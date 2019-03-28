const axios = require('axios');
import {handleLiveInfo} from './util'
import Room from '../model/room';

const instance = axios.create({
    baseURL: 'http://open.douyucdn.cn/api/RoomApi/live/',
    timeout: 3000
})

function formatOne(data) {
    let owner = data.nickname;
    let name = data.room_name;
    let img = data.room_src;
    let url = data.url;
    let hot = data.hn;
    let website = 'Douyu';
    return new Room(owner, name, img, url, hot, website);
}

const apiMap = {
    'all': '',
    'lol': '1',
    'hs': '2',
    'hos': '35',
    'sc': '4',
    'ow': '148',
    'dance': '',
    'zzq': '650',
    'wow': '5',
    'dota2': '217',
    'warcraft': '55'
}

export default async function getData(category){
    let path = apiMap[category];
    if(!path) {
        return [];
    }

    let p = await instance.get(path, {
        params: {
            limit: 100
        }
    });
    return handleLiveInfo(p.data.data, formatOne, `Get Douyu ${category} Data Fail`)
}

