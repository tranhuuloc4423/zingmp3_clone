import { memo } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import { ChartDiagram, SongInfo } from './';
import icons from '../ultis/icons';
import path from '../ultis/paths';

const { AiFillPlayCircle } = icons;

const ChartSection = () => {
    const { chart, rank } = useSelector((state) => state.app);
    return (
        <div className="p-5 mt-12 bg-[#4D1F6D] rounded-md h-auto">
            <Link to={path.ZING__CHART} className="flex items-center gap-3 mb-4">
                <div className="zingchart inline-block text-3xl font-bold hover:brightness-125">
                    #zingchart
                </div>
                <AiFillPlayCircle size={26} color="white" className="hover:opacity-75" />
            </Link>
            <div className="flex w-full gap-4 flex-auto">
                <div className="w-[40%] h-full flex flex-col gap-3 items-center">
                    {rank
                        ?.filter((item, index) => index < 3)
                        ?.map((song, index) => {
                            const percent = Math.round((song?.score * 100) / chart?.totalScore);
                            const idx = index + 1;
                            return (
                                <div
                                    key={song?.encodeId}
                                    className="flex items-center w-full bg-[#4d2967] px-4 rounded-md hover:bg-[#755989] cursor-pointer"
                                >
                                    <div className={`text-shadow-no-${idx} w-10`}>{idx}</div>
                                    <SongInfo
                                        data={song}
                                        styles={'flex flex-auto gap-[10px] items-center'}
                                    />
                                    <div className="text-base text-white font-bold">{`${percent}%`}</div>
                                </div>
                            );
                        })}
                    <Link
                        to={path.ZING__CHART}
                        className="py-1 mt-4 px-5 text-white border border-white rounded-full hover:bg-hightlight-100"
                    >
                        Xem Thêm
                    </Link>
                </div>
                {/* <div className="w-[60%] relative">
                    {data && <Line data={data} options={options} />}
                </div> */}
                <ChartDiagram width="60%" />
            </div>
        </div>
    );
};

export default memo(ChartSection);
