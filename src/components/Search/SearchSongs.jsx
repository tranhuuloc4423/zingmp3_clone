import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../redux/store/actions';
import { MediaItem } from '../';

const SearchSongs = () => {
    const { searchData, playlist } = useSelector((state) => state.music);
    const [songs, setSongs] = useState([]);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(actions.fetchDataPlaylist(searchData?.top?.playlistId));
        setSongs(playlist?.song?.items);
    }, [songs]);
    return (
        <div className="">
            {songs?.map((item) => (
                <MediaItem data={item} restInfo={{ albumTitle: true, duration: true }} />
            ))}
        </div>
    );
};

export default SearchSongs;
