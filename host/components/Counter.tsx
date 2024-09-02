import React from 'react';
import DynamicImport from './DynamicImport';

function Counter () {

	const _props = {
		url : `http://localhost:3001/_next/static/chunks/remoteEntry.js`,
		name : 'remote',
		path : './remoteComp',
		componentProps : {
			location : 'Remote'
		}
	}
	return (
		<DynamicImport {..._props}/>
	)
}

export default Counter;