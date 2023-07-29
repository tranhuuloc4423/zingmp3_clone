import React, { useState } from 'react';
import icons from '../ultis/icons';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../redux/store/actions';
import { SongInfo } from './';
import { Scrollbars } from 'react-custom-scrollbars-2';

const { TfiAlarmClock, IoTrashBin } = icons;

const SidebarRight = () => {
    const [isRecent, setIsRecent] = useState(false);
    const { currSongData, currSongId, playlist, recentSongs } = useSelector((state) => state.music);
    const dispatch = useDispatch();

    return (
        <div className="w-[330px] bg-main-200 h-full border-l border-main flex flex-col text-xs">
            <div className="h-[70px] flex-none py-[14px] text-white px-2">
                <div className="flex items-center justify-between">
                    <div className="flex bg-main-0 p-1 rounded-full font-semibold cursor-pointer select-none">
                        <span
                            className={`px-[15px] py-[5px] rounded-full text-blur-100 ${
                                !isRecent && 'bg-blur-200 text-white'
                            }`}
                            onClick={() => setIsRecent(false)}
                        >
                            Danh sách phát
                        </span>
                        <span
                            className={`px-[15px] py-[5px] rounded-full text-blur-100 ${
                                isRecent && 'bg-blur-200 text-white'
                            }`}
                            onClick={() => setIsRecent(true)}
                        >
                            Nghe gần đây
                        </span>
                    </div>
                    <span className="bg-main-0 p-2 rounded-full">
                        <TfiAlarmClock size={16} />
                    </span>
                    <span
                        className="bg-main-0 p-2 rounded-full"
                        title="Xóa nghe gần đây"
                        onClick={() => {
                            dispatch(actions.deleteRecentPlaylist(true));
                        }}
                    >
                        <IoTrashBin size={16} />
                    </span>
                </div>
            </div>
            {!isRecent && (
                <>
                    <div className="px-2">
                        {currSongData && (
                            <SongInfo
                                data={currSongData}
                                thumbsize={'w-10'}
                                bgActive={'bg-hightlight-100'}
                                styles={`flex gap-[10px] rounded-md z-10 items-center`}
                            />
                        )}
                    </div>
                    <div className="flex flex-col flex-auto">
                        <header className="text-sm pt-[15px] px-4 pb-[5px]">
                            <span className="text-white font-semibold">Tiếp theo</span>
                            <div>
                                <span className="text-blur-100 mr-1">Từ playlist</span>
                                <span className="text-[#c273ed] font-semibold">
                                    {playlist?.title}
                                </span>
                            </div>
                        </header>
                        <Scrollbars style={{ width: '100%', height: '80%' }}>
                            <div className="bg-main-300 flex-auto p-2">
                                {playlist?.song?.items
                                    .filter((item) => item.encodeId !== currSongId)
                                    .map((song) => (
                                        <SongInfo
                                            key={song?.encodeId}
                                            data={song}
                                            thumbsize={'w-10'}
                                        />
                                    ))}
                            </div>
                        </Scrollbars>
                    </div>
                </>
            )}

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
        </div>
    );
};

export default SidebarRight;
