import React, { useState } from 'react';
import { BiBold, BiChevronDown, BiChevronUp } from 'react-icons/bi';

// Navigation wrapper
const Navigation: React.FC = ({ children }) => {
    return (
        <div className='navigation'>{children}</div>
    )
}

type NavItemProps = {
    title: string;
    icon: JSX.Element;
}

// navigation item title main
const NavItem: React.FC<NavItemProps> = (props) => {
    const { children, icon, title } = props;
    const [open, setOpen] = useState<boolean>(false);

    return (
        <>
            <div className='nav-item row' onClick={() => setOpen(!open)}>
                <div>{icon}{title}</div>
                <div>{open ? <BiChevronUp fontSize={18} /> : <BiChevronDown fontSize={18} />}</div>
            </div>
            {open && children}
        </>
    )
}

type NavChildProps = {
    label: string;
    url: string;
}

// navigation child items on dropdown active
const NavChild: React.FC<NavChildProps> = (props) => {
    const { label } = props;

    return (
        <><p>{label}</p></>
    )
}

export { Navigation, NavItem, NavChild }