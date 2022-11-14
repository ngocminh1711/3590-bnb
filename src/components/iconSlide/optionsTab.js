import Box from '@mui/material/Box';
import Tabs, {tabsClasses} from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Container from '@mui/material/Container';
import {useState} from 'react'
import {FaCampground} from 'react-icons/fa';
import {MdHouseSiding, MdOutlineApartment, MdOutlineBathroom, MdOutlineWater} from "react-icons/md";
import {useNavigate} from "react-router-dom";
import {BsFillHouseFill, BsSnow} from "react-icons/bs";
import {GiCampingTent, GiKidSlide, GiLightningDome, GiSpaceNeedle, GiWaveSurfer} from "react-icons/gi";
import {BiHomeAlt} from "react-icons/bi";
import {useDispatch} from "react-redux";
import {
    searchHouseLess500, searchHouseThan1000, searchHouseThan500, searchMultipleBathRoom,
    searchMultipleBedRoom,
    searchNormalHouse, searchOneBathRoom,
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
import Header from "../header/Header";
import oneBathRoom from "../BathRoom/OneBathRoom";
import multipleBathRoom from "../BathRoom/MultipleBathRoom";


const OptionsTab = () => {
    const navigate = useNavigate()
    const [value, setValue] = useState(false);
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
    const handleClickOneBathRoom = () => {
        dispatch(searchOneBathRoom(oneBathRoom))
        navigate('/onebathroom')
    }
    const handleClickMultipleBathRoom = () => {
        dispatch(searchMultipleBathRoom(multipleBathRoom))
        navigate('/multiplebathroom')
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
        <>
<div className="mt-32">
            <Container maxWidth="xl">
                <Box
                    sx={{
                        
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
                        textColor="inherit"
                        variant="scrollable"
                        textSize="5"
                        scrollButtons
                        sx={{
                            [`& .${tabsClasses.scrollButtons}`]: {
                                '&.Mui-disabled': {opacity: 0.3},
                            },
                            color: '#000000'
                        }}
                    >
                        <Tab onClick={handleClickHome} icon={<BsFillHouseFill  size={18}/>} value={1} label='All'/>;
                        <Tab onClick={handleClickTop4} icon={<MdOutlineApartment size={18}/>} value={2} label='Top 4'/>;
                        <Tab onClick={handleClickVipHouse} icon={<BsSnow size={18}/>} value={3} label='Vip house'/>;
                        <Tab onClick={handleClickNormalHouse} icon={<MdHouseSiding size={18}/>} value={4} label='Normal house'/>;
                        <Tab onClick={handleClickOneBedRoom} icon={<MdOutlineWater size={18}/>} value={5} label='Single bedroom'/>;
                        <Tab onClick={handleClickMultipleBedRoom} icon={<GiKidSlide size={18}/>} value={6} label='Multiple bedroom'/>;
                        <Tab onClick={handleClickOneBathRoom} icon={<MdOutlineBathroom size={18}/>} value={7} label='Single bathroom'/>;
                        <Tab onClick={handleClickMultipleBathRoom} icon={<GiSpaceNeedle size={18}/>} value={8} label='Multiple bathroom'/>;
                        <Tab onClick={handleClickLess500} icon={<GiCampingTent size={18}/>} value={9} label='House price <500$'/>;
                        <Tab onClick={handleClickThan500} icon={<BiHomeAlt size={18}/>} value={10} label='House price 500$-1000$'/>;
                        <Tab onClick={handleClickThan1000} icon={<GiWaveSurfer size={18}/>} value={11} label='House price >1000$'/>;
                        <Tab icon={<GiLightningDome size={24}/>} label='Domes'/>;
                        <Tab icon={<FaCampground size={24}/>} label='Address'/>;
                    </Tabs>

                </Box>
            </Container>
            </div>
        </>

    );
};

export default OptionsTab;