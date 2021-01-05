import React, { useState, useEffect, useLayoutEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import * as s from './MainView.styles';
import RenderCardConfig from '../RenderCardConfig';

const MainView =({isSidebarOpen})=>
{
    return <s.MainViewContainer isSidebarOpen={isSidebarOpen}>
        <RenderCardConfig/>
    </s.MainViewContainer>
}
export default MainView