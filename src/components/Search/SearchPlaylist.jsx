import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getArtist } from '../../redux/store/actions';
import { SectionItem, Section } from '../';

const SearchPlaylist = () => {
    const { searchData, searchArtist } = useSelector((state) => state.music);
    const dispatch = useDispatch();
    const [playlist, setPlaylist] = useState([]);
    console.log(searchArtist);
    useEffect(() => {
        dispatch(getArtist(searchData?.top?.alias));
        setPlaylist(searchArtist?.sections?.find((item) => item?.sectionId === 'aSingle')?.items);
    }, [searchData]);

    return (
        <Section
            data={playlist}
            title={'playlist/album'}
            childNum={playlist?.length}
            childStyles={'flex-wrap'}
            childTitle
        />
    );
};

export default SearchPlaylist;
