import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import * as apis from "../apis/";
import icons from "../ultis/icons";

const {
    AiFillHeart,
    AiOutlineHeart,
    BsThreeDots,
    FaPlay,
    FaRandom,
    MdSkipPrevious,
    MdSkipNext,
    BsFillPauseFill,
    LuRepeat,
} = icons;

const Player = () => {
    const { currSongId, isPlaying } = useSelector((state) => state.music);
    const [songinfo, setSonginfo] = useState(null);
    const [source, setSource] = useState(null);
    const audioElement = new Audio(source);
    useEffect(() => {
        const fetchDetailSong = async () => {
            const [res1, res2] = await Promise.all([
                apis.apiGetDetailSong(currSongId),
                apis.apiGetSong(currSongId),
            ]);
            if (res1.data.err === 0) {
                console.log(res1);
                setSonginfo(res1.data.data);
            }
            if (res2.data.err === 0) {
                console.log(res2);
                setSource(res2.data?.data["128"]);
            }
        };
        fetchDetailSong();
    }, [currSongId]);

    // useEffect(() => {
    //     audioElement.play();
    // }, [currSongId]);
    const handleTogglePlay = () => {};

    return (
        <div className="flex h-[90px] bg-main-300 px-5 py-[15px] items-center border-t border-main-100">
            <div className="w-[30%] flex flex-auto items-center gap-2">
                <img
                    src={songinfo?.thumbnail}
                    alt="thumbnail"
                    className="w-16 h-16 object-cover rounded-md"
                />
                <div>
                    <h4 className="text-white text-sm">{songinfo?.title}</h4>
                    <p className="text-blur-100 text-xs">
                        {songinfo?.artistsNames}
                    </p>
                </div>
                <div className="flex gap-4 ml-4">
                    <span className="hover-icon">
                        <AiOutlineHeart size={16} />
                    </span>
                    <span className="hover-icon">
                        <BsThreeDots size={16} />
                    </span>
                </div>
            </div>
            <div className="w-[40%] flex flex-col gap-2 items-center flex-auto">
                <div className="flex gap-8 items-center">
                    <span className="hover-icon" title="Bật phát ngẫu nhiên">
                        <FaRandom size={16} />
                    </span>
                    <span className="hover-icon">
                        <MdSkipPrevious size={24} />
                    </span>
                    <span
                        className="p-3 border border-white rounded-full hover:border-hightlight-100 "
                        onClick={handleTogglePlay}
                    >
                        {isPlaying ? (
                            <BsFillPauseFill
                                size={24}
                                className="hover:text-hightlight-100 text-white"
                            />
                        ) : (
                            <FaPlay
                                size={24}
                                className="hover:text-hightlight-100 text-white"
                            />
                        )}
                    </span>
                    <span className="hover-icon">
                        <MdSkipNext size={24} />
                    </span>
                    <span className="hover-icon" title="Bật phát lại tất cả">
                        <LuRepeat size={16} />
                    </span>
                </div>
                <div>progress</div>
            </div>
            <div className="w-[30%] flex-auto">after</div>
        </div>
    );
};

export default Player;
