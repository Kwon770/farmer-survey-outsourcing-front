import axios from 'axios';

export async function getAllDosis() {
    const response = await axios.get(process.env.REACT_APP_KOREAN_LOCATION_API_URL + '*00000000');
    return [
        ...(response.data.regcodes),
        {
            code: "3600000000",
            name: "세종특별자치시",
        }
    ];
}

export async function getSigungus(dosiCode) {
    const response = await axios.get(process.env.REACT_APP_KOREAN_LOCATION_API_URL + dosiCode.substring(0,2) + '*00000')
    let sigungus = [];
    response.data.regcodes.forEach((element) => {
        const e = {
            code: element.code,
            name: element.name.split(' ').length === 1 ? element.name : element.name.split(' ')[1]
        };

        let duplicated = false;
        sigungus.forEach((s) => {
            if (s.name === e.name) {
                duplicated = true;
                return false;
            }
        })

        if (!duplicated) {
            sigungus.push(e);
        }
    })

    sigungus.filter((a) => a.name);
    return sigungus;
}

export async function getUpmeongdong(sigunguCode) {
    const response = await axios.get(process.env.REACT_APP_KOREAN_LOCATION_API_URL + sigunguCode.substring(0,5) + '*00')

    let upmeongdons = [];
    response.data.regcodes.forEach((element) => {
        const e = {
            code: element.code,
            name: element.name.split(' ')[2]
        }

        let duplicated = false;
        upmeongdons.forEach((u) => {
            if (u.name === e.name) {
                duplicated = true;
                return false;
            }
        })

        if (!duplicated) {
            upmeongdons.push(e);
        }
    })


    upmeongdons.filter((a) => a.name);
    return upmeongdons;
}