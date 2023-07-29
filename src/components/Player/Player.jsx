import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import * as apis from '../../apis/';
import * as actions from '../../redux/store/actions';
import { handleStyleProgress } from '../../ultis/fn';
import Info from './Info';
import Left from './Left';
import MainPlayer from './MainPlayer';

const Player = () => {
    const { currSongId, audio } = useSelector((state) => state.music);
    const thumbRef = useRef();
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchDetailSong = async () => {
            dispatch(actions.setLoadingSong(true));
            const [res1, res2] = await Promise.all([
                apis.apiGetDetailSong(currSongId),
                apis.apiGetSong(currSongId),
            ]);
            dispatch(actions.setLoadingSong(false));

            if (res1.data.err === 0) {
                dispatch(actions.setCurrSongData(res1.data.data));
            }
            if (res2.data.err === 0) {
                audio.pause();
                dispatch(actions.setAudio(new Audio(res2?.data?.data['128'])));
            } else {
                audio.pause();
                dispatch(actions.setAudio(new Audio()));
                dispatch(actions.play(false));
                toast.warn(res2.data.msg);
                handleStyleProgress(thumbRef, 100);
            }
        };
        fetchDetailSong();
    }, [currSongId]);

    return (
        <div className="fixed bottom-0 right-0 left-0 z-50 flex h-[90px] bg-main-300 px-5 py-[15px] items-center border-t border-main flex-none select-none">
            <div className="w-[30%] flex flex-auto items-center gap-2">
                <Info />
            </div>
            <div className="w-[40%] flex flex-col gap-2 items-center flex-auto">
                <MainPlayer thumbRef={thumbRef} handleStyleProgress={handleStyleProgress} />
            </div>
            <div className="w-[30%] flex-auto">
                <Left />
            </div>
        </div>
    );
};

export default Player;
