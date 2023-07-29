import React, { memo } from 'react';
import icons from '../ultis/icons';
import { MediaItem } from './';
import moment from 'moment';
import { Scrollbars } from 'react-custom-scrollbars-2';
import { useSelector } from 'react-redux';

const { FaSort } = icons;

const Playlist = () => {
    const { playlist } = useSelector((state) => state.music);
    const song = playlist?.song;
    return (
        <div className="flex flex-col h-full">
            <header className="flex items-center uppercase py-2 text-blur-100 text-xs font-semibold">
                <div className="flex w-1/2 gap-[10px] items-center">
                    <FaSort size={16} />
                    <span>Bài Hát</span>
                </div>
                <div className="grow">Album</div>
                <div>Thời gian</div>
            </header>
            <Scrollbars autoHide style={{ width: '100%', height: '80%' }} className="pr-2">
                {song?.items.map((item) => (
                    <MediaItem key={item?.encodeId} songData={item} isAlbum />
                ))}
            </Scrollbars>

            <div className="flex items-center gap-2 text-sm text-blur-100 lowercase mt-3">
                <span>{song?.total} Bài hát</span>
                <span>•</span>
                <span>{moment.utc(song?.totalDuration * 1000).format('h [giờ] m [phút]')}</span>
            </div>
        </div>
    );
};

export default memo(Playlist);
