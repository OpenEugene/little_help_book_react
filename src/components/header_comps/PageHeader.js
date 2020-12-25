import React, { Component } from 'react';
import ProviderNav from "./ProviderNav";

class PageHeader extends Component {
	render() {
		const { cities, categories, subcategories } = this.props;
		return (
			<header>
	            <a className="homepage-link">
	                <img className="desktop-logo" src="../images/white-bird-on-black.png"
	                	alt="White Bird Clinic" width="42" height="42" />
	                <h1 className="little-help-book">Little Help Book</h1>
	            </a>

	            <div className="description">Human Services Resource Directory</div>

	            <ProviderNav cities={cities} categories={categories} subcategories={subcategories} />

	            <nav className="header-nav">
	                <button id="languageToggle" className="header-nav-item spanish menu-button">Español</button>
	                <button className="header-nav-item about menu-button">About</button>

	                <div className="header-nav-item search">
	                    <input type="image" src="../images/search-24px.svg" className="search-toggle" type="search" />
	                </div>
	            </nav>
	        </header>
		);
	}
}

export default PageHeader;