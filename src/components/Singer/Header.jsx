import React, { useRef, useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import icons from '../../ultis/icons';
import { Button } from '../';
import zingAward from '../../assets/zingAward.svg';

const { GoPlay, BiUserPlus } = icons;

const Header = () => {
    const { searchArtist } = useSelector((state) => state.music);
    const isDefaultBg =
        searchArtist?.cover ===
        'https://zmp3-static.zmdcdn.me/skins/zmp3-v5.2/images/default_cover.png';
    const bgCover = isDefaultBg ? searchArtist?.thumbnail : searchArtist?.cover;
    const hasAward = searchArtist?.awards;
    const [hoverAwards, setHoverAwards] = useState(false);

    const singerRef = useRef();

    useEffect(() => {
        singerRef.current.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            inline: 'nearest',
        });
    }, [searchArtist]);

    return (
        <div ref={singerRef} className="absolute top-0 right-0 w-full h-[420px] overflow-hidden">
            <img src={bgCover} className={`w-full object-top shadow-inner shadow-gray-700 `} />
            <div
                className={`absolute inset-0 ${
                    isDefaultBg
                        ? 'bg-gradient-singer-overlay'
                        : 'bg-gradient-singer-overlay-default'
                }`}
            ></div>
            <div className={`bg-gradient-singer-top absolute top-0 left-0 right-0 h-[100px]`}></div>
            <div className={`bg-gradient-singer absolute bottom-0 left-0 right-0 h-[200px]`}></div>
            <div className="flex absolute bottom-0 right-0 left-0 px-[60px] py-6 items-center justify-between">
                <div className="flex items-center gap-8">
                    {isDefaultBg && (
                        <img src={searchArtist?.thumbnail} className={`w-[140px] rounded-full`} />
                    )}
                    <div className="flex flex-col gap-6">
                        <div className="flex items-center text-6xl font-bold text-white drop-shadow-2xl gap-2">
                            <span>{searchArtist?.name}</span>
                            <GoPlay />
                        </div>
                        <div className="flex gap-4 items-center">
                            <span className="text-blur-100 text-sm font-semibold">
                                {`${Number(
                                    searchArtist?.totalFollow?.toFixed(1)
                                ).toLocaleString()} người quan tâm`}
                            </span>
                            <Button
                                children={
                                    <span className="flex items-center gap-1">
                                        <BiUserPlus size={20} />
                                        {'quan tâm'}
                                    </span>
                                }
                            />
                        </div>
                    </div>
                </div>
                {hasAward && (
                    <div
                        className="relative text-blur-100 text-sm"
                        onMouseEnter={() => setHoverAwards(true)}
                        onMouseLeave={() => setHoverAwards(false)}
                    >
                        <img src={zingAward} alt="award" className="w-[50px] h-[50px] bg-white" />
                        <div
                            className={`${
                                hoverAwards ? 'block' : 'hidden'
                            } absolute bottom-[150%] right-[-40px] w-[300px] bg-black p-4 rounded-md animate-appear`}
                        >
                            <div className="border-t-black border-b-transparent border-r-transparent border-l-transparent z-50 border-[10px] absolute bottom-[-20px] right-[50px]"></div>
                            {hasAward?.map((item, index) => (
                                <div key={index}>{item}</div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Header;
