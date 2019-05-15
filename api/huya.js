const axios = require('axios');
import {handleLiveInfo} from './util';
import Room from '../model/room';

const instance = axios.create({
    baseURL: 'https://www.huya.com/cache.php',
    timeout: 3000
})


function formatOne(data) {
    let owner = data.nick;
    let name = data.roomName;
    let img = data.screenshot;
    let url = 'https://www.huya.com/' + data.profileRoom;
    let hot = data.totalCount;
    let website = 'Huya';
    return new Room(owner, name, img, url, hot, website);
}

const apiMap = {
    'all': '',
    'lol': '1',
    'hs': '393',
    'hos': '1450',
    'sc': '5',
    'ow': '2174',
    'dance': '',
    'zzq': '5017',
    'wow': '8',
    'dota2': '7',
    'warcraft': '4615',
    'mrfz': '4925'
}

export default async function getData(category){
    let gameId = apiMap[category];
    if(!gameId) {
        return [];
    }

    let p = await instance.get('', {
        params: {
            m: 'LiveList',
            do: 'getLiveListByPage',
            gameId: gameId,
            tagAll: 1
        }
    });
    return handleLiveInfo(p.data.data.datas, formatOne, `Get Huya ${category} Data Fail`)
}
