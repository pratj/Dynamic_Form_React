import React, { useState, useEffect, useLayoutEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import * as s from './MainView.styles';
import RenderCardConfig from '../RenderCardConfig';

const MainView =()=>
{
    return <s.MainViewContainer>MainView
        <RenderCardConfig/>
    </s.MainViewContainer>
}
export default MainView