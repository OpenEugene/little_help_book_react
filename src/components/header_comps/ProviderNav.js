import React, { useState } from 'react';
import CityBox from './CityBox';
import CategoryBox from './CategoryBox';
import SubcategoryBox from './SubcategoryBox';

const cityboxId = "citySelect";
const catboxId = "catSelect";
const subcatboxId = "subcatSelect";

const ProviderNav = (props) => {
	let { cities,
		  categories,
		  availableCategories,
		  subcategories,
		  availableSubcategories,
		  providers, 
		  categorySetFunc, 
		  subcategorySetFunc,
		  providerSetFunc,
		  selectedItems,
		  selectedItemsSetFunc } = props;
	console.log(props);

	let isZeroOrEmpty = (v) => {
		return v === [] || v === null || v === 0 || v === "";
	}

	// Used in citySelectEvent to populate categoryBox with in-city categories.
	let filterCategories = (city) => {
		let cityCats = (city !== 'NA') ?
			// get the providers in the city.
			providers.filter(p => isZeroOrEmpty(p.city) ? true : p.city === city)
				// find the relative category to the provider field.
				.map(p => categories.find(c => c.id === p.category))
				.reduce((acc, c) => { if (!acc.includes(c)) {acc.push(c)} return acc; }, []) : 
			categories;
		console.log(cityCats);
		return cityCats;
	}

	// Used in citySelectEvent to populate the subcategoryBox with related subcategories
	let filterSubcategoriesCity = (city) => {
		let subcats = (city !== 'NA') ?
			categories.map(c => subcategories.filter(sc => sc.category === c.id))
			.reduce((acc, scArray) => {
				scArray.forEach(sc => { if (acc.includes(sc.id)) {acc.push(sc)} });
				return acc
			}, []) : subcategories;
		console.log(subcats);
		return subcats;
	}

	// Used in categorySelectEvent to populate the subcategoryBox with child subcategories.
	let filterSubcategories = (cat) => {
		let catSubcats = (cat !== 'NA') ? 
			subcategories.filter(sc => sc.category === cat) : 
			subcategories;
		console.log(catSubcats);
		return catSubcats;
	}

	let filterProvidersByCity = (prvdArray, city) => {
		let prvds = (city !== 'NA') ?
			prvdArray.filter(p => isZeroOrEmpty(p.city) ? true : p.city === city) :
			prvdArray;
		console.log(prvds);
		return prvds;
	}

	let filterProvidersByCategory = (prvdArray, cat) => {
		let prvds = (cat !== 'NA') ?
			prvdArray.filter(p => 
				p.subcategories.map(psc => subcategories.find(sc => sc.id === psc))
					.map(sc => categories.find(c => c.id === sc.category))
			) : prvdArray;
		console.log(prvds);
		return prvds;
	}

	let filterProvidersBySubcategory = (prvdArray, subcat) => {
		let prvds = (subcat !== 'NA') ?
			prvdArray.filter(p => p.subcategories.includes(subcat)) :
			prvdArray;
		console.log(prvds);
		return prvds;
	}

	let filterProviderFunc = () => {
		providerSetFunc(
			filterProvidersByCity(
				filterProvidersByCategory(
					filterProvidersBySubcategory(providers, 
						selectedItems.subcategory),
					selectedItems.category), 
				selectedItems.city)
			);
	}

	// The event that's called when the cityBox value changes.
	let citySelectEvent = (city) => {
		let newItems = {city: city, category: 'NA', subcategory: 'NA'};
		selectedItemsSetFunc(newItems);
		categorySetFunc(filterCategories(city));
		subcategorySetFunc(filterSubcategoriesCity(city));
		filterProviderFunc();
	}

	let categorySelectEvent = (cat) => {
		let newItems = selectedItems;
		newItems.category = cat;
		newItems.subcategory = 'NA';
		selectedItemsSetFunc(newItems);
		subcategorySetFunc(filterSubcategories(cat));
		filterProviderFunc();
	}

	let subcategorySelectEvent = (subcat) => {
		let newItems = selectedItems;
		newItems.subcategory = subcat;
		selectedItemsSetFunc(newItems);
		filterProviderFunc();
	}

	return (
		<div className="breadcrumb-box">
            <div className="find-help">Find help in</div>

            <CityBox cities={cities} 
            	citySelectEvent={(e) => { citySelectEvent(e.target.value); }} />

            <CategoryBox categories={availableCategories} 
            	categorySelectEvent={(e) => { categorySelectEvent(e.target.value); }} />

        	<SubcategoryBox subcategories={availableSubcategories}
        		subcategorySelectEvent={(e) => { subcategorySelectEvent(e.target.value); }} />
        </div>
	);
}

export default ProviderNav;