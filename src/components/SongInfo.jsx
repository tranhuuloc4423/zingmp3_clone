import React from 'react';
import icons from '../ultis/icons';
import { AudioLoading, SongLoading } from './';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../redux/store/actions';

import moment from 'moment';
import 'moment/locale/vi';

const { PiMusicNotesSimpleDuotone, TbPlayerPlayFilled } = icons;

const SongInfo = ({ data, releaseDate, thumbsize, isAlbum, styles }) => {
    const { thumbnail, title, artistsNames, encodeId } = data;
    const { isPlaying, currSongId, audio, isLoadingSong } = useSelector((state) => state.music);
    const dispatch = useDispatch();
    const activeSong = currSongId === encodeId;
    const handleClick = () => {
        if (!isAlbum) {
            audio.pause();
            dispatch(actions.setCurrSong(encodeId));
            dispatch(actions.play(true));
        }
    };
    return (
        <div
            className={`${styles ? styles : 'media-item gap-[10px] flex-auto z-10'} ${
                activeSong && 'bg-main-0'
            } ${!isAlbum && 'p-[10px]'}`}
            onClick={handleClick}
        >
            <div
                className={`rounded-sm overflow-hidden flex justify-center items-center relative ${
                    thumbsize ? thumbsize : 'w-[60px]'
                }`}
            >
                <img src={thumbnail} alt="thumbnail" className="w-full object-contain " />
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
                <h5 className="text-white text-sm font-semibold">{title}</h5>
                <p className="text-blur-100">{artistsNames}</p>
                {releaseDate && (
                    <span className="text-xs text-blur-100">
                        {moment(releaseDate * 1000).fromNow()}
                    </span>
                )}
            </div>
        </div>
    );
};

export default SongInfo;
