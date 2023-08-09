import { useEffect, useState } from 'react';
import { Scrollbars } from 'react-custom-scrollbars-2';

const Timer = ({ data, isHour, arr }) => {
    const { time, setTime } = data;
    const [focus, setFocus] = useState(false);
    return (
        <span
            className={`relative p-2 border-b-2 ${
                focus ? 'border-hightlight-100' : 'border-white'
            }`}
        >
            <input
                value={isHour ? time.hour : time.minute}
                onChange={(e) => {
                    if (e.target.value >= 0 && e.target.value <= 99) {
                        let value = e.target.value;
                        isHour
                            ? setTime((prev) => ({ ...prev, hour: value }))
                            : setTime((prev) => ({ ...prev, minute: value }));
                    }
                }}
                className={`bg-transparent outline-none border-none w-[35px] placeholder:text-2xl text-2xl text-white`}
                onFocus={() => setFocus(true)}
                onBlur={() => {
                    if (time.hour === '') {
                        setTime((prev) => ({ ...prev, hour: '00' }));
                    }
                    if (time.minute === '') {
                        setTime((prev) => ({ ...prev, minute: '00' }));
                    }
                    setTimeout(() => {
                        setFocus(false);
                    }, 150);
                }}
            />

            <div
                className={`${
                    focus ? 'block' : 'hidden'
                } absolute top-[120%] right-0 left-0 rounded-md text-sm lowercase bg-main-500 text-white`}
            >
                <Scrollbars autoHide style={{ width: '100%', height: '150px' }}>
                    <div className="flex flex-col items-center">
                        {arr?.map((item) => (
                            <div
                                key={item}
                                className="w-full hover:bg-main-400 text-center py-2 cursor-pointer"
                                onClick={() => {
                                    if (isHour) {
                                        setTime((prev) => ({ ...prev, hour: item }));
                                    } else {
                                        setTime((prev) => ({ ...prev, minute: item }));
                                    }
                                }}
                            >
                                {item} {isHour ? 'giờ' : 'phút'}
                            </div>
                        ))}
                    </div>
                </Scrollbars>
            </div>
            <span>{isHour ? 'Giờ' : 'Phút'}</span>
        </span>
    );
};

export default Timer;
