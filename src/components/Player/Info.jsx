import React from 'react';
import icons from '../../ultis/icons';

const { AiOutlineHeart, BsThreeDots } = icons;

const Info = ({ songinfo }) => {
    return (
        <>
            <img
                src={songinfo?.thumbnail}
                alt="thumbnail"
                className="w-16 h-16 object-cover rounded-md"
            />
            <div>
                <h4 className="text-white text-sm">{songinfo?.title}</h4>
                <p className="text-blur-100 text-xs">{songinfo?.artistsNames}</p>
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
