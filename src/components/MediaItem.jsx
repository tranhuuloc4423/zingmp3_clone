import React, { memo } from 'react';
import icons from '../ultis/icons';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../redux/store/actions';
import { formatSecond } from '../ultis/fn';
import { AudioLoading } from './Loading';
import { SongInfo } from './';
import 'moment/locale/vi';
const { PiMusicNotesSimpleDuotone, TbPlayerPlayFilled, BsThreeDots } = icons;

const MediaItem = ({
    songData,
    width = 'w-full',
    restInfo = { duration: true, albumTitle: true, icon: true },
    prefixInfo,
    thumbsize = 'w-10',
    borderBottom = true,
}) => {
    const { currSongId, audio } = useSelector((state) => state.music);
    const activeSong = currSongId === songData?.encodeId;
    const dispatch = useDispatch();
    const checkAlbumTitle = restInfo?.albumTitle && !restInfo?.duration;
    const checkDuration = restInfo?.duration && !restInfo?.albumTitle;
    const checkBoth = restInfo?.albumTitle && restInfo?.duration;
    return (
        <div
            className={`media-item relative p-[10px] z-10 ${width} ${activeSong && 'bg-main-0'} ${
                borderBottom && 'border-b border-main'
            }`}
            onClick={() => {
                audio.pause();
                dispatch(actions.setCurrSong(songData?.encodeId));
                dispatch(actions.play(true));
                dispatch(actions.playAlbum(true));
                dispatch(actions.setRecentSong(songData));
            }}
        >
            <div className="overlay-media inset-0 bg-main-0 absolute hidden items-center rounded-md z-10">
                <span
                    className="absolute right-[10px] hover-icon"
                    onClick={(e) => {
                        e.stopPropagation();
                        console.log('options');
                    }}
                >
                    <BsThreeDots size={20} />
                </span>
            </div>
            {restInfo?.icon && <PiMusicNotesSimpleDuotone size={16} className="mr-2 z-10" />}
            <SongInfo data={songData} thumbsize={thumbsize} isAlbum prefixInfo={prefixInfo} />
            {checkAlbumTitle && <div className="grow z-10">{songData?.album?.title}</div>}
            {checkDuration && <div className="text-right">{formatSecond(songData?.duration)}</div>}
            {checkBoth && (
                <div className="w-1/2 flex items-center">
                    <div className="grow z-10">{songData?.album?.title}</div>
                    <div className="text-right">{formatSecond(songData?.duration)}</div>
                </div>
            )}
        </div>
    );
};

export default memo(MediaItem);
