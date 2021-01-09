import React from 'react';
import ProviderTileSection from './ProviderTileSection';

const PageBody = (props) => {
	let { providers } = props;

	return (
		<main id="main">
			<ProviderTileSection providers={providers} />
		</main>
	);
}

export default PageBody;