import React, { useState } from 'react';

const FilterCategories = () => {
  const [status, changeStatus] = useState('Popular');

  let filter_categories = ['Popular', 'Novelty', 'Featured', 'Short films'];
  return (
    <div id="categoryes" className="filter__categoryes anchor">
      <div className="filter__categoryes-flex">
        {filter_categories.map((category, index) => (
          <div
            onClick={() => {
              changeStatus(category);
            }}
            className={`filter__categoryes-item
            ${category === status ? 'active-category' : ''}`}
            key={index}
          >
            <p>{category}</p>
            <span></span>
          </div>
        ))}
      </div>
      <span></span>
    </div>
  );
};

export default FilterCategories;
