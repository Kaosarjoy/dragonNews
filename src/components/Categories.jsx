import React, { use } from 'react';
import { NavLink } from 'react-router';
const categoriesPromise = fetch('/categories.json')
.then((res)=>res.json())
const Categories = () => {
    const category = use(categoriesPromise)
    console.log(category)
    return (
        <div className='font-bold'>
            All Categories({category.length})
            <div className='grid grid-cols-1 gap-3 mt-2'>
        {category.map((c) => (
          <NavLink  className='btn category-btn font-semibold text-accent ' key={c.id} to={`/category/${c.id}`}>
            {c.name}
          </NavLink>
        ))}
      </div>

        </div>
    );
};

export default Categories;