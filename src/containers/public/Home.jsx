import React from 'react';
import { Slider, Section, NewRelease, ChartSection, ChartBanner } from '../../components';
import { useSelector } from 'react-redux';

const Home = () => {
    const { sections, recentAlbums } = useSelector((state) => state.app);
    return (
        <div className="overflow-y-auto flex flex-col">
            <Slider />
            <Section data={recentAlbums} title={'Gần đây'} childTitle />
            <NewRelease />
            {sections?.map((item) => {
                return (
                    item && <Section key={item?.sectionId} data={item?.items} title={item?.title} />
                );
            })}
            <ChartSection />
            <ChartBanner />
            <div className="h-[500px]"></div>
        </div>
    );
};

export default Home;
