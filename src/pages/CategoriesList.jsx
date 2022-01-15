import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getCategories } from '../utils/api';

const CategoriesList = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories()
      .then((newCategories) => {
        setCategories(newCategories);
      })
      .catch((err) => {
        console.log(err);
      })
  }, [setCategories]);

  return (
    <nav>

      <div>
        <h3><Link
          to={`/reviews`}
        >All Categories</Link></h3>
        <p>A list of all categories</p>

        {categories.map((category) => (
          <div key={category.slug}>
            <h3><Link
              to={`/categories/${category.slug}`}
            > {category.slug.charAt(0).toUpperCase() + category.slug.slice(1)} </Link></h3>

            <p>{category.description}</p>
          </div>
        ))}
      </div>
    </nav>
  );
};

export default CategoriesList;