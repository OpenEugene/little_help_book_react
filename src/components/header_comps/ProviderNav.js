import React, { Component } from 'react';
import CityBox from './CityBox';
import CategoryBox from './CategoryBox';
import SubcategoryBox from './SubcategoryBox';

class ProviderNav extends Component {
	constructor(props) {
		super(props);
	}

	citySelectEvent() {

	}

	categorySelectEvent() {

	}

	subcategorySelectEvent() {

	}

	render() {
		const { cities, categories, subcategories } = this.props;
		return (
			<div className="breadcrumb-box">
	            <div className="find-help">Find help in</div>

	            <CityBox cities={cities} 
	            	citySelectEvent={this.citySelectEvent} />

	            <CategoryBox categories={categories} 
	            	categorySelectEvent={this.categorySelectEvent} />

            	<SubcategoryBox subcategories={subcategories} 
            		subcategorySelectEvent={this.subcategorySelectEvent} />
	        </div>
		);
	}
}

export default ProviderNav;