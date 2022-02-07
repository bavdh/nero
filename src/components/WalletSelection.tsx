import React, { useState } from 'react';
import { FaEthereum } from 'react-icons/fa';
import { AiFillCaretDown } from 'react-icons/ai';

const WalletSelection: React.FC = () => {
    const [wallet, setWallet] = useState();

    return (
        <div className='wallet-wrapper row center'>
            <FaEthereum size={20} />
            <div className='row center'>
                <div>
                    <p className="title">Etherium</p>
                    <p className="subtitle">Connected</p>
                </div>
                <AiFillCaretDown />
            </div>
        </div>
    )
}

export default WalletSelection;