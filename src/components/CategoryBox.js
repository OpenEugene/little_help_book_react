import React, { useState } from 'react';
import NavOption from './NavOption';

const CategoryBox = (props) => {
	const {categories, categorySelectEvent} = props;
	const [cats, setCategories] = useState(categories);
	return (
		<select class="breadcrumb category" id="catSelect"
			onChange={categorySelectEvent}>
            {
            cats.map((cat, index) => <NavOption obj={cat} index={index} />)
            }
        </select>
	);
}