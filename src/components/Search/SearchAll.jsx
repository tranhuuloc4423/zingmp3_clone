import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { Section, ArtistItem, MediaItem } from '../';

const SearchAll = () => {
    const { searchData } = useSelector((state) => state.music);
    const [topData, setTopData] = useState([]);
    const searchRef = useRef();

    useEffect(() => {
        searchRef.current.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            inline: 'nearest',
        });
        if (searchData?.artists && searchData?.songs) {
            setTopData([
                { data: searchData?.artists[0], type: 'artist' },
                { data: searchData?.songs[0], type: 'song' },
                { data: searchData?.songs[1], type: 'song' },
            ]);
        }
    }, [searchData]);

    return (
        <div ref={searchRef}>
            {searchData && (
                <>
                    {topData && (
                        <Section title={'Nổi Bật'} child="other">
                            <div className="flex justify-between w-full gap-8">
                                {topData?.map((item, index) => {
                                    if (item?.type === 'song') {
                                        return (
                                            <MediaItem
                                                key={index}
                                                data={item?.data}
                                                thumbsize={'w-[84px]'}
                                                label={'Bài hát'}
                                                restInfo={{}}
                                                borderBottom={false}
                                            />
                                        );
                                    } else if (item?.type === 'artist') {
                                        return <ArtistItem key={index} data={item?.data} />;
                                    }
                                })}
                            </div>
                        </Section>
                    )}
                    {searchData?.playlists && (
                        <Section data={searchData?.playlists} title={'Playlist/Album'} />
                    )}
                    {searchData?.songs && (
                        <Section
                            data={searchData?.songs}
                            title={'Bài Hát'}
                            child={'media'}
                            media={{ duration: true }}
                            childStyles={'flex flex-wrap items-center justify-between gap-4'}
                        />
                    )}
                    {searchData?.artists && (
                        <Section title={'Nghệ Sĩ/OA'} child={'other'}>
                            <div className="flex flex-wrap gap-3 w-full">
                                {searchData?.artists?.map((item) => (
                                    <ArtistItem key={item?.id} data={item} dir width="" />
                                ))}
                            </div>
                        </Section>
                    )}
                    <div className="h-[400px]"></div>
                </>
            )}
        </div>
    );
};

export default SearchAll;
