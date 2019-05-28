const axios = require('axios');
import {handleLiveInfo} from './util';
import Room from '../model/room';

const instance = axios.create({
    baseURL: 'https://cc.163.com/api/',
    timeout: 3000
})


function formatOne(data) {
    let owner = data.nickname;
    let name = data.title;
    let img = data.cover;
    let url = data.link;
    let hot = data.hot_score;
    let website = 'Wangyi';
    return new Room(owner, name, img, url, hot, website);
}

const apiMap = {
    'all': 'category',
    'lol': '',
    'hs': 'category/1005',
    'hos': '',
    'sc': '',
    'ow': 'category/1007',
    'dance': '',
    'zzq': 'category/9086',
    'wow': '',
    'dota2': '',
    'warcraft': ''
}

export default async function getData(category){
    let path = apiMap[category];
    if(!path) {
        return [];
    }

    path += '?format=json'

    let p = await instance.get(path)
    return handleLiveInfo(p.data.videos, formatOne, `Get Wangyi ${category} Data Fail`)
}
