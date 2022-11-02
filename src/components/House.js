import { BiBed, BiBath, BiArea } from 'react-icons/bi';

const House = ({ house }) => {
    const [image, type, country, address, bedrooms, bathrooms, surface, price] = house;

    return(
        <>
            <div>
                <img src={image} alt='' />
            </div>
        </>
    )
}

export default House;