import { memo } from 'react';
import icons from '../ultis/icons';
import { Search } from './';
import { useSelector } from 'react-redux';

const { HiArrowLongRight, HiArrowLongLeft } = icons;

const Header = () => {
    const { scrolltop } = useSelector((state) => state.app);
    return (
        <div
            className={`fixed z-50 h-[70px] py-[10px] flex items-center justify-between gap-8 px-[60px] w-full ${
                scrolltop ? 'bg-transparent' : 'bg-main-200'
            }`}
        >
            <div className="flex items-center flex-1 gap-4">
                <div className="flex items-center gap-6 text-gray-500">
                    <HiArrowLongLeft size={24} />
                    <HiArrowLongRight size={24} />
                </div>
                <div className="w-[50%]">
                    <Search />
                </div>
            </div>
            <div>dang nhap</div>
        </div>
    );
};

export default memo(Header);
