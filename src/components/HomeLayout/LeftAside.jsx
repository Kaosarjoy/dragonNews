import React, { Suspense } from 'react';
import Categories from '../Categories';

const LeftAside = () => {
    return (
        <div>
          <Suspense fallback=
          {<div className="relative w-14 h-14">
  <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 blur-xl opacity-40 animate-pulse"></div>
  <div className="absolute inset-2 border-4 border-transparent border-t-blue-500 border-b-purple-500 rounded-full animate-spin"></div>
  <div className="absolute inset-4 rounded-full border-4 border-blue-500 animate-[spin_3s_linear_infinite_reverse]"></div>
</div>
          }>
            <Categories></Categories>
          </Suspense>
        </div>
    );
};

export default LeftAside;