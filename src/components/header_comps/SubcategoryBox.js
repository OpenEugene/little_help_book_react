import React, { useState } from 'react';
import NavOption from './NavOption';

const SubcategoryBox = (props) => {
	const {subcategories, subcategorySelectEvent} = props;
	const [subcats, setSubcats] = useState(subcategories);
	return (
		<select className="breadcrumb subcategory-menu" id="subcatSelect" onChange={subcategorySelectEvent}>
            {
            subcats.map((subcat, index) => <NavOption obj={subcat} key={index} />)
            }
        </select>
	)
}

export default SubcategoryBox;