import React, { useState } from 'react';
import NavOption from './NavOption';

const CategoryBox = (props) => {
	const {categories, categorySelectEvent} = props;
	const [cats, setCategories] = useState(categories);
	return (
		<select className="breadcrumb category" id="catSelect"
			onChange={categorySelectEvent}>
            {
            cats.map((cat, index) => <NavOption obj={cat} key={index} />)
            }
        </select>
	);
}

export default CategoryBox;