import React, { useEffect, useState, useRef, memo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../../redux/store/actions';
import { formatSecond, handleStyleProgress } from '../../ultis/fn';
import icons from '../../ultis/icons';
import { SongLoading } from '../Loading';
import { toast } from 'react-toastify';

const { FaRandom, MdSkipPrevious, MdSkipNext, BsFillPauseFill, LuRepeat, TbPlayerPlayFilled } =
    icons;
const MainPlayer = ({ thumbRef }) => {
    const { currSongId, isPlaying, playlist, audio, isLoadingSong, currSongData } = useSelector(
        (state) => state.music
    );

    const playlistSong = playlist?.song?.items;
    const [currSec, setCurrSec] = useState(0);
    const [isShuffle, setIsShuffle] = useState(false);
    const [isRepeat, setIsRepeat] = useState(false);
    const progressId = useRef();
    const trackRef = useRef();
    const dispatch = useDispatch();
    const handlePlaylist = (value) => {
        audio.pause();
        if (playlistSong) {
            let curretSongIndex;
            playlistSong?.forEach((item, index) => {
                if (item.encodeId === currSongId) curretSongIndex = index;
            });
            dispatch(actions.setCurrSong(playlistSong[curretSongIndex + value]?.encodeId));
            dispatch(actions.play(true));
        }
    };

    const handleProgress = () => {
        progressId.current = setInterval(() => {
            let percent = Math.round((audio.currentTime * 10000) / currSongData?.duration) / 100;
            let progress = 100 - percent;
            handleStyleProgress(thumbRef, progress);
            setCurrSec(Math.round(audio.currentTime));
        }, 1000);
    };

    useEffect(() => {
        audio.pause();
        audio.load();
        if (isPlaying) {
            audio.play();
            handleProgress();
        }
        return () => {
            progressId.current && clearInterval(progressId.current);
        };
    }, [audio]);

    const handleTogglePlay = async () => {
        progressId.current && clearInterval(progressId.current);
        if (isPlaying) {
            audio.pause();
            dispatch(actions.play(false));
        } else {
            audio.play();
            handleProgress();
            dispatch(actions.play(true));
        }
    };
    const handleClickProgress = (e) => {
        const trackRect = trackRef.current.getBoundingClientRect();
        const percent = Math.round(((e.clientX - trackRect.left) * 10000) / trackRect.width) / 100;
        let progress = 100 - percent;
        handleStyleProgress(thumbRef, progress);
        audio.currentTime = (percent * currSongData?.duration) / 100;
        setCurrSec(audio.currentTime);
    };
    const handlePrevSong = () => {
        handlePlaylist(-1);
    };
    const handleNextSong = () => {
        handlePlaylist(1);
    };

    const handleShuffle = () => {
        const randomIndex = Math.round(Math.random() * playlistSong?.length) - 1;
        dispatch(actions.setCurrSong(playlistSong[randomIndex]?.encodeId));
        dispatch(actions.play(true));
    };

    // handle when song ended
    audio.onended = () => {
        if (isShuffle) {
            handleShuffle();
        } else if (isRepeat) {
            handleNextSong();
        } else {
            audio.play();
        }
    };
    return (
        <>
            <div className="flex gap-8 items-center">
                <span
                    onClick={() => {
                        setIsShuffle((prev) => !prev);
                        setIsRepeat(false);
                    }}
                    className={`hover-icon ${isShuffle && 'text-purple-600'}`}
                    title="Bật phát ngẫu nhiên"
                >
                    <FaRandom size={16} />
                </span>
                <span
                    onClick={handlePrevSong}
                    className={`${!playlistSong ? 'text-gray-500' : 'hover-icon'}`}
                >
                    <MdSkipPrevious size={24} />
                </span>
                <span
                    className="p-2 border border-white rounded-full cursor-pointer"
                    onClick={handleTogglePlay}
                >
                    {isLoadingSong ? (
                        <SongLoading size={24} />
                    ) : isPlaying ? (
                        <BsFillPauseFill
                            size={24}
                            className="hover:text-hightlight-100 text-white"
                        />
                    ) : (
                        <TbPlayerPlayFilled
                            size={24}
                            className="hover:text-hightlight-100 text-white"
                        />
                    )}
                </span>
                <span
                    onClick={handleNextSong}
                    className={`${!playlistSong ? 'text-gray-500' : 'hover-icon'}`}
                >
                    <MdSkipNext size={24} />
                </span>
                <span
                    onClick={() => {
                        setIsRepeat((prev) => !prev);
                        setIsShuffle(false);
                    }}
                    className={`hover-icon ${isRepeat && 'text-purple-600'}`}
                    title="Bật phát tất cả"
                >
                    <LuRepeat size={16} />
                </span>
            </div>
            <div className="w-full flex gap-2 items-center justify-center text-blur-100 text-xs">
                <span className="w-8 mx-1">{formatSecond(currSec)}</span>
                <div
                    onClick={handleClickProgress}
                    ref={trackRef}
                    className="progress-song relative w-3/4  h-1 hover:h-2 cursor-grab bg-white rounded-full"
                >
                    <div
                        ref={thumbRef}
                        className="progress-song-overlay absolute top-0 left-0 bottom-0 rounded-full"
                    >
                        <span className="absolute w-3 h-3 right-[-6px] top-1/2 translate-y-[-50%] bg-red-400 rounded-full"></span>
                    </div>
                </div>
                <span className="w-8 mx-1">{formatSecond(currSongData?.duration)}</span>
            </div>
        </>
    );
};

export default memo(MainPlayer);
