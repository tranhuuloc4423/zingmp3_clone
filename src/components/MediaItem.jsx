import React, { memo } from "react";
import icons from "../ultis/icons";
import moment from "moment";

const { PiMusicNotesSimpleDuotone } = icons;

const MediaItem = ({ songData }) => {
    console.log(songData);
    return (
        <div className="media-item">
            <div className="flex items-center gap-[10px] w-1/2">
                <span>
                    <PiMusicNotesSimpleDuotone size={16} />
                </span>
                <img
                    src={songData?.thumbnail}
                    alt="thumbnail"
                    className="w-[40px] object-contain rounded-sm"
                />
                <div className="flex flex-col gap-1">
                    <h5 className="text-white text-sm font-semibold">
                        {songData?.title}
                    </h5>
                    <p className="text-blur-100">{songData?.artistsNames}</p>
                </div>
            </div>
            <div className="grow">{songData?.album?.title}</div>
            <div className="text-right">
                {moment.utc(songData?.duration * 1000).format("mm:ss")}
            </div>
        </div>
    );
};

export default memo(MediaItem);
