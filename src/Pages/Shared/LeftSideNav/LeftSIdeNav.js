import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSIdeNav = () => {
const [categories, setCategories] = useState([]);

useEffect(() => {
   fetch('https://dragon-news-server-mo-60-node.vercel.app/news-categories')
   .then(res => res.json())
   .then(data => setCategories(data));
}, []);

   return (
      <div>
         <h4>Categories</h4>
         {
            categories.map(category => <p key={category.id}>
               <Link to={`category/${category.id}`}>{category.name}</Link>
            </p>)
         }
      </div>
   );
};

export default LeftSIdeNav;