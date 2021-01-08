import React, { useState } from 'react';
import PageHeader from './components/header_comps/PageHeader';
import './App.css';

function dummyCities() {
	return [
		{id: "rec1", name: "Eugene/Springfield"},
		{id: "rec2", name: "Creswell"},
		{id: "rec3", name: "Junction City"}
	];
}

function dummyCategories() {
	return [
		{id: "rec1", name: "Basic Needs"},
		{id: "rec2", name: "Legal"},
		{id: "rec3", name: "Education"}
	];
}

function dummySubcategories() {
	return [
		{id: "rec1", name: "Bedding", category: "rec1"},
		{id: "rec2", name: "Food", category: "rec1"},
		{id: "rec3", name: "Pro Bono", category: "rec2"},
		{id: "rec4", name: "Immigration Representation", category: "rec2"},
		{id: "rec5", name: "Adult Education", category: "rec3"}
	];
}

function dummyProviders() {
	return [
		{id: "rec1", name: "Eugene Mission", subcategories: ["rec1", "rec2"], city: "rec1"},
		{id: "rec2", name: "Lane Food Pantry", subcategories: ["rec2"], city: "rec1"},
		{id: "rec3", name: "James Law Firm", subcategories: ["rec4"], city: "rec2"},
		{id: "rec4", name: "Cody Law Firm", subcategories: ["rec3", "rec4"], city: "rec1"},
		{id: "rec5", name: "Lane Community College", subcategories: ["rec5"], city: "rec1"},
		{id: "rec6", name: "Jimmys Soup Kitchen", subcategories: ["rec2"], city: "rec3"},
		{id: "rec7", name: "Creswell Community College", subcategories: ["rec5"], city: "rec2"}
	];
}

function App() {
	const cities = dummyCities();
	const categories = dummyCategories();
	const subcategories = dummySubcategories();
	const providers = dummyProviders();
	let [availCats, setcats] = useState(categories);
	let [availSubcats, setsubcats] = useState(subcategories);
	let [availPvds, setpvds] = useState(providers);
	let [selectedItems, selectedItemsFunc] = useState({city:'NA', category:'NA', subcategory:'NA'});
	return (
		<div className="App">
			<PageHeader cities={cities}
				categories={categories}
				availableCategories={availCats}
				subcategories={subcategories}
				availableSubcategories={availSubcats}
				providers={providers}
				categorySetFunc={setcats}
				subcategorySetFunc={setsubcats}
				providerSetFunc={setpvds}
				selectedItems={selectedItems}
				selectedItemsSetFunc={selectedItemsFunc} />
			
		</div>
	);
}

export default App;