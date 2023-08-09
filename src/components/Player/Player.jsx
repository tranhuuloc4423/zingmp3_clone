import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import * as apis from '../../apis/';
import * as actions from '../../redux/store/actions';
import { handleStyleProgress } from '../../ultis/fn';
import Info from './Info';
import Left from './Left';
import MainPlayer from './MainPlayer';
import icons from '../../ultis/icons';
import { formatSecond } from '../../ultis/fn';

const { IoClose } = icons;

const Player = () => {
    const { currSongId, audio } = useSelector((state) => state.music);
    const { setTimer, openCountdown } = useSelector((state) => state.app);
    const thumbRef = useRef();
    const intervalId = useRef();
    const dispatch = useDispatch();

    useEffect(() => {
        if (setTimer > 0) {
            dispatch(actions.setOpenCountdown(true));
            intervalId.current = setInterval(() => {
                console.log(setTimer);
                if (setTimer > 0) {
                    if (setTimer === 1) {
                        console.log('pause');
                        dispatch(actions.setOpenCountdown(false));
                        clearTimeout(intervalId.current);
                        audio.pause();
                    }
                    dispatch(actions.setTimerDec());
                }
            }, 1000);
        }
        return () => intervalId.current && clearTimeout(intervalId.current);
    }, [setTimer]);

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
            {openCountdown && (
                <div
                    className={`absolute top-0 left-1/2 translate-x-[-50%] translate-y-[-100%] bg-hightlight-100 rounded-t-md p-3 text-sm text-white flex items-center gap-2 z-50`}
                >
                    <span>Nhạc sẽ dừng sau: </span>
                    <span className="font-bold">{setTimer && formatSecond(setTimer)}</span>
                    <span
                        className={`cursor-pointer`}
                        onClick={() => {
                            if (intervalId) {
                                clearTimeout(intervalId.current);
                                dispatch(actions.setTimer(0));
                                dispatch(actions.setOpenCountdown(false));
                            }
                        }}
                    >
                        <IoClose size={24} />
                    </span>
                </div>
            )}
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
