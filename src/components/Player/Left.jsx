import { useEffect, useState } from 'react';
import icons from '../../ultis/icons';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../redux/store/actions';

const { BsMusicNoteList, TbVolume2, TbVolume3, TbVolume } = icons;

const Left = () => {
    const [volume, setVolume] = useState(100);
    const { closeSidebar } = useSelector((state) => state.app);
    const { audio } = useSelector((state) => state.music);
    const dispatch = useDispatch();
    useEffect(() => {
        audio.volume = volume / 100;
    }, [volume]);
    return (
        <div className="flex items-center gap-4 justify-end text-white text-xl">
            <span
                onClick={() =>
                    setVolume((prev) => {
                        if (Number(prev) === 0) {
                            return 50;
                        } else if (Number(prev) === 50) {
                            return 100;
                        } else if (Number(prev) === 100) {
                            return 0;
                        } else {
                            return 0;
                        }
                    })
                }
                className="cursor-pointer"
            >
                {Number(volume) > 51 ? (
                    <TbVolume />
                ) : Number(volume) === 0 ? (
                    <TbVolume3 />
                ) : (
                    <TbVolume2 />
                )}
            </span>
            <input
                type="range"
                min={0}
                max={100}
                step={1}
                value={volume}
                onChange={(e) => setVolume(e.target.value)}
            />
            <span
                className={`${
                    !closeSidebar ? 'bg-hightlight-100' : 'bg-main-100'
                } p-1 rounded-md hover:brightness-150 cursor-pointer`}
                onClick={() => dispatch(actions.closeSidebar(!closeSidebar))}
            >
                <BsMusicNoteList />
            </span>
        </div>
    );
};

export default Left;
