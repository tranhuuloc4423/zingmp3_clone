import React from "react";
import icons from "../ultis/icons";

const { AiOutlineSearch } = icons;

const Search = () => {
    return (
        <div className="flex bg-main-100 px-4 py-2 h-10 rounded-[20px] gap-2 text-[#dadada]">
            <span className="mr-1">
                <AiOutlineSearch size={24} />
            </span>
            <input
                type="text"
                className="outline-none bg-main-100 text-white w-full"
                placeholder="Tìm kiếm bài hát, nghệ sĩ, lời bài hát..."
            />
        </div>
    );
};

export default Search;
