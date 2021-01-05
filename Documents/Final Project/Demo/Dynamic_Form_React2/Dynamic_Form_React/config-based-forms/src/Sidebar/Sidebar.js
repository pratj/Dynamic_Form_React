import React, { useState, useEffect, useLayoutEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import './Sidebar.css'
import * as s from './Sidebar.styles';


const Sidebar =props=>
{
     
    const { backgroundImage , sidebarHeader={
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
      useEffect(() => {
          const updateWindowWidth = ()=>{
            console.log(`Window Width: ${window.innerWidth}`)
          }
          
          window.addEventListener('resize', updateWindowWidth)
      },[]);
    const menuItemsJSX =  menuItems.map((item, index)=>{
        const isItemSelected= selected === item.name;
        console.log(item.name + isItemSelected)
        return (
            <s.MenuItem key={index} selected={isItemSelected} onClick={()=>handleMenuItemClick(item.name) } isSidebarOpen={isSidebarOpen}>
                {!isSidebarOpen
                ? 
                <div style={{display: 'flex', cursor: 'pointer'}}>
                <div class="tooltip"><s.Icon>{item.icon}</s.Icon>
                <span class="tooltiptext">{item.name}</span>
                </div>
                    <s.Text isSidebarOpen={isSidebarOpen}>{item.name}</s.Text>
                </div> 
                :
                <div style={{display: 'flex', cursor: 'pointer'}}><s.Icon>{item.icon}</s.Icon>
                <s.Text isSidebarOpen={isSidebarOpen}>{item.name}</s.Text></div>
                    
                }
                
            </s.MenuItem>
                
        )
    })

    const handleToggle=()=>
    {
        setSidebarState(!isSidebarOpen);
        props.parentCallback(!isSidebarOpen)
    }
    return  <s.SidebarContainer backgroundImage={backgroundImage} isSidebarOpen={isSidebarOpen}>
       
        <s.SidebarHeader>{header}</s.SidebarHeader>
        <s.MenuItemContainer>{menuItemsJSX}</s.MenuItemContainer>
        
        <s.TogglerContainer onClick={()=> handleToggle() }>
        {/* <s.Img src="favicon.ico" /> */}
        
        {isSidebarOpen?<ArrowBackIosIcon fontSize="large" style={{color: "black"}}/>:<ArrowForwardIosIcon />}
        
            <s.Toggler/>
            
        </s.TogglerContainer>
        
    </s.SidebarContainer>
    
       
}
export default Sidebar