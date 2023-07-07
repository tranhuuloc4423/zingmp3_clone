import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as apis from "../../apis";
import moment from "moment";
import { Playlist } from "../../components/";

const Album = () => {
    const { id } = useParams();
    const [playlist, setPlaylist] = useState({});

    useEffect(() => {
        const fetchDataPlaylist = async () => {
            const res = await apis.apiGetDetailPlaylist(id);
            if (res?.data.err === 0) {
                setPlaylist(res?.data.data);
            }
        };
        fetchDataPlaylist();
    }, [id]);
    return (
        <div className="flex gap-8 w-full">
            <div className="flex-none w-1/4 flex flex-col items-center gap-2">
                <img
                    src={playlist?.thumbnailM}
                    alt="thumbnail"
                    className="w-full object-contain rounded-lg"
                />
                <h3 className="text-white text-xl font-bold">
                    {playlist?.title}
                </h3>
                <div className="text-blur-100 text-xs flex flex-col items-center gap-2">
                    <span className="">
                        Cập nhật:{" "}
                        {moment
                            .unix(playlist?.contentLastUpdate)
                            .format("DD/MM/YYYY")}
                    </span>
                    <span className="">{playlist?.artistsNames}</span>
                    <span className="">
                        {Math.floor(playlist?.like / 1000)}K người yêu thích
                    </span>
                </div>
            </div>
            <div className="flex-auto">
                <header className="text-sm mb-[10px]">
                    <span className="text-blur-100">Lời tựa </span>
                    <span className="text-white">
                        {playlist?.sortDescription}
                    </span>
                </header>
                <Playlist
                    songs={playlist?.song?.items}
                    totalDuration={playlist?.song?.totalDuration}
                    total={playlist?.song?.total}
                />
            </div>
        </div>
    );
};

export default Album;
