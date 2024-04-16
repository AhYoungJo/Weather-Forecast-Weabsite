import { TimeData, TimesByDateT } from '../Store/Type/Interface';

export const getMaxTemp = (datas: TimeData[] | null | undefined): number | string => {
    if (datas === null || datas === undefined || datas.length === 0) {
        return 'loading...';
    }
    const data = datas.reduce((prev, current) => {
        return (prev.temp_max > current.temp_max) ? prev : current;
    });

    return data.temp_max;
};

export const getMinTemp = (datas: TimeData[] | null | undefined): number | string => {
    if (datas === null || datas === undefined || datas.length === 0) {
        return 'loading...';
    }

    const data = datas.reduce((prev, current) => {
        return (prev.temp_min < current.temp_min) ? prev : current;
    })

    return data.temp_min;
};

export const getIcon = (datas: TimeData[] | null | undefined): string => {
    if (datas === null || datas === undefined || datas.length === 0) {
        return 'loading...';
    }
    let icon;
    for (let i = 0; i < datas.length; i++) {
        icon = datas[i].icon;

        if (datas[i].main.toLowerCase() === 'snow') {
            icon = datas[i].icon
            return icon
        }

        if (datas[i].main.toLowerCase() === 'rain') {
            icon = datas[i].icon
            return icon;
        }

        if (datas[i].main.toLowerCase() === 'clouds') {
            icon = datas[i].icon
            return icon
        }

        if (datas[i].main.toLowerCase() === 'clear') {
            icon = datas[i].icon
            return icon
        }
    }
    return 'loading...';
};

export const getNthData = (obj: TimesByDateT, id: number) => {
    return obj[Object.keys(obj)[id]];
}

