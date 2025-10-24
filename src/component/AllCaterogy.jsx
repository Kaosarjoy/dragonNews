import React, { use } from 'react';
import { NavLink } from 'react-router';
const caterogyPromise=fetch('/categories.json')
.then(res=>res.json())
const AllCaterogy = () => {
    const caterogy = use(caterogyPromise)
   // console.log(caterogy)
    return (
        <div>
            <h2 className='font-bold'>AllCaterogy({caterogy.length})</h2>
            <div className='grid grid-cols-1 mt-5 gap-3'>
                {
                    caterogy.map((c)=>(
                        <NavLink 
                        className='btn border-0  bg-base-100 hover:bg-lime-200 font-semibold text-accent'
                         key={c.id}
                         to={`caterogy/${c.id}`}
                         >
                            {c.name}
                            </NavLink>
                    )
                       
                    )
                }
            </div>
        </div>
    );
};

export default AllCaterogy;