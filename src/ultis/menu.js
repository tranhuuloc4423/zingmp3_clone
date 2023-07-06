import icons from "./icons";

const {
    BiDoughnutChart,
    MdOutlineLibraryMusic,
    TbChartArcs,
    PiRadioBold,
    MdOutlineFeed,
} = icons;
const size = 24;

export const sidebarMenu = [
    {
        path: "",
        text: "Khám phá",
        end: true,
        icon: <BiDoughnutChart size={size} />,
    },
    {
        path: "zing-chart",
        text: "#zingchart",
        icon: <TbChartArcs size={size} />,
    },
    {
        path: "radio",
        text: "Radio",
        icon: <PiRadioBold size={size} />,
    },
    {
        path: "mymusic",
        text: "Thư Viện",
        icon: <MdOutlineLibraryMusic size={size} />,
    },
    {
        path: "follow",
        text: "Theo Dõi",
        icon: <MdOutlineFeed size={size} />,
    },
];
