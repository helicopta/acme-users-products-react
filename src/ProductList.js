import React from 'react';

const ProductListItem = ({product, onDelete})=>(
	<li className = 'list-group-item'> 
		{product.name}
		<button className="btn btn-warning" onClick={()=>onDelete(product)}>Delete</button>
	</li>
);
const ProductList = ({products, onDelete})=>(
	<ul className = 'list-group'>
		{products.map(product => <ProductListItem onDelete={onDelete} key = {product.id} product={product}/>)}
	</ul>
);

export default ProductList;