import React from 'react';
import { BiFilterAlt, BiCategoryAlt } from 'react-icons/bi';
import { MdOutlineColorLens, MdOutlineCollectionsBookmark } from 'react-icons/md'
import { FaRegMoneyBillAlt } from 'react-icons/fa';
import { VscTypeHierarchy } from 'react-icons/vsc';
import { BsCoin } from 'react-icons/bs';
import { Navigation, NavItem, NavChild } from './Navigation';

const Page: React.FC = ({ children }) => {

    return (
        <div className='wrapper row'>
            <div className="navbar column">
                <img src="nero-icon.jpg" />
                <Navigation>
                    <NavItem title="Filter" icon={<BiFilterAlt className='nav-icon' />}>
                        <NavChild label='Test' url='' />
                        <NavChild label='Test2' url='' />
                    </NavItem>
                    <NavItem title='Colors' icon={<MdOutlineColorLens className='nav-icon' />}>
                        <NavChild label='Test' url='' />
                        <NavChild label='Test2' url='' />
                    </NavItem>
                    <NavItem title='Price' icon={<FaRegMoneyBillAlt className='nav-icon' />}></NavItem>
                    <NavItem title='Collections' icon={<MdOutlineCollectionsBookmark className='nav-icon' />}></NavItem>
                    <NavItem title='Chains' icon={<VscTypeHierarchy className='nav-icon' />}></NavItem>
                    <NavItem title='Categories' icon={<BiCategoryAlt className='nav-icon' />}></NavItem>
                    <NavItem title='On Sale In' icon={<BsCoin className='nav-icon' />}></NavItem>
                </Navigation>
            </div>
            <div className="content">
                {children}
            </div>
        </div>
    )
}

export default Page;