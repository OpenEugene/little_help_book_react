import React from 'react';

const ProviderTile = (props) => {
	const {
		id, name, address, phone, url, description,
		hours, languageHelp, wheelchair
	} = props.provider;
	return (
		<div class="tile" id={id}>
            <div class="provider-name">{name}</div>
            <div class="provider-address">{(address) ? address : "No address provided"}</div>
            <div class="provider-phone">{(phone) ? phone : "No phone number provided"}</div>
            <div class="provider-website">
                {(url) ? <a target="_blank" href={url}>{url}</a> : "No website provided"}
            </div>
            <div class="provider-description">
                {(description) ? description : "No description provided"}
            </div>
            <div class="last-line">
                <div class="provider-hours">Hours: {(hours) ? hours : "No hours provided"}</div>
                <div class="legend-icons">
                    {languageHelp && <i class='ri-earth-fill'></i>}
                    {wheelchair && <i class='ri-wheelchair-fill'></i>}
                </div>
            </div>
        </div>
	);
}

export default ProviderTile;