import React, { memo } from 'react';
import icons from '../ultis/icons';
import { MediaItem } from './';
import moment from 'moment';
import { Scrollbars } from 'react-custom-scrollbars-2';
import { useSelector } from 'react-redux';

const { FaSort } = icons;

const Playlist = ({ total, totalDuration }) => {
    const { playlist } = useSelector((state) => state.music);
    return (
        <div className="flex flex-col h-full">
            <header className="media-item uppercase">
                <div className="flex w-1/2 gap-[10px]">
                    <span>
                        <FaSort size={16} />
                    </span>
                    <span>Bài Hát</span>
                </div>
                <div className="grow">Album</div>
                <div>Thời gian</div>
            </header>
            <Scrollbars style={{ width: '100%', height: '80%' }} className="pr-2">
                {playlist?.map((item) => (
                    <MediaItem key={item?.encodeId} songData={item} />
                ))}
            </Scrollbars>

            <div className="flex items-center gap-2 text-sm text-blur-100 lowercase mt-3">
                <span>{total} Bài hát</span>
                <span>•</span>
                <span>{moment.utc(totalDuration * 1000).format('h [giờ] m [phút]')}</span>
            </div>
        </div>
    );
};

export default memo(Playlist);
