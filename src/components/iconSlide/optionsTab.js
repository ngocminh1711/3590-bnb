import Box from '@mui/material/Box';
import Tabs, {tabsClasses} from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Container from '@mui/material/Container';
import {useEffect, useState} from 'react'
import {FaCampground, FaFilter} from 'react-icons/fa';
import {MdHouseSiding, MdOutlineApartment, MdOutlineBathroom, MdOutlineWater} from "react-icons/md";
import {useNavigate} from "react-router-dom";
import {BsFillHouseFill, BsSnow} from "react-icons/bs";
import {GiCampingTent, GiKidSlide, GiLightningDome, GiSpaceNeedle, GiWaveSurfer} from "react-icons/gi";
import {BiHomeAlt} from "react-icons/bi";
import {useDispatch} from "react-redux";
import {
    searchHouseLess500, searchHouseThan1000, searchHouseThan500,
    searchMultipleBedRoom,
    searchNormalHouse,
    searchOneBedRoom,
    searchTop4,
    searchVipHouse
} from "../../features/search/searchSlice";
import topHouseForRent from "../TopHouseForRent/TopHouseForRent";
import vipHouse from "../VipHouse/VipHouse";
import normalHouse from "../NormalHouse/NormalHouse";
import oneBedRoom from "../BedRoom/OneBedRoom";
import multipleBedRoom from "../BedRoom/MultipleBedRoom";
import priceLess500 from "../Price/PriceLess500";
import priceThan500 from "../Price/PriceThan500";
import priceThan1000 from "../Price/Pricethan1000";


const OptionsTabOneBed = () => {
    const navigate = useNavigate()
    const [value, setValue] = useState(0);
    const dispatch = useDispatch();
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const handleClickHome = () => {
        navigate('/home')
    }
    const handleClickTop4 = () => {
        dispatch(searchTop4(topHouseForRent))
        navigate('/top4')
    }
    const handleClickVipHouse = () => {
        dispatch(searchVipHouse(vipHouse))
        navigate('/vip')
    }
    const handleClickNormalHouse = () => {
        dispatch(searchNormalHouse(normalHouse))
        navigate('/normal')
    }
    const handleClickOneBedRoom = () => {
        dispatch(searchOneBedRoom(oneBedRoom))
        navigate('/onebedroom')
    }
    const handleClickMultipleBedRoom = () => {
        dispatch(searchMultipleBedRoom(multipleBedRoom))
        navigate('/multiplebedroom')
    }
    const handleClickLess500 = () => {
        dispatch(searchHouseLess500(priceLess500))
        navigate('/less500')
    }
    const handleClickThan500 = () => {
        dispatch(searchHouseThan500(priceThan500))
        navigate('/than500')
    }
    const handleClickThan1000 = () => {
        dispatch(searchHouseThan1000(priceThan1000))
        navigate('/than1000')
    }


    return (
        <Container maxWidth="xl">
            <Box
                sx={{
                    display: 'flex',
                    flexGrow: 1,
                    px: {xs: 0, md: 2},
                    alignItems: 'center',
                    mt: 2,
                    mb: 2,
                    color: '#000000'
                }}
            >
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor=""
                    textColor=""
                    variant="scrollable"
                    scrollButtons
                    sx={{
                        [`& .${tabsClasses.scrollButtons}`]: {
                            '&.Mui-disabled': {opacity: 0.3},
                        },
                        color: '#000000'
                    }}
                >
                    <Tab onClick={handleClickHome} icon={<BsFillHouseFill size={24}/>} label='ALL'/>;
                    <Tab onClick={handleClickTop4} icon={<MdOutlineApartment size={24}/>} label='Top 4'/>;
                    <Tab onClick={handleClickVipHouse} icon={<BsSnow size={24}/>} label='Vip house'/>;
                    <Tab onClick={handleClickNormalHouse} icon={<MdHouseSiding size={24}/>} label='Normal house'/>;
                    <Tab onClick={handleClickOneBedRoom} icon={<MdOutlineWater size={24}/>} label='Single bedroom'/>;
                    <Tab onClick={handleClickMultipleBedRoom} icon={<GiKidSlide size={24}/>} label='Multiple bedroom'/>;
                    <Tab icon={<MdOutlineBathroom size={24}/>} label='Single bathroom'/>;
                    <Tab icon={<GiSpaceNeedle size={24}/>} label='Multiple bathroom'/>;
                    <Tab onClick={handleClickLess500} icon={<GiCampingTent size={24}/>} label='Home price <500$'/>;
                    <Tab onClick={handleClickThan500} icon={<BiHomeAlt size={24}/>} label='Home price 500$-1000$'/>;
                    <Tab onClick={handleClickThan1000} icon={<GiWaveSurfer size={24}/>} label='Home price >1000$'/>;
                    <Tab icon={<GiLightningDome size={24}/>} label='Domes'/>;
                    <Tab icon={<FaCampground size={24}/>} label='Address'/>;


                </Tabs>

            </Box>
        </Container>
    );
};

export default OptionsTabOneBed;