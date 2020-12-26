import React, { Component } from 'react';
import CityBox from './CityBox';
import CategoryBox from './CategoryBox';
import SubcategoryBox from './SubcategoryBox';

class ProviderNav extends Component {
	cityboxId = "citySelect";
	catboxId = "catSelect";
	subcatboxId = "subcatSelect";
	cityboxMobId = "citySelect-mobile";

	constructor(props) {
		super(props);
		this.state = {
			availableProviders: props.providers,
			availableCategories: props.categories,
			availableSubcategories: props.subcategories 
		}
	}

	citySelectEvent() {

	}

	categorySelectEvent() {

	}

	subcategorySelectEvent() {

	}

	render() {
		const { cities } = this.props;
		const { availableCategories, availableSubcategories } = this.state;
		return (
			<div className="breadcrumb-box">
	            <div className="find-help">Find help in</div>

	            <CityBox cities={cities} 
	            	citySelectEvent={this.citySelectEvent} />

	            <CategoryBox categories={availableCategories} 
	            	categorySelectEvent={this.categorySelectEvent} />

            	<SubcategoryBox subcategories={availableSubcategories} 
            		subcategorySelectEvent={this.subcategorySelectEvent} />
	        </div>
		);
	}
}

export default ProviderNav;