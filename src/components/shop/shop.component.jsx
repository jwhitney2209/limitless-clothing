import { Routes, Route } from 'react-router-dom'

import CategoriesPreview from '../../pages/CategoriesPreview';
import Category from '../../pages/Category';

import "./shop.styles.scss";

function Shop() {
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
}

export default Shop;
