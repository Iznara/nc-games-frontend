import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CardContainer, CustomGreenButton } from '../styles/styles.components';
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

      <CardContainer>
      <CustomGreenButton><Link
          to={`/reviews`}
        >All Categories</Link></CustomGreenButton>
        
        <p>A list of all categories</p>
      </CardContainer>

      {categories.map((category) => (
        <CardContainer key={category.slug}>
                <CustomGreenButton><Link
            to={`/categories/${category.slug}`}
          > {category.slug.charAt(0).toUpperCase() + category.slug.slice(1)} </Link></CustomGreenButton>
          <p>{category.description}</p>
        </CardContainer>
      ))}
    </nav>
  );
};

export default CategoriesList;