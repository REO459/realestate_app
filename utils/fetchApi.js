import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

// headers: {
//     'X-RapidAPI-Key': '7258317b99msh2046e6f16734df2p159982jsn4b23bf7863f3',
//     'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
//   }

export const fetchApi = async (url) => {
    const { data } = await axios.get((url), {
        headers: {
            'X-RapidAPI-Key': '7258317b99msh2046e6f16734df2p159982jsn4b23bf7863f3',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
        }
    });

    return data;
}