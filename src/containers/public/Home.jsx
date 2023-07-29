import React from 'react';
import { Slider, Section, NewRelease, ChartSection, ChartBanner } from '../../components';
import { useSelector } from 'react-redux';

const Home = () => {
    const {
        hEditorTheme,
        hEditorTheme2,
        hEditorTheme3,
        hEditorTheme4,
        hArtistTheme,
        recentAlbums,
    } = useSelector((state) => state.app);
    return (
        <div className="overflow-y-auto flex flex-col px-[59px]">
            <Slider />
            <Section data={recentAlbums} title={'Gần đây'} />
            <Section data={hEditorTheme?.items} title={hEditorTheme?.title} />
            <NewRelease />
            <Section data={hEditorTheme2?.items} title={hEditorTheme2?.title} />
            <Section data={hEditorTheme3?.items} title={hEditorTheme3?.title} />
            <Section data={hEditorTheme4?.items} title={hEditorTheme4?.title} />
            <Section data={hArtistTheme?.items} title={hArtistTheme?.title} />
            <ChartSection />
            <ChartBanner />
            <div className="h-[500px]"></div>
        </div>
    );
};

export default Home;
