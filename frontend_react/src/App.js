import React from 'react';

import { Footer, Header, Work } from './container/index';
import { Navbar } from './components';
import './App.scss';

export const App = () => {
    return (
        <div className='app'>
            <Navbar />
            <Header />
            {/* <About /> */}
            <Work />
            {/* <Skills /> */}
            {/* <Testimonial /> */}
            <Footer />
        </div>
    );
}

export default App;
