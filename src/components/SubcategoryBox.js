import React, { useState } from 'react';
import NavOption from './NavOption';

const SubcategoryBox = (props) => {
	const {subcategories, subcategorySelectEvent} = props;
	const [subcats, setSubcats] = useState(subcategories);
	return (
		<select class="breadcrumb subcategory-menu" id="subcatSelect" onChange={subcategorySelectEvent}>
            {
            subcats.map((subcat, index) => <NavOption obj={subcat} index={index} />);
            }
        </select>
	)
}