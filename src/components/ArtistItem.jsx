import React, { useState } from 'react';
import icons from '../ultis/icons';
import { formatNumber } from '../ultis/fn';
import { useNavigate } from 'react-router-dom';
const { BiUserPlus } = icons;

const ArtistItem = ({ data, dir, width = 'w-full' }) => {
    const [isHover, setIsHover] = useState(false);
    const navigate = useNavigate();
    const { thumbnail, name, totalFollow } = data;
    return (
        <div
            className={`flex p-[10px] gap-4 items-center rounded-md ${width} ${
                dir ? 'flex-col' : 'bg-main-0'
            }`}
        >
            <div
                className={`overflow-hidden relative rounded-full cursor-pointer ${
                    dir ? 'w-[180px]' : 'w-[84px]'
                }`}
                onMouseEnter={() => setIsHover(true)}
                onMouseLeave={() => setIsHover(false)}
                onClick={() => {
                    navigate(`/${data?.alias}`);
                }}
            >
                <div
                    className={`absolute inset-0 z-10 bg-overlay-300 ${
                        isHover ? 'block' : 'hidden'
                    } `}
                ></div>
                <img
                    src={thumbnail}
                    alt="thumbnail"
                    className={`w-full z-20 ${isHover ? 'animate-scale-up' : 'animate-scale-down'}`}
                />
            </div>
            <div
                className={`text-sm text-blur-100 flex flex-col  ${
                    dir ? 'gap-2 items-center' : 'gap-1'
                }`}
            >
                {!dir && <span className="">Nghệ sĩ</span>}
                <span className="text-base text-white">{name}</span>
                <span className="text-xs">
                    {totalFollow && formatNumber(totalFollow, 2)} quan tâm
                </span>
                {dir && (
                    <span className="px-4 py-2 rounded-full bg-hightlight-100 text-white flex items-center gap-1 cursor-pointer">
                        <BiUserPlus size={20} />
                        <span className="uppercase">quan tâm</span>
                    </span>
                )}
            </div>
        </div>
    );
};

export default ArtistItem;
