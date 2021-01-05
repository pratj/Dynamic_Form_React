import './App.css';
import CardConfigDemo from './CardConfigDemo';
import CardDemo from './CardDemo';
import Form from './Form';
import RenderCardConfig from './RenderCardConfig';
import Sidebar from './Sidebar/Sidebar'
import MainView from './Services/MainView'
import * as s from './App.styles'
import React, {useState} from 'react'
import {CardConfig} from './CardConfig'
import HomeIcon from '@material-ui/icons/Home';
import GroupRoundedIcon from '@material-ui/icons/GroupRounded';
import ViewCompactRoundedIcon from '@material-ui/icons/ViewCompactRounded';
import HeadsetMicRoundedIcon from '@material-ui/icons/HeadsetMicRounded';
const App = () => {
  const backgroundImage= 'https://www.oneindia.com/img/1200x80/2020/05/flights1-1589423862.jpg'
  const sidebarHeader= {
    fullName:'InsuranceBazaar',
    abbreviation:'IB  Z'
  }
  const [isSidebarOpen, setSidebarState] = useState();
  const parentCallback=(isSidebarOpen)  => {
        setSidebarState(isSidebarOpen)
  }
  const services= CardConfig.map((item,index)=>{
    console.log(item.category)
    return <p key={index}>{item.category}</p>
  })
  const menuItems =  [
  {name:'Home', to: '/', icon:<HomeIcon/>, subMenuItems:[] },
  {name:'About Us', to: '/about', icon:<GroupRoundedIcon/>, subMenuItems:[] },
  {name:'Services', to: '/', icon:<ViewCompactRoundedIcon/>, subMenuItems:[
    {name: 'Motor Insurance', to: '/motorinsurance'},
    {name: 'Travel Insurance', to: '/travelinsurance'},
    {name: 'All', to: '/all'}
  ] }, 
  {name:'Contact Us', to: '/contact', icon:<HeadsetMicRoundedIcon/>, subMenuItems:[] }
];
  return (
    <s.App>
      {/* <CardDemo/> */}
      {/* <CardConfigDemo/> */}
      {/* <Form/> */}
      {/* <RenderCa rdConfig/> */}
      {/* <s.Header>Sidebar</s.Header> */}
      <Sidebar backgroundImage={backgroundImage}
       sidebarHeader ={sidebarHeader}
       menuItems={menuItems}
       parentCallback={parentCallback}
       />
      <MainView isSidebarOpen={isSidebarOpen}/>
      {/* <img src= {backgroundImage}></img> */}
    </s.App>
  );
}

export default App;
