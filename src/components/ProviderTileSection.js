import React from 'react';
import ProviderTile from './ProviderTile';

const ProviderTileSection = (props) => {
	let { providers } = props;

	return (
		<section id="provider-tiles" className="providers">
			{
				(providers) ? 
					providers.map((p, index) => <ProviderTile provider={p} key={index} />) :
					<h3><em>Loading...</em></h3>
			}
		</section>
	);
}

export default ProviderTileSection;