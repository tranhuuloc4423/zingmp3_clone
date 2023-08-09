import React, { useEffect, useRef, useState, memo } from 'react';
import icons from '../ultis/icons';
import * as actions from '../redux/store/actions';
import { useDispatch, useSelector } from 'react-redux';
import { createSearchParams, useNavigate, useParams } from 'react-router-dom';
import paths from '../ultis/paths';
const { AiOutlineSearch, IoClose, FaHistory } = icons;

const Search = () => {
    const { searchHistory } = useSelector((state) => state.app);
    const [keyword, setKeyword] = useState('');
    const [focus, setFocus] = useState(false);
    const { singer } = useParams();
    const inputRef = useRef();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const getData = (keyword) => {
        console.log('kkk');
        inputRef.current.blur();
        dispatch(actions.setSearchHistory(keyword));
        dispatch(actions.search(keyword));
        navigate({
            pathname: `/${paths.SEARCH}/${paths.ALL}`,
            search: createSearchParams({
                q: keyword,
            }).toString(),
        });
    };
    const handleSearch = (e) => {
        if (e.keyCode === 13) {
            getData(keyword);
        }
    };
    const handleFocus = () => {
        setFocus(true);
    };

    useEffect(() => {}, [keyword]);

    return (
        <div
            className={`relative flex px-4 py-2 w-auto h-10 gap-2 text-white z-50 ${
                focus
                    ? 'bg-main-500 rounded-t-[20px]'
                    : singer
                    ? 'bg-blur-300 rounded-[20px]'
                    : 'bg-main-0 rounded-[20px]'
            }`}
        >
            {keyword && (
                <IoClose
                    size={24}
                    className="absolute cursor-pointer right-4"
                    onClick={() => setKeyword('')}
                />
            )}
            <AiOutlineSearch size={24} className="mr-1" />
            <input
                ref={inputRef}
                type="text"
                className="outline-none bg-transparent w-full placeholder:text-white"
                placeholder="Tìm kiếm bài hát, nghệ sĩ, lời bài hát..."
                value={keyword}
                onKeyUp={handleSearch}
                onChange={(e) => setKeyword(e.target.value)}
                onFocus={handleFocus}
                onBlur={() => {
                    setTimeout(() => {
                        setFocus(false);
                    }, 200);
                }}
            />
            <div
                className={`absolute bg-main-500 right-0 left-0 top-full h-auto z-50 rounded-b-[20px] p-4 ${
                    focus ? 'block' : 'hidden'
                }`}
            >
                <span>Tìm kiếm gần đây</span>
                <div className="mt-2">
                    {searchHistory &&
                        searchHistory?.map((item, index) => (
                            <div
                                key={index}
                                className="hover:bg-blur-100 py-2 px-4 rounded-md cursor-pointer flex items-center gap-2"
                                onClick={() => {
                                    setKeyword(item);
                                    getData(item);
                                }}
                            >
                                <FaHistory />
                                {item}
                            </div>
                        ))}
                </div>
            </div>
        </div>
    );
};

export default memo(Search);
