import React from 'react';

const NavOption = (props) => {
	const { id, name } = props.obj;
	return (
		<option value={id} index={props.index}>{name}</option>
	);
}

export default NavOption;