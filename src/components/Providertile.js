import React from 'react';

const ProviderTile = (props) => {
	const {
		id, name, address, phone, url, description,
		hours, languageHelp, wheelchair
	} = props.provider;
	return (
		<div className="tile" id={id}>
            <div className="provider-name">{name}</div>
            <div className="provider-address">{(address) ? address : "No address provided"}</div>
            <div className="provider-phone">{(phone) ? phone : "No phone number provided"}</div>
            <div className="provider-website">
                {(url) ? <a target="_blank" href={url}>{url}</a> : "No website provided"}
            </div>
            <div className="provider-description">
                {(description) ? description : "No description provided"}
            </div>
            <div className="last-line">
                <div className="provider-hours">Hours: {(hours) ? hours : "No hours provided"}</div>
                <div className="legend-icons">
                    {languageHelp && <i className='ri-earth-fill'></i>}
                    {wheelchair && <i className='ri-wheelchair-fill'></i>}
                </div>
            </div>
        </div>
	);
}

export default ProviderTile;