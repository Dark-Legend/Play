import HomeIcon from "@mui/icons-material/Home";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import SportsGymnasticsIcon from "@mui/icons-material/SportsGymnastics";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
import { dashboard, home, trending } from "../../Router/route";

export const sideBarData = [
  {
    name: "Home",
    path: dashboard,
    icon: <HomeIcon />,
  },
  {
    name: "Trending",
    path: trending,
    icon: <TrendingUpIcon />,
  },
  {
    name: "Music",
    path: "/music",
    icon: <MusicNoteIcon />,
  },
  {
    name: "Sports",
    path: "/sports",
    icon: <SportsGymnasticsIcon />,
  },
  {
    name: "News",
    path: "/news",
    icon: <NewspaperIcon />,
  },
  {
    name: "Learning",
    path: "/learning",
    icon: <LocalLibraryIcon />,
  },
];
