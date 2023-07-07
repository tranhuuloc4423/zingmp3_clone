import React, { memo } from "react";
import icons from "../ultis/icons";
import { MediaItem } from "./";
import moment from "moment";
import { Scrollbars } from "react-custom-scrollbars-2";

const { FaSort } = icons;

const Playlist = ({ songs, total, totalDuration }) => {
    console.log({ songs, total, totalDuration });
    return (
        <div className="flex flex-col">
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
            <Scrollbars style={{ width: "100%", height: 600 }} className="pr-2">
                {songs?.map((item) => (
                    <MediaItem key={item?.encodeId} songData={item} />
                ))}
            </Scrollbars>

            <div className="flex items-center gap-2 text-sm text-blur-100 lowercase mt-3">
                <span>{total} Bài hát</span>
                <span>•</span>
                <span>
                    {moment
                        .utc(totalDuration * 1000)
                        .format("h [giờ] m [phút]")}
                </span>
            </div>
        </div>
    );
};

export default memo(Playlist);
