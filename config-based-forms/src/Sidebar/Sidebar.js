import React, { useState, useEffect, useLayoutEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import * as s from './Sidebar.styles';


const Sidebar =props=>
{
    const { backgroundImage ="", sidebarHeader={
        fullName:'',
        abbreviation:''
    }, menuItems=[] } = props;
    const [selected, setSelectedMenuItem] = useState(menuItems[0].name)
    const [header, setHeader] = useState(sidebarHeader.fullName);
    const [isSidebarOpen, setSidebarState] = useState(true);
    
    const handleMenuItemClick = name =>{
        setSelectedMenuItem(name)
    }

    useEffect(() => {
        isSidebarOpen ? setTimeout(() => setHeader(sidebarHeader.fullName), 200) : setHeader(sidebarHeader.abbreviation);
      }, [isSidebarOpen, sidebarHeader])
    
    const menuItemsJSX =  menuItems.map((item, index)=>{
        const isItemSelected= selected === item.name;
        console.log(item.name + isItemSelected)
        return (
            <s.MenuItem key={index} selected={isItemSelected} onClick={()=>handleMenuItemClick(item.name) } isSidebarOpen={isSidebarOpen}>
                <s.Icon>{item.icon}</s.Icon>
                <s.Text isSidebarOpen={isSidebarOpen}>{item.name}</s.Text></s.MenuItem>
        )
    })

    
    return <s.SidebarContainer backgroundImage={backgroundImage} isSidebarOpen={isSidebarOpen}>
        
        <s.SidebarHeader>{header}</s.SidebarHeader>
        <s.MenuItemContainer>{menuItemsJSX}</s.MenuItemContainer>
        
        <s.TogglerContainer onClick={()=> setSidebarState(!isSidebarOpen)}>
        <s.Img src="favicon.ico" />
        
            <s.Toggler/>
            <small>Click to Expand and Collapse</small>
        </s.TogglerContainer>
        
    </s.SidebarContainer>
}
export default Sidebar