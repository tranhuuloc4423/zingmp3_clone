import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Section, SongInfo, MediaItem } from '../';

const SearchAll = () => {
    const { searchData } = useSelector((state) => state.music);
    console.log(searchData);
    const topType = searchData?.top?.objectType;

    const topData = [
        { data: searchData?.top, type: topType },
        { data: searchData?.songs[2], type: 'song' },
        { data: searchData?.songs[3], type: 'song' },
    ];
    console.log(topData);

    return (
        <div className="px-[59px]">
            <Section title={'Nổi Bật'} child="other">
                <div className="flex justify-between w-full gap-8">
                    {topData?.map((item, index) => {
                        if (item?.type === 'song') {
                            return (
                                <MediaItem
                                    key={index}
                                    songData={item?.data}
                                    thumbsize={'w-[84px]'}
                                    prefixInfo={'Bài hát'}
                                    restInfo={{}}
                                    borderBottom={false}
                                />
                            );
                        } else if (item?.type === 'artist') {
                            return <div key={index}>artist</div>;
                        }
                    })}
                </div>
            </Section>
            <Section data={searchData?.playlists} title={'Playlist/Album'} />
            <Section
                data={searchData?.songs}
                title={'Bài Hát'}
                child={'media'}
                childStyles={'flex flex-wrap items-center justify-between gap-4'}
            />
            <div className="h-[400px]"></div>
        </div>
    );
};

export default SearchAll;
