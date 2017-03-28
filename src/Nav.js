import React from 'react';

const Nav = ({onSelect})=>(
	<div className = "container">
		<ul className="nav nav-tabs">
		  <li className="active"><a href = "/">Users</a></li>
		  <li className="active"><a onClick={()=>onSelect()}>Products</a></li>
		</ul>
	</div>
);

export default Nav;