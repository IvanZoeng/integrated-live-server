

export function handleLiveInfo(infos, func, failMessage){
    if(infos) {
        let formatedData = [];
        for(let info of infos) {
            formatedData.push(func(info));
        }
        return formatedData;
    } else {
        console.log(failMessage);
        return [];
    }
}