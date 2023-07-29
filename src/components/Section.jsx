import React, { memo } from 'react';
import { SectionItem, MediaItem } from './';

const Section = ({ data, title, child = 'sectionItem', childStyles, children }) => {
    return (
        <div className="mt-12 flex flex-col gap-5 w-full">
            <div className="flex items-center justify-between">
                <h3 className="text-xl text-white font-bold">{title}</h3>
                <span className="text-blur-100">Tất cả</span>
            </div>
            <div className={`${childStyles ? childStyles : 'flex items-start gap-6'}`}>
                {/* {data?.map((item, index) => {
                    if (index < 5) {
                        switch (child) {
                            case 'media':
                                return (
                                    <MediaItem
                                        key={item?.encodeId}
                                        songData={item}
                                        width={'w-[48%]'}
                                        restInfo={{ albumTitle: true }}
                                    />
                                );
                            default:
                                return <SectionItem key={item?.encodeId} data={item} />;
                        }
                    }
                })} */}
                {child === 'sectionItem' &&
                    data?.map((item, index) => {
                        if (index < 5) {
                            return <SectionItem key={item?.encodeId} data={item} />;
                        }
                    })}
                {child === 'media' &&
                    data?.map((item, index) => {
                        if (index < 6) {
                            return (
                                <MediaItem
                                    key={item?.encodeId}
                                    songData={item}
                                    width={'w-[48%]'}
                                    restInfo={{ albumTitle: true }}
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
