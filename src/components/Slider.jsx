import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getArrSlider } from "../ultis/fn";
import * as actions from "../redux/store/actions";
import { useNavigate } from "react-router-dom";

const Slider = () => {
    const { banner } = useSelector((state) => state.app);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // animation for banner
    useEffect(() => {
        const sliderEls = document.getElementsByClassName("slider-item");
        let min = 0;
        let max = 2;
        const intervalId = setInterval(() => {
            const list = getArrSlider(min, max, sliderEls.length - 1);
            for (let i = 0; i < sliderEls.length; i++) {
                sliderEls[i]?.classList.remove(
                    "animate-slide-right",
                    "order-last",
                    "z-20",
                    "animate-slide-left",
                    "order-first",
                    "z-10",
                    "animate-slide-left2",
                    "order-2",
                    "z-10"
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
                        "animate-slide-right",
                        "order-last",
                        "z-10"
                    );
                } else if (item === min) {
                    sliderEls[min]?.classList.add(
                        "animate-slide-left",
                        "order-first",
                        "z-20"
                    );
                } else {
                    sliderEls[item]?.classList.add(
                        "animate-slide-left2",
                        "order-2",
                        "z-20"
                    );
                }
            });

            if (min === sliderEls.length - 1) {
                min = 0;
            } else {
                min += 1;
            }
            if (max === sliderEls.length - 1) {
                max = 0;
            } else {
                max += 1;
            }
        }, 3000);
        return () => {
            intervalId && clearInterval(intervalId);
        };
    }, []);

    const handleClickBanner = (item) => {
        if (item?.type === 1) {
            dispatch(actions.setCurrSong(item?.encodeId));
            dispatch(actions.play(true));
        } else if (item?.type === 4) {
            const result = item?.link?.split(".")[0];
            console.log(result);
            const albumPath = result.split("/");
            if (albumPath[1] === "playlist") {
                albumPath[1] = "album";
            }
            console.log(albumPath);
            navigate(albumPath.join("/"));
        }
    };

    return (
        <div className="flex justify-between items-center gap-8 w-full overflow-hidden px-[59px] pt-12">
            {banner?.map((item, index) => (
                <img
                    key={item.encodeId}
                    src={item.banner}
                    onClick={() => handleClickBanner(item)}
                    className={`slider-item flex-1 object-contain w-[30%] rounded-lg `}
                    alt={"banner"}
                />
            ))}
        </div>
    );
};

export default Slider;