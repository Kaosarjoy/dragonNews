import React from 'react';
import Home from '../component/Home';
import { Outlet } from 'react-router';
import LastestNews from '../component/LastestNews';
import Navbar from '../component/Navbar';
import Leftaside from '../component/HomeLayout/Leftaside';
import RightSide from '../component/HomeLayout/RightSide';

const HomeLayout = () => {
    return (
        <div>
            <header>
                 <Home></Home>
                 <section>
                    <LastestNews></LastestNews>
                 </section>
                <nav>
                     <Navbar></Navbar>
                </nav>
                <main className='w-11/12 mx-auto my-4 grid grid-cols-12 gap-5'>
                    
                    <aside className='col-span-3'>
                        <Leftaside></Leftaside>
                    </aside>
                       
                    
                    <section className='col-span-6'>
                        <Outlet></Outlet>
                    </section>
                    <aside className='col-span-3'>
                        <RightSide ></RightSide>
                    </aside>
                      
                    
                </main>
            </header>
        </div>
    );
};

export default HomeLayout;