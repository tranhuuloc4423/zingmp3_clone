import React, { useEffect, useRef, memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getArtist } from '../../redux/store/actions/music';
import { Header, Content } from './';
const SingerMain = () => {
    const { singer } = useParams();
    const { searchArtist } = useSelector((state) => state.music);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getArtist(singer));
    }, [singer]);
    if (searchArtist) {
        console.log(searchArtist);
    }

    return (
        <div>
            <Header />
            <Content />
        </div>
    );
};

export default memo(SingerMain);
