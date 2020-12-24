import React from 'react';
import NavOption from './NavOption'

const CityBox = (props) => {
	const {cities, citySelectEvent} = props
	return (
        <select class="breadcrumb city" id="citySelect" onChange={citySelectEvent}>
            {
            cities.map((city, index) => <NavOption obj={city} index={index} />);
            }
        </select>
	);
}