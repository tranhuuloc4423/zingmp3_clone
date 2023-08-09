import icons from './icons';
import paths from './paths';

const { BiDoughnutChart, MdOutlineLibraryMusic, TbChartArcs, PiRadioBold, MdOutlineFeed } = icons;
const size = 24;

export const sidebarMenu = [
    {
        path: '',
        text: 'Khám phá',
        end: true,
        icon: <BiDoughnutChart size={size} />,
    },
    {
        path: 'zing-chart',
        text: '#zingchart',
        icon: <TbChartArcs size={size} />,
    },
    {
        path: 'radio',
        text: 'Radio',
        icon: <PiRadioBold size={size} />,
    },
    {
        path: 'mymusic',
        text: 'Thư Viện',
        icon: <MdOutlineLibraryMusic size={size} />,
    },
    {
        path: 'follow',
        text: 'Theo Dõi',
        icon: <MdOutlineFeed size={size} />,
    },
];

export const searchMenu = [
    {
        path: paths.ALL,
        text: 'Tất cả',
    },
    {
        path: paths.SONG,
        text: 'Bài Hát',
    },
    {
        path: paths.PLAYLIST,
        text: 'playlist/album',
    },
];

const createArrayTimer = (len, step) => {
    const arr = ['00'];
    let newStep = 0;
    let value = '';
    for (let i = 0; i < len; i++) {
        value = `${(newStep += step)}`;
        if (newStep < 10) {
            value = `0${newStep}`;
        }
        arr.push(value);
    }
    return arr;
};

export const timerArray = {
    hours: createArrayTimer(12, 1),
    minutes: createArrayTimer(11, 5),
};

export const weekChartMenu = [
    {
        id: 'vn',
        text: 'Việt Nam',
    },
    {
        id: 'us',
        text: 'US-UK',
    },
    {
        id: 'korea',
        text: 'K-POP',
    },
];
