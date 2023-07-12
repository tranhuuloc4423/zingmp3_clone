import React, { memo } from 'react';
import icons from '../ultis/icons';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../redux/store/actions';
import { formatSecond } from '../ultis/fn';
import { AudioLoading } from './Loading';
const { PiMusicNotesSimpleDuotone, TbPlayerPlayFilled } = icons;

const MediaItem = ({ songData }) => {
    const { isPlaying } = useSelector((state) => state.music);
    const { currSongId } = useSelector((state) => state.music);
    const activeSong = currSongId === songData?.encodeId;
    const dispatch = useDispatch();
    return (
        <div
            className={`media-item ${activeSong && 'bg-overlay-300'}`}
            onClick={() => {
                dispatch(actions.setCurrSong(songData?.encodeId));
                dispatch(actions.play(true));
                dispatch(actions.playAlbum(true));
            }}
        >
            <div className="flex items-center gap-[10px] w-1/2">
                <span>
                    <PiMusicNotesSimpleDuotone size={16} />
                </span>
                <div className="w-[40px] rounded-sm overflow-hidden flex justify-center items-center relative">
                    <img
                        src={songData?.thumbnail}
                        alt="thumbnail"
                        className="w-full object-contain "
                    />
                    <span className="absolute">
                        {activeSong && isPlaying ? (
                            <AudioLoading size={20} color={'#9b4de0'} />
                        ) : (
                            <TbPlayerPlayFilled
                                size={20}
                                color="white"
                                className={`media-item-play ${!activeSong && 'hidden'}`}
                            />
                        )}
                    </span>
                </div>
                <div className="flex flex-col gap-1">
                    <h5 className="text-white text-sm font-semibold">{songData?.title}</h5>
                    <p className="text-blur-100">{songData?.artistsNames}</p>
                </div>
            </div>
            <div className="grow">{songData?.album?.title}</div>
            <div className="text-right">{formatSecond(songData?.duration)}</div>
        </div>
    );
};

export default memo(MediaItem);
