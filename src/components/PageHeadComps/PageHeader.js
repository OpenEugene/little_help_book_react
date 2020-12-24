import React, { Component } from 'react';
import ProviderNav from "./ProviderNav";

class PageHeader extends Component {
	render() {
		return (
			<header>
	            <a class="homepage-link" href="index.html">
	                <img class="desktop-logo" src="../images/white-bird-on-black.png"
	                	alt="White Bird Clinic" width="42" height="42" />
	                <h1 class="little-help-book">Little Help Book</h1>
	            </a>

	            <div class="description">Human Services Resource Directory</div>

	            <ProviderNav />

	            <nav class="header-nav">
	                <button id="languageToggle" class="header-nav-item spanish menu-button">Español</button>
	                <button class="header-nav-item about menu-button">
	                    <a class="about" href="about.html">About</a>
	                </button>

	                <div class="header-nav-item search">
	                    <input type="image" src="../images/search-24px.svg" class="search-toggle" type="search" />
	                </div>
	            </nav>
	        </header>
		);
	}
}