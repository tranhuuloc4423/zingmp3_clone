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
    data,
    width = 'w-full',
    restInfo = { duration: true, albumTitle: true, icon: true },
    prefixInfo,
    label,
    thumbsize = 'w-10',
    borderBottom = true,
}) => {
    const { currSongId, audio } = useSelector((state) => state.music);
    const activeSong = currSongId === data?.encodeId;
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
                dispatch(actions.setCurrSong(data?.encodeId));
                dispatch(actions.play(true));
                dispatch(actions.playAlbum(true));
                dispatch(actions.setRecentSong(data));
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
            <SongInfo
                data={data}
                thumbsize={thumbsize}
                isAlbum
                prefixInfo={prefixInfo}
                label={label}
            />
            {checkAlbumTitle && <div className="grow z-10">{data?.album?.title}</div>}
            {checkDuration && <div className="text-right">{formatSecond(data?.duration)}</div>}
            {checkBoth && (
                <div className="w-1/2 flex items-center">
                    <div className="grow z-10">{data?.album?.title}</div>
                    <div className="text-right">{formatSecond(data?.duration)}</div>
                </div>
            )}
        </div>
    );
};

export default memo(MediaItem);
