import React from 'react';
import { Outlet } from 'react-router';
import Header from '../components/Header';
import LatestNews from '../components/LatestNews';

import LeftAside from '../components/HomeLayout/LeftAside';
import RightAside from '../components/HomeLayout/RightAside';
import Navbar from './Navbar';

const HomeLayout = () => {
    return (
        <div>
            <header>
                <Header></Header>
                <section className='w-11/12 mt-3 mx-auto'>
                    <LatestNews></LatestNews>
                </section>
                <nav className='w-11/12 mt-3 mx-auto'>
                  <Navbar></Navbar>
                </nav>
            </header>
            <main className='w-11/12 mt-3 mx-auto gap-5  grid grid-cols-12'>
             
               <aside className='col-span-3 sticky top-3 h-fit'>
                <LeftAside></LeftAside>
               </aside>
                <section className="main col-span-6">
                    <Outlet></Outlet>
                </section>
                <aside className='col-span-3 sticky top-3  h-fit'>
                <RightAside></RightAside>
               </aside>
            </main>
        </div>
    );
};

export default HomeLayout;