import { useState } from 'react';
import Playlist from './Playlist';
import TimerContainer from './TimerContainer';
import RecentPlaylist from './RecentPlaylist';
import icons from '../../ultis/icons';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../redux/store/actions';

const { TfiAlarmClock, IoTrashBin } = icons;

const MainSidebar = () => {
    const [isRecent, setIsRecent] = useState(false);
    const [isOpenTimer, setIsOpenTimer] = useState(false);
    const { openCountdown } = useSelector((state) => state.app);
    const dispatch = useDispatch();
    return (
        <div className="w-[330px] bg-main-200 h-full border-l border-main flex flex-col text-xs z-50">
            <TimerContainer timer={{ isOpenTimer, setIsOpenTimer }} />
            <div className="h-[70px] flex-none py-[14px] text-white px-2">
                <div className="flex items-center justify-between">
                    <div className="flex bg-main-0 p-1 rounded-full font-semibold cursor-pointer select-none">
                        <span
                            className={`px-[15px] py-[5px] rounded-full text-blur-100 ${
                                !isRecent && 'bg-blur-200 text-white'
                            }`}
                            onClick={() => setIsRecent(false)}
                        >
                            Danh sách phát
                        </span>
                        <span
                            className={`px-[15px] py-[5px] rounded-full text-blur-100 ${
                                isRecent && 'bg-blur-200 text-white'
                            }`}
                            onClick={() => setIsRecent(true)}
                        >
                            Nghe gần đây
                        </span>
                    </div>
                    <span
                        className={`${
                            openCountdown ? 'bg-hightlight-100' : 'bg-main-0'
                        } p-2 rounded-full cursor-pointer`}
                        onClick={() => setIsOpenTimer(true)}
                    >
                        <TfiAlarmClock size={16} />
                    </span>
                    <span
                        className="bg-main-0 p-2 rounded-full cursor-pointer"
                        title="Xóa nghe gần đây"
                        onClick={() => {
                            dispatch(actions.deleteRecentPlaylist(true));
                        }}
                    >
                        <IoTrashBin size={16} />
                    </span>
                </div>
            </div>
            <Playlist isRecent={isRecent} />
            <RecentPlaylist isRecent={isRecent} />
        </div>
    );
};

export default MainSidebar;
