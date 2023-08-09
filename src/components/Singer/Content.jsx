import React, { useRef, useState } from 'react';
import { Section, ArtistItem } from '../';
import { useSelector } from 'react-redux';
import { stringsLimit } from '../../ultis/fn';
import zingAward from '../../assets/zingAward.svg';
import { Scrollbars } from 'react-custom-scrollbars-2';
import icons from '../../ultis/icons';

const { IoClose } = icons;

const Content = () => {
    const { searchArtist } = useSelector((state) => state.music);
    const songs = searchArtist?.sections?.find((item) => item?.sectionType === 'song');
    const playlists = searchArtist?.sections?.filter((item) => item?.sectionType === 'playlist');
    const artists = searchArtist?.sections?.find((item) => item?.sectionType === 'artist');
    const hasAward = searchArtist?.awards;
    const bio = searchArtist?.biography;
    const [openBio, setOpenBio] = useState(false);
    const [hoverAwards, setHoverAwards] = useState(false);

    return (
        <div>
            <div className="mt-[480px] px-[60px]">
                <Section
                    data={songs?.items}
                    title={'Bài Hát'}
                    child={'media'}
                    media={{ duration: true }}
                    childStyles={'flex flex-wrap items-center justify-between gap-4'}
                />
                {playlists?.map((playlist, index) => (
                    <Section key={index} data={playlist?.items} title={playlist?.title} />
                ))}

                <Section title={'Nghệ Sĩ/OA'} child={'other'}>
                    <div className="flex flex-wrap gap-3 w-full">
                        {artists?.items?.map((item) => (
                            <ArtistItem key={item?.id} data={item} dir width="" />
                        ))}
                    </div>
                </Section>
                <div className="flex flex-col gap-6 w-full mt-10">
                    <span className="text-xl font-bold text-white">Về {searchArtist?.name}</span>
                    <div className="flex gap-6">
                        <img
                            src={searchArtist?.thumbnailM}
                            className="rounded-md flex-none w-[40%] h-[350px] object-top object-cover"
                        />
                        <div className="flex flex-col w-[40%] gap-8 text-blur-100 text-sm">
                            <div>
                                {bio && (
                                    <span
                                        dangerouslySetInnerHTML={{
                                            __html: stringsLimit(bio, 100),
                                        }}
                                    />
                                )}
                                <span
                                    className="text-white uppercase text-xs font-bold cursor-pointer"
                                    onClick={() => setOpenBio(true)}
                                >
                                    xem thêm
                                </span>
                            </div>
                            <div
                                className={`${
                                    openBio ? 'block' : 'hidden'
                                } fixed inset-0 z-50 bg-overlay-500 flex justify-center items-center`}
                                onClick={() => setOpenBio(false)}
                            >
                                <div
                                    className="relative w-[450px] h-[500px] bg-main-500 rounded-md p-6 flex flex-col items-center gap-4"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                    }}
                                >
                                    <IoClose
                                        size={24}
                                        color="white"
                                        className="absolute right-3 top-3 cursor-pointer"
                                        onClick={() => setOpenBio(false)}
                                    />
                                    <img
                                        src={searchArtist?.thumbnail}
                                        className="w-[120px] rounded-full"
                                        alt="thumbnail"
                                    />
                                    <span className="text-white text-xl">{searchArtist?.name}</span>
                                    <Scrollbars autoHide style={{ width: '100%', height: '80%' }}>
                                        <span
                                            dangerouslySetInnerHTML={{
                                                __html: bio,
                                            }}
                                        />
                                    </Scrollbars>
                                </div>
                            </div>

                            <div className="flex gap-6">
                                <div>
                                    <div className="text-white text-xl font-bold">
                                        {`${Number(
                                            searchArtist?.totalFollow?.toFixed(1)
                                        ).toLocaleString()}`}
                                    </div>
                                    <div>Người quan tâm</div>
                                </div>
                                {hasAward && (
                                    <>
                                        <div>
                                            <div className="text-white text-xl font-bold">
                                                {hasAward?.length}
                                            </div>
                                            <div>Giải thưởng</div>
                                        </div>
                                        <div
                                            className="relative"
                                            onMouseEnter={() => setHoverAwards(true)}
                                            onMouseLeave={() => setHoverAwards(false)}
                                        >
                                            <img
                                                src={zingAward}
                                                alt="award"
                                                className="w-[50px] h-[50px] bg-white"
                                            />
                                            <div
                                                className={`${
                                                    hoverAwards ? 'block' : 'hidden'
                                                } absolute bottom-[150%] left-[-40px] w-[300px] bg-black p-4 rounded-md animate-appear`}
                                            >
                                                <div className="border-t-black border-b-transparent border-r-transparent border-l-transparent z-50 border-[10px] absolute bottom-[-20px] left-[50px]"></div>
                                                {hasAward?.map((item, index) => (
                                                    <div key={index} className={``}>
                                                        {item}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="h-[500px]"></div>
        </div>
    );
};

export default Content;
