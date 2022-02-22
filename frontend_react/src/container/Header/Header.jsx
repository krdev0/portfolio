import React from 'react';
import { motion } from 'framer-motion';

import { AppWrap } from '../../wrapper';

import { images } from '../../constants';

import './Header.scss';

const Header = () => {
  return (
    <div className='app__header app__flex'>
      <motion.div
        whileInView={{ x: [-200, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="app__header-info"
      >
        <div className="app__header-intro">
          <p className='hero-text'>Hello there! I'm</p>
          <h2 className='hero-title'>Kristaps Ritins</h2>
        </div>
        <div className="app__header-subtitle">
          <p>A self-taught <span>web developer</span> with an
            interest in web development.</p>
        </div>
      </motion.div>
    </div>
  )
}

export default AppWrap(Header, 'home');