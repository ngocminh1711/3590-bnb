import Box from '@mui/material/Box';
import Tabs, {tabsClasses} from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import {useState} from 'react'
import {FaCampground, FaFilter} from 'react-icons/fa';

import {MdHouseSiding, MdOutlineApartment, MdOutlineBathroom, MdOutlineWater} from "react-icons/md";
import {useNavigate} from "react-router-dom";
import {BsFillHouseFill, BsSnow} from "react-icons/bs";
import {GiCampingTent, GiKidSlide, GiLightningDome, GiSpaceNeedle, GiWaveSurfer} from "react-icons/gi";

import {BiHomeAlt} from "react-icons/bi";
import {useDispatch} from "react-redux";
import {
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

const OptionsTab = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const [value, setValue] = useState(0);
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
                    indicatorColor="secondary"
                    textColor="primary"
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
                        <Tab onClick={handleClickVipHouse} icon={<BsSnow size={24 } />} label='Vip house'/>;
                        <Tab onClick={handleClickNormalHouse} icon={<MdHouseSiding size={24} />} label='Normal house'/>;
                        <Tab onClick={handleClickOneBedRoom} icon={<MdOutlineWater size={24} />} label='Single bedroom'/>;
                        <Tab onClick={handleClickMultipleBedRoom} icon={<GiKidSlide size={24} />} label='Multiple bedroom'/>;
                        <Tab icon={<MdOutlineBathroom size={24} />} label='Single bathroom'/>;
                        <Tab icon={<GiSpaceNeedle size={24} />} label='Multiple bathroom'/>;
                        <Tab icon={<FaCampground size={24} />} label='Address'/>;
                        <Tab icon={<BiHomeAlt size={24} />} label='Tiny Homes'/>;
                        <Tab icon={<GiLightningDome size={24} />} label='Domes'/>;
                        <Tab icon={<GiCampingTent size={24} />} label='A-frames'/>;
                        <Tab icon={<GiWaveSurfer size={24} />} label='Surfing'/>;


                </Tabs>
                <Button
                    sx={{
                        display: {xs: 'none', md: 'block'},
                        border: '1px solid #DDDDD',
                        minWidth: 90,
                        justifyContent: 'space-between',
                        borderRadius: 2,
                        textTransform: 'capitalize',
                        py: 1,
                        color: "#000000"
                    }}
                >
                    <FaFilter/> Filters
                </Button>
            </Box>
        </Container>
    );
};

export default OptionsTab;