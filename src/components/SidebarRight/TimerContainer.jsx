import { useEffect, useState } from 'react';
import moment from 'moment';
import Timer from './Timer';
import { timerArray } from '../../ultis/menu';
import { Button } from '../';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../redux/store/actions';

const TimerContainer = ({ timer }) => {
    const { isOpenTimer, setIsOpenTimer } = timer;
    const { setTimer, openCountdown } = useSelector((state) => state.app);

    const [isEmpty, setIsEmpty] = useState(false);
    const dispatch = useDispatch();

    const [time, setTime] = useState({
        hour: '00',
        minute: '00',
    });

    const handleTime = (time) => {
        let minutes = Number(time.minute) * 60;
        let hours = Number(time.hour) * 3600;
        let total = minutes + hours;
        console.log(total);
        dispatch(actions.setTimer(total));
    };

    useEffect(() => {
        if (time.hour === '00' && time.minute === '00') {
            setIsEmpty(true);
        } else {
            setIsEmpty(false);
        }
    }, [time]);

    return (
        <div
            className={`fixed inset-0 bg-overlay-500 z-[99] flex justify-center items-center ${
                isOpenTimer ? 'block' : 'hidden'
            }`}
            onClick={() => {
                setIsOpenTimer(false);
            }}
        >
            {setTimer === 0 ? (
                <div
                    className="p-6 flex flex-col items-center gap-4 bg-main-500 rounded-md"
                    onClick={(e) => {
                        e.stopPropagation();
                    }}
                >
                    <span className="text-white text-lg font-bold bg-gr">
                        Hẹn Giờ Dừng Phát Nhạc
                    </span>
                    <div className="bg-main-400 p-6 rounded-md text-lg flex items-center  gap-2 text-blur-100 uppercase">
                        <Timer data={{ time, setTime }} isHour arr={timerArray.hours} />
                        <Timer data={{ time, setTime }} arr={timerArray.minutes} />
                    </div>
                    <span className="text-blur-100">
                        Dự tính dừng phát nhạc lúc:{' '}
                        {time &&
                            moment()
                                .add(+time.hour, 'hours')
                                .add(+time.minute, 'minutes')
                                .format('hh:mm, DD/MM/YYYY')}
                    </span>
                    <Button
                        children={'lưu lại'}
                        active
                        width="w-full"
                        addStyles={`${isEmpty ? 'cursor-default bg-gray-400' : ''} py-3`}
                        handleClick={() => {
                            if (!isEmpty) {
                                handleTime(time);
                                setIsOpenTimer(false);
                                setTime({
                                    hour: '00',
                                    minute: '00',
                                });
                            }
                        }}
                    />
                    <Button children={'hủy'} handleClick={() => setIsOpenTimer(false)} />
                </div>
            ) : (
                <div className="text-white p-4 bg-main-500 rounded-md flex flex-col items-center gap-4 text-base">
                    <div className="text-xl font-bold">Xóa Hẹn Giờ</div>
                    <span>Bạn có chắc chắn muốn xóa hẹn giờ?</span>
                    <div>
                        <Button
                            children={`Không`}
                            handleClick={() => {
                                setIsOpenTimer(false);
                            }}
                        />
                        <Button
                            children={`Có`}
                            active
                            handleClick={() => {
                                dispatch(actions.setOpenCountdown(false));
                                dispatch(actions.setTimer(0));
                            }}
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default TimerContainer;
