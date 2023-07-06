import React from "react";
import { Header, Slider } from "../../components";

const Home = () => {
    return (
        <div className="overflow-y-auto flex flex-col">
            <Header />
            <Slider />
        </div>
    );
};

export default Home;
