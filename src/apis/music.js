import axios from '../axios';

export const apiGetSong = (id) =>
    new Promise(async (resolve, reject) => {
        try {
            const res = await axios({
                url: '/song',
                method: 'GET',
                params: { id },
            });
            resolve(res);
        } catch (error) {
            reject(error);
        }
    });

export const apiGetDetailSong = (id) =>
    new Promise(async (resolve, reject) => {
        try {
            const res = await axios({
                url: '/infosong',
                method: 'GET',
                params: { id },
            });
            resolve(res);
        } catch (error) {
            reject(error);
        }
    });

export const apiGetDetailPlaylist = (id) =>
    new Promise(async (resolve, reject) => {
        try {
            const res = await axios({
                url: '/detailplaylist',
                method: 'get',
                params: { id },
            });
            resolve(res);
        } catch (error) {
            reject(error);
        }
    });

export const apiSearch = (keyword) =>
    new Promise(async (resolve, reject) => {
        try {
            const res = await axios({
                url: '/search',
                method: 'get',
                params: { keyword },
            });
            resolve(res);
        } catch (error) {
            reject(error);
        }
    });
