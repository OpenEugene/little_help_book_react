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

	let isZeroOrEmpty = (v) => {
		return v === [] || v === null || v === 0 || v === "";
	}

	// Used in citySelectEvent to populate categoryBox with in-city categories.
	let filterCategories = (city) => {
		let cityCats =
			// get the providers in the city.
			providers.filter(p => isZeroOrEmpty(p.city) ? true : p.city === city)
				// pull out the subcategory id array out of each provider record.
				.map(p => p.subcategories)
				// reduce the provider subcategory id arrays (pscArray) into one array with no duplicates
				.reduce((acc, pscArray) => {
					pscArray.foreach(psc => { if (!acc.includes(psc)) {acc.push(psc)} });
					return acc;
				}, [])
				// get the parent category ids of each subcategory
				.map(psc => subcategories.find(sc => sc.id === psc).category)
				// remove duplicate category ids
				.reduce((acc, cid) => { if (!acc.includes(cid)) {acc.push(cid)} return acc; }, [])
				// finally, retrieve the category records for each category id
				.map(cid => categories.find(c => c.id === cid));
		console.log(cityCats);
		return cityCats;
	}

	// Used in categorySelectEvent to populate the subcategoryBox with child subcategories.
	let filterSubcategories = (cat) => {
		let catSubcats = subcategories.filter(sc => sc.category === cat);
		console.log(catSubcats);
		return catSubcats;
	}

	let filterProvidersByCity = (prvdArray, city) => {
		let prvds =
			prvdArray.filter(p => isZeroOrEmpty(p.city) ? true : p.city === city);
		console.log(prvds);
		return prvds;
	}

	let filterProvidersByCategory = (prvdArray, cat) => {
		let prvds =
			prvdArray.filter(p => 
				p.subcategories.map(psc => subcategories.find(sc => sc.id === psc))
					.map(sc => categories.find(c => c.id === sc.category))
			);
		console.log(prvds);
		return prvds;
	}

	let filterProvidersBySubcategory = (prvdArray, subcat) => {
		let prvds =
			prvdArray.filter(p => p.subcategories.includes(subcat));
		console.log(prvds);
		return prvds;
	}

	let filterProviderFunc = () => {
		providerSetFunc(filterProvidersByCity(
			filterProvidersByCategory(
				filterProvidersBySubcategory(
					providers, selectedItems.subcategory), 
				selectedItems.category), selectedItems.city));
	}

	// The event that's called when the cityBox value changes.
	let citySelectEvent = (city) => {
		let newItems = selectedItems;
		newItems.city = city;
		selectedItemsSetFunc(newItems);
		categorySetFunc(filterCategories(city));
		filterProviderFunc();
	}

	let categorySelectEvent = (cat) => {
		let newItems = selectedItems;
		newItems.category = cat;
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
            	citySelectEvent={(value) => { citySelectEvent(value); }} />

            <CategoryBox categories={availableCategories} 
            	categorySelectEvent={(value) => { categorySelectEvent(value); }} />

        	<SubcategoryBox subcategories={availableSubcategories}
        		subcategorySelectEvent={(value) => { subcategorySelectEvent(value); }} />
        </div>
	);
}

export default ProviderNav;