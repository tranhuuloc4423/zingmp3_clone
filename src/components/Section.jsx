import React, { memo } from 'react';
import { SectionItem, MediaItem } from './';

const Section = ({
    data,
    title,
    child = 'sectionItem',
    childStyles,
    children,
    childNum = 5,
    childTitle,
    media = { ablumbTitle: true },
}) => {
    return (
        <div className="mt-8 flex flex-col gap-5 w-full">
            <div className="flex items-center justify-between">
                <h3 className="text-xl text-white font-bold">{title}</h3>
                <span className="text-blur-100">Tất cả</span>
            </div>
            <div className={`flex items-start mx-[-16px] ${childStyles ? childStyles : ''}`}>
                {child === 'sectionItem' &&
                    data?.map((item, index) => {
                        if (index < childNum) {
                            if (childTitle) {
                                return (
                                    <SectionItem
                                        key={item?.encodeId}
                                        data={item}
                                        title={childTitle}
                                    />
                                );
                            } else {
                                return <SectionItem key={item?.encodeId} data={item} />;
                            }
                        }
                    })}
                {child === 'media' &&
                    data?.map((item, index) => {
                        if (index < 6) {
                            return (
                                <MediaItem
                                    key={item?.encodeId}
                                    data={item}
                                    width={'w-[48%]'}
                                    restInfo={media}
                                />
                            );
                        }
                    })}
                {child === 'other' && children}
            </div>
        </div>
    );
};

export default memo(Section);
