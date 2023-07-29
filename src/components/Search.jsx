import React, { useState } from 'react';
import icons from '../ultis/icons';
import * as actions from '../redux/store/actions';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import paths from '../ultis/paths';
const { AiOutlineSearch } = icons;

const Search = () => {
    const [keyword, setKeyword] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleSearch = (e) => {
        if (e.keyCode === 13) {
            dispatch(actions.search(keyword));
            navigate(`/${paths.SEARCH}/${paths.ALL}`);
        }
    };
    return (
        <div className="flex bg-main-0 px-4 py-2 h-10 rounded-[20px] gap-2 text-white">
            <span className="mr-1">
                <AiOutlineSearch size={24} />
            </span>
            <input
                type="text"
                className="outline-none bg-inherit w-full placeholder:text-white"
                placeholder="Tìm kiếm bài hát, nghệ sĩ, lời bài hát..."
                value={keyword}
                onKeyUp={handleSearch}
                onChange={(e) => setKeyword(e.target.value)}
            />
        </div>
    );
};

export default Search;
