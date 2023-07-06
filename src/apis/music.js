import axios from "../axios";

export const getSong = (id) =>
    new Promise(async (resolve, reject) => {
        try {
            const res = await axios({
                url: "/song",
                method: "GET",
                params: { id },
            });
            resolve(res);
        } catch (error) {
            reject(error);
        }
    });

export const getDetailSong = (id) =>
    new Promise(async (resolve, reject) => {
        try {
            const res = await axios({
                url: "/infosong",
                method: "GET",
                params: { id },
            });
            resolve(res);
        } catch (error) {
            reject(error);
        }
    });
