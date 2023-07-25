import React from 'react';
import { Slider, Section, NewRelease, ChartSection } from '../../components';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Home = () => {
    const { hEditorTheme, hEditorTheme2, hEditorTheme3, hEditorTheme4, hArtistTheme, weekChart } =
        useSelector((state) => state.app);
    console.log(weekChart);
    return (
        <div className="overflow-y-auto flex flex-col">
            <Slider />
            <Section data={hEditorTheme} />
            <NewRelease />
            <Section data={hEditorTheme2} />
            <Section data={hEditorTheme3} />
            <Section data={hEditorTheme4} />
            <Section data={hArtistTheme} />
            <ChartSection />
            <div className="flex items-center w-full mt-12 gap-8">
                {weekChart?.map((item) => (
                    <Link to={item?.link?.split('.')[0]} key={item?.link} className="flex-1">
                        <img
                            src={item?.cover}
                            alt="cover"
                            className="w-full rounded-md object-cover"
                        />
                    </Link>
                ))}
            </div>
            <div className="h-[500px]"></div>
        </div>
    );
};

export default Home;
