import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import * as apis from '../apis/';
import icons from '../ultis/icons';
import * as actions from '../redux/store/actions';
import { formatSecond } from '../ultis/fn';

const {
    // AiFillHeart,
    AiOutlineHeart,
    BsThreeDots,
    FaPlay,
    FaRandom,
    MdSkipPrevious,
    MdSkipNext,
    BsFillPauseFill,
    LuRepeat,
} = icons;
const Player = () => {
    const { currSongId, isPlaying, playlist } = useSelector((state) => state.music);
    const [songinfo, setSonginfo] = useState(null);
    const [audio, setAudio] = useState(new Audio());
    const [currSec, setCurrSec] = useState(0);
    const [isShuffle, setIsShuffle] = useState(false);
    const [isPlayAll, setIsPlayAll] = useState(false);
    const thumbRef = useRef();
    const progressId = useRef();
    const trackRef = useRef();
    const dispatch = useDispatch();

    const handleStyleProgress = (value) => {
        thumbRef.current.style = `right: ${value}%`;
    };
    const handlPlaylist = (value) => {
        if (playlist) {
            let curretSongIndex;
            playlist.forEach((item, index) => {
                if (item.encodeId === currSongId) curretSongIndex = index;
            });
            dispatch(actions.setCurrSong(playlist[curretSongIndex + value].encodeId));
            dispatch(actions.play(true));
        }
    };

    const handleProgress = () => {
        progressId.current = setInterval(() => {
            let percent = Math.round((audio.currentTime * 10000) / songinfo.duration) / 100;
            let progress = 100 - percent;
            handleStyleProgress(progress);
            setCurrSec(Math.round(audio.currentTime));
        }, 200);
    };

    useEffect(() => {
        const fetchDetailSong = async () => {
            const [res1, res2] = await Promise.all([
                apis.apiGetDetailSong(currSongId),
                apis.apiGetSong(currSongId),
            ]);
            if (res1.data.err === 0) {
                setSonginfo(res1.data.data);
            }
            if (res2.data.err === 0) {
                audio.pause();
                setAudio(new Audio(res2?.data?.data['128']));
            } else {
                audio.pause();
                setAudio(new Audio());
                dispatch(actions.play(false));
                toast.warn(res2.data.msg);
                handleStyleProgress(100);
            }
        };
        fetchDetailSong();
    }, [currSongId]);

    useEffect(() => {
        progressId.current && clearInterval(progressId.current);
        audio.pause();
        audio.load();
        if (isPlaying) {
            audio.play();
            handleProgress();
        }
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
        handleStyleProgress(progress);
        audio.currentTime = (percent * songinfo.duration) / 100;
        setCurrSec(audio.currentTime);
    };
    const handlePrevSong = () => {
        handlPlaylist(-1);
    };
    const handleNextSong = () => {
        handlPlaylist(1);
    };

    const handleShuffle = () => {};

    return (
        <div className="flex h-[90px] bg-main-300 px-5 py-[15px] items-center border-t border-main-100">
            <div className="w-[30%] flex flex-auto items-center gap-2">
                <img
                    src={songinfo?.thumbnail}
                    alt="thumbnail"
                    className="w-16 h-16 object-cover rounded-md"
                />
                <div>
                    <h4 className="text-white text-sm">{songinfo?.title}</h4>
                    <p className="text-blur-100 text-xs">{songinfo?.artistsNames}</p>
                </div>
                <div className="flex gap-4 ml-4">
                    <span className="hover-icon">
                        <AiOutlineHeart size={16} />
                    </span>
                    <span className="hover-icon">
                        <BsThreeDots size={16} />
                    </span>
                </div>
            </div>
            <div className="w-[40%] flex flex-col gap-2 items-center flex-auto">
                <div className="flex gap-8 items-center">
                    <span
                        onClick={() => setIsShuffle((prev) => !prev)}
                        className={`hover-icon ${isShuffle && 'text-purple-600'}`}
                        title="Bật phát ngẫu nhiên"
                    >
                        <FaRandom size={16} />
                    </span>
                    <span
                        onClick={handlePrevSong}
                        className={`${!playlist ? 'text-gray-500' : 'hover-icon'}`}
                    >
                        <MdSkipPrevious size={24} />
                    </span>
                    <span
                        className="p-2 border border-white rounded-full"
                        onClick={handleTogglePlay}
                    >
                        {isPlaying ? (
                            <BsFillPauseFill
                                size={16}
                                className="hover:text-hightlight-100 text-white"
                            />
                        ) : (
                            <FaPlay size={16} className="hover:text-hightlight-100 text-white" />
                        )}
                    </span>
                    <span
                        onClick={handleNextSong}
                        className={`${!playlist ? 'text-gray-500' : 'hover-icon'}`}
                    >
                        <MdSkipNext size={24} />
                    </span>
                    <span className="hover-icon" title="Bật phát lại tất cả">
                        <LuRepeat size={16} />
                    </span>
                </div>
                <div className="w-full flex gap-2 items-center justify-center text-blur-100 text-xs">
                    <span>{formatSecond(currSec)}</span>
                    <div
                        onClick={handleClickProgress}
                        ref={trackRef}
                        className="relative w-3/4  h-1 hover:h-2 cursor-pointer bg-white rounded-full overflow-hidden"
                    >
                        <div
                            ref={thumbRef}
                            className="absolute top-0 left-0 bottom-0 bg-hightlight-100 rounded-full "
                        ></div>
                    </div>
                    <span>{formatSecond(songinfo?.duration)}</span>
                </div>
            </div>
            <div className="w-[30%] flex-auto">after</div>
        </div>
    );
};

export default Player;
