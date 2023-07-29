import React from 'react';
import icons from '../../ultis/icons';
import { useSelector } from 'react-redux';
import { stringsLimit } from '../../ultis/fn';

const { AiOutlineHeart, BsThreeDots } = icons;

const Info = () => {
    const { currSongData } = useSelector((state) => state.music);
    return (
        <>
            <img
                src={
                    currSongData?.thumbnail
                        ? currSongData?.thumbnail
                        : 'https://static-zmp3.zmdcdn.me/skins/common/logo600.png'
                }
                alt="thumbnail"
                className="w-16 h-16 object-cover rounded-md"
            />
            <div>
                <h4 className="text-white text-sm font-semibold">
                    {currSongData?.title && stringsLimit(currSongData?.title, 8)}
                </h4>
                <p className="text-blur-100 text-xs">
                    {currSongData?.artistsNames && stringsLimit(currSongData?.artistsNames, 5)}
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
        </>
    );
};

export default Info;
