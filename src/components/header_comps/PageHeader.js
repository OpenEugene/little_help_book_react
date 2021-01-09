import React, { useState } from 'react';
import ProviderNav from './ProviderNav';
import logo from '../../images/white-bird-on-black.png';

const PageHeader = (props) => {
  let {
    cities,
    categories,
    availableCategories,
    subcategories,
    availableSubcategories,
    providers,
    categorySetFunc,
    subcategorySetFunc,
    providerSetFunc,
    selectedItems,
    selectedItemsSetFunc,
  } = props;
  return (
    <header>
      <a className="homepage-link">
        <img
          className="desktop-logo"
          src={logo}
          alt="White Bird Clinic"
          width="42"
          height="42"
        />
        <h1 className="little-help-book">Little Help Book</h1>
      </a>

      <div className="description">Human Services Resource Directory</div>

      <ProviderNav
        cities={cities}
        categories={categories}
        availableCategories={availableCategories}
        subcategories={subcategories}
        availableSubcategories={availableSubcategories}
        providers={providers}
        categorySetFunc={categorySetFunc}
        subcategorySetFunc={subcategorySetFunc}
        providerSetFunc={providerSetFunc}
        selectedItems={selectedItems}
        selectedItemsSetFunc={selectedItemsSetFunc}
      />

      <nav className="header-nav">
        <button
          id="languageToggle"
          className="header-nav-item spanish menu-button"
        >
          Español
        </button>
        <button className="header-nav-item about menu-button">About</button>

        <div className="header-nav-item search">
          <input
            type="image"
            src="../images/search-24px.svg"
            className="search-toggle"
            type="search"
          />
        </div>
      </nav>
    </header>
  );
};

export default PageHeader;
