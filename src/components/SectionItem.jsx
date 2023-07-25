import React, { memo, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import icons from '../ultis/icons';

const { AiFillHeart, AiOutlineHeart, GoPlay, BsThreeDots } = icons;

const SectionItem = ({ data }) => {
    const navigate = useNavigate();
    const [hover, setHover] = useState(false);
    const imgRef = useRef();
    const desc = data?.sortDescription?.split(' ');
    let newDesc = '';
    for (let i = 0; i < 15; i++) {
        if (desc[i]) {
            newDesc += ' ' + desc[i];
        }
    }
    const handleHoverEnter = () => {
        setHover(true);
        imgRef.current.classList.remove('animate-scale-down');
        imgRef.current.classList.add('animate-scale-up');
    };

    const handleHoverLeave = () => {
        setHover(false);
        imgRef.current.classList.remove('animate-scale-up');
        imgRef.current.classList.add('animate-scale-down');
    };
    return (
        <div className="flex flex-col gap-2 flex-1">
            <div
                className="section-item relative overflow-hidden rounded-md cursor-pointer"
                onMouseEnter={handleHoverEnter}
                onMouseLeave={handleHoverLeave}
                onClick={() => {
                    navigate(data?.link?.split('.')[0], { state: { playAlbum: false } });
                }}
            >
                {hover && (
                    <div className="absolute inset-0 bg-overlay-300 z-10">
                        <div className="flex justify-around text-white items-center text-2xl absolute inset-0">
                            <span className="hover-icon hover:bg-[rgba(255,255,255,0.3)]">
                                <AiOutlineHeart />
                            </span>
                            <GoPlay
                                size={44}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    navigate(data?.link?.split('.')[0], {
                                        state: { playAlbum: true },
                                    });
                                }}
                                className="hover:text-hightlight-100"
                            />
                            <span className="hover-icon hover:bg-[rgba(255,255,255,0.3)]">
                                <BsThreeDots />
                            </span>
                        </div>
                    </div>
                )}
                <img ref={imgRef} src={data?.thumbnailM} alt="thumbnail" className="w-full" />
            </div>
            <p className="text-blur-100 text-sm mt-2">
                {desc.length >= 15 ? newDesc + '...' : desc.join(' ')}
            </p>
        </div>
    );
};

export default memo(SectionItem);
