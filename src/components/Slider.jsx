import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getArrSlider } from '../ultis/fn';
import * as actions from '../redux/store/actions';
import { useNavigate } from 'react-router-dom';
import { Button } from './';
import icons from '../ultis/icons';

const { GrFormNext, GrFormPrevious } = icons;

const Slider = () => {
    const { banner } = useSelector((state) => state.app);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [min, setMin] = useState(0);
    const [max, setMax] = useState(2);
    const [isAuto, setAuto] = useState(true);
    const intervalId = useRef();

    // animation for banner
    useEffect(() => {
        if (isAuto) {
            intervalId.current = setInterval(() => {
                handleAnimationBanner(1);
            }, 3000);
        }
        return () => {
            intervalId.current && clearInterval(intervalId.current);
        };
    }, [max, min, isAuto]);

    const handleAnimationBanner = (step) => {
        const sliderEls = document.getElementsByClassName('slider-item');
        const list = getArrSlider(min, max, sliderEls?.length - 1);
        for (let i = 0; i < sliderEls?.length; i++) {
            sliderEls[i]?.classList.remove(
                'animate-slide-right',
                'animate-slide-right2',
                'animate-slide-left',
                'animate-slide-left2',
                'order-last',
                'order-first',
                'order-2',
                'z-20',
                'z-10'
            );
            if (list.some((item) => item === i)) {
                sliderEls[i].style.cssText = `display: block`;
            } else {
                sliderEls[i].style.cssText = `display: none`;
            }
        }

        list.forEach((item) => {
            if (item === max) {
                sliderEls[max]?.classList.add(
                    'animate-slide-right',
                    'order-last',
                    `${step < 0 ? 'z-20' : 'z-10'}`
                );
            } else if (item === min) {
                sliderEls[min]?.classList.add(
                    'animate-slide-left',
                    'order-first',
                    `${step < 0 ? 'z-10' : 'z-20'}`
                );
            } else {
                sliderEls[item]?.classList.add(
                    `animate-slide-${step < 0 ? 'right' : 'left'}2`,
                    'order-2',
                    'z-20'
                );
            }
        });
        if (step === 1) {
            setMin((prev) => (prev === sliderEls.length - 1 ? 0 : prev + step));
            setMax((prev) => (prev === sliderEls.length - 1 ? 0 : prev + step));
        }
        if (step === -1) {
            setMin((prev) => (prev === 0 ? sliderEls.length - 1 : prev + step));
            setMax((prev) => (prev === 0 ? sliderEls.length - 1 : prev + step));
        }
    };

    const handleClick = useCallback(
        (dir) => {
            intervalId.current && clearInterval(intervalId.current);
            setAuto(false);
            handleAnimationBanner(dir);
        },
        [min, max]
    );

    const handleClickBanner = (item) => {
        if (item?.type === 1) {
            dispatch(actions.setCurrSong(item?.encodeId));
            dispatch(actions.play(true));
            dispatch(actions.setPlaylist(null));
        } else if (item?.type === 4) {
            const albumPath = item?.link?.split('.')[0];
            navigate(albumPath);
        } else {
            dispatch(actions.setPlaylist(null));
        }
    };
    return (
        <div
            className="flex justify-between items-center gap-8 w-full overflow-hidden relative"
            onMouseLeave={() => setAuto(true)}
            onMouseEnter={() => setAuto(false)}
        >
            {!isAuto && (
                <>
                    <Button
                        children={<GrFormPrevious size={46} />}
                        styles={`absolute top-1/2 left-3 z-50 rounded-full text-white bg-overlay-white translate-y-[-50%] animate-appear`}
                        handleClick={() => handleClick(1)}
                    />

                    <Button
                        children={<GrFormNext size={46} />}
                        styles={`absolute top-1/2 right-3 z-50 rounded-full text-white bg-overlay-white translate-y-[-50%] animate-appear`}
                        handleClick={() => handleClick(-1)}
                    />
                </>
            )}
            {banner?.map((item, index) => {
                return (
                    <img
                        key={item.encodeId}
                        src={item.banner}
                        onClick={() => handleClickBanner(item)}
                        className={`slider-item flex-1 object-contain w-[30%] rounded-lg ${
                            index <= 2 ? 'block' : 'hidden'
                        }`}
                        alt={'banner'}
                    />
                );
            })}
        </div>
    );
};

export default Slider;
