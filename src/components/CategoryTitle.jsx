import React from 'react';
import '../assets/styles/components/CategoryTitle.css';

const CategoryTitle = ({children}) => (
    <div className="categories">
        <h3 className="categories__title">Mi lista</h3>
        {children}
    </div>
);

export default CategoryTitle;