import React from 'react';
import { AiOutlineHeart } from 'react-icons/ai';
import { RiHeartsFill } from 'react-icons/ri';

export type NftObject = {
    image: string;
    title: string;
    creator: string;
    favourites: number;
    likes: number;
}

type NftProps = {
    items: NftObject[];
    displayCount: number;
}

const Nft: React.FC<NftProps> = (props) => {

    const { items, displayCount } = props;

    return (
        <div className="nft-items-wrapper row">
            {items.map((item, index) => {
                return (
                    <div key={index} className="nft-item">
                        <div className='img-wrapper'>
                            <img src={item.image} />
                        </div>
                        <div>
                            <p className='title'>{item.title}</p>
                            <p className='subtitle'>{item.creator}</p>
                        </div>
                        <div className='info row'>
                            <AiOutlineHeart className='stats-icon' color='#1886ff' />
                            <p className='stats'>{item.likes}</p>
                            <RiHeartsFill className='stats-icon' color='red' />
                            <p className='stats'>{item.favourites}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Nft;