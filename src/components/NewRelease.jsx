import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Button, SongInfo } from './';

const NewRelease = () => {
    const { newRelease } = useSelector((state) => state.app);
    const [isActive, setIsActive] = useState('all');
    useEffect(() => {}, [isActive]);
    return (
        <div className="mt-12 flex flex-col gap-5 w-full">
            <h3 className="text-xl text-white font-bold">{newRelease?.title}</h3>
            <div className="flex justify-between items-center">
                <div>
                    <span onClick={() => setIsActive('all')}>
                        <Button children={'Tất cả'} active={isActive === 'all'} />
                    </span>

                    <span onClick={() => setIsActive('vPop')}>
                        <Button children={'Việt Nam'} active={isActive === 'vPop'} />
                    </span>

                    <span onClick={() => setIsActive('others')}>
                        <Button children={'Quốc tế'} active={isActive === 'others'} />
                    </span>
                </div>
                <div className="text-blur-100">Tất cả</div>
            </div>
            <div className="flex flex-wrap gap-4 w-full justify-between">
                {newRelease?.items?.[isActive]?.map((item, index) => (
                    <div className="w-[30%]" key={item?.encodeId}>
                        <SongInfo data={item} releaseDate={item.releaseDate} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default NewRelease;
