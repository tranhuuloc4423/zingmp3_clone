import React from 'react';
import { useSelector } from 'react-redux';
import { Scrollbars } from 'react-custom-scrollbars-2';

import { SongInfo } from '../';

const RecentPlaylist = ({ isRecent }) => {
    const { recentSongs } = useSelector((state) => state.music);
    return (
        <>
            {recentSongs && isRecent ? (
                <>
                    <div className="bg-main-300 flex flex-col px-[5px] flex-auto pb-[90px]">
                        <Scrollbars autoHide style={{ width: '100%', height: '100%' }}>
                            {recentSongs?.map((item) => (
                                <SongInfo key={item?.encodeId} data={item} thumbsize={'w-10'} />
                            ))}
                        </Scrollbars>
                    </div>
                </>
            ) : (
                <div>Không có lịch sử</div>
            )}
        </>
    );
};

export default RecentPlaylist;
