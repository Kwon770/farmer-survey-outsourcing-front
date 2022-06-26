import axios from 'axios';

export async function getAllDosis() {
    const response = await axios.get(process.env.REACT_APP_KOREAN_LOCATION_API_URL + '*00000000');
    return response.data.regcodes;
}

export async function getSigungus(dosiCode) {
    const response = await axios.get(process.env.REACT_APP_KOREAN_LOCATION_API_URL + dosiCode.substring(0,2) + '*000000')
    return response.data.regcodes.map((element) => ({
        code: element.code,
        name: element.name.split(' ')[1]
    })).filter((a) => a.name);
}

export async function getUpmeongdong(sigunguCode) {
    const response = await axios.get(process.env.REACT_APP_KOREAN_LOCATION_API_URL + sigunguCode.substring(0,4) + '*00')
    return response.data.regcodes.map((element) => ({
        code: element.code,
        name: element.name.split(' ')[2]
    })).filter((a) => a.name);
}