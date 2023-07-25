import React, { memo } from 'react';
import { SectionItem } from './';

const Section = ({ data }) => {
    return (
        <div className="mt-12 flex flex-col gap-5 w-full">
            <div className="flex items-center justify-between">
                <h3 className="text-xl text-white font-bold">{data?.title}</h3>
                <span className="text-blur-100">Tất cả</span>
            </div>
            <div className="flex items-start gap-6">
                {data?.items?.map((item, index) => {
                    if (index < 5) {
                        return <SectionItem key={item?.encodeId} data={item} />;
                    }
                })}
            </div>
        </div>
    );
};

export default memo(Section);
