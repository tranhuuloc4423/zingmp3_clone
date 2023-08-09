import React from 'react';
import { useSelector } from 'react-redux';
import { Scrollbars } from 'react-custom-scrollbars-2';
import { SongInfo } from '../';

const Playlist = ({ isRecent }) => {
    const { currSongData, currSongId, playlist } = useSelector((state) => state.music);

    return (
        <>
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
        </>
    );
};

export default Playlist;
