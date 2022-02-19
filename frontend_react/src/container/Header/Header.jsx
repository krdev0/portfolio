import React from 'react';
import { motion } from 'framer-motion';

import { images } from '../../constants';

import './Header.scss';

const Header = () => {
  return (
    <div className='app_header app__flex'>
      <motion.div
        whileInView={{ x: [-200, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="app__header-info"
      >
        <div className="app__header-badge">
          <div className="badge-cmp app_flex">
            <span>👋</span>
            <div style={{ marginLeft: 20 }}>
              <p className='p-text'>Hello, my name is</p>
              <h1 className='head-text'>Kristaps</h1>
            </div>
          </div>
        </div>

        <div className='tag-cmp app__flex'>
          <p className='p-text'>Web Developer</p>
          <p className='p-text'>Freelancer</p>
        </div>
      </motion.div>

      <motion.div>

      </motion.div>
    </div>
  )
}

export default Header