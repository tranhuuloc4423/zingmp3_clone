import React, { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import * as apis from '../../apis';
import moment from 'moment';
import { Playlist } from '../../components/';
import { AudioLoading, SongLoading, Loading } from '../../components/Loading';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../redux/store/actions';
import icons from '../../ultis/icons';

const { TbPlayerPlayFilled } = icons;

const Album = () => {
    const { isPlaying, audio, isLoadingSong } = useSelector((state) => state.music);
    const { isLoadingData } = useSelector((state) => state.app);
    const { id } = useParams();
    const location = useLocation();
    const [playlist, setPlaylist] = useState({});
    const dispatch = useDispatch();
    const follow = Math.floor(playlist?.like / 1000);

    useEffect(() => {
        const fetchDataPlaylist = async () => {
            dispatch(actions.setLoadingData(true));
            const res = await apis.apiGetDetailPlaylist(id);
            dispatch(actions.setLoadingData(false));
            if (res?.data.err === 0) {
                setPlaylist(res?.data?.data);
                dispatch(actions.setPlaylist(res?.data?.data?.song?.items));
            }
        };
        fetchDataPlaylist();
    }, [id]);

    useEffect(() => {
        if (location.state?.playAlbum) {
            const random = Math.round(Math.random() * playlist?.song?.items?.length - 1);
            dispatch(actions.setCurrSong(playlist?.song?.items[random]?.encodeId));
            dispatch(actions.play(true));
        }
    }, [id, playlist]);

    const playSong = () => {
        dispatch(actions.play(true));
        audio.play();
    };

    const pauseSong = () => {
        dispatch(actions.play(false));
        audio.pause();
    };
    console.log('album page render');
    return (
        <div className="flex gap-8 w-full h-[80%] mt-[30px] relative">
            {isLoadingData ? (
                <div className="absolute inset-0 flex items-center justify-center">
                    <Loading />
                </div>
            ) : (
                <>
                    <div className="flex-none w-1/4 flex flex-col items-center gap-3">
                        <div
                            className={`w-full overflow-hidden relative ${
                                isLoadingSong ? '' : isPlaying ? `rounded-full` : `rounded-lg`
                            }`}
                        >
                            <img
                                src={playlist?.thumbnailM}
                                alt="thumbnail"
                                className={`w-full object-contain  ${
                                    isLoadingSong
                                        ? ''
                                        : isPlaying
                                        ? `animate-rotate-center`
                                        : `animate-rotate-pause`
                                }`}
                            />
                            <div className="inset-0 hover:bg-overlay-300 absolute flex justify-center items-center">
                                <span className="text-white p-2 border border-white rounded-full cursor-pointer">
                                    {isLoadingSong ? (
                                        <SongLoading size={30} />
                                    ) : isPlaying ? (
                                        <span onClick={pauseSong}>
                                            <AudioLoading size={30} />
                                        </span>
                                    ) : (
                                        <span onClick={playSong}>
                                            <TbPlayerPlayFilled size={30} />
                                        </span>
                                    )}
                                </span>
                            </div>
                        </div>
                        <h3 className="text-white text-xl font-bold">{playlist?.title}</h3>
                        <div className="text-blur-100 text-xs flex flex-col items-center gap-2">
                            <span>
                                Cập nhật:{' '}
                                {moment.unix(playlist?.contentLastUpdate).format('DD/MM/YYYY')}
                            </span>
                            <span>{playlist?.artistsNames}</span>
                            <span>
                                {follow >= 1000 ? `${follow}M` : `${follow}K`} người yêu thích
                            </span>
                        </div>
                    </div>
                    <div className="flex-auto">
                        <header className="text-sm mb-[10px]">
                            <span className="text-blur-100">Lời tựa </span>
                            <span className="text-white">{playlist?.sortDescription}</span>
                        </header>
                        <Playlist
                            totalDuration={playlist?.song?.totalDuration}
                            total={playlist?.song?.total}
                        />
                    </div>
                </>
            )}
        </div>
    );
};

export default Album;
