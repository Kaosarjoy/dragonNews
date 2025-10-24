import React, { Suspense } from 'react';
import AllCaterogy from '../AllCaterogy';

const Leftaside = () => {
    return (
        <div>
           <Suspense fallback={<span className="loading loading-dots loading-lg"></span>}>
            <AllCaterogy></AllCaterogy>
           </Suspense>
        </div>
    );
};

export default Leftaside;