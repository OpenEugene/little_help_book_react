import React, { Component } from 'react';

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
			<div class="breadcrumb-box">
	            <div class="find-help">Find help in</div>

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