import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import UserList from './UserList';
import ProductList from './ProductList';
import Nav from './Nav';
import Form from './ProductForm';

const root = document.getElementById('root');

class User extends Component{
	constructor(){
		super();
		this.state = {users: []};
	}
	componentDidMount(){
		axios.get('api/users')
		.then(response => response.data)
		.then(users => this.setState({users}))
	}
	render(){
		let nav = <Nav/>;
		let view 
		if(!this.state.user){
			view = <UserList users = {this.state.users}/>;
		}
		return (
			<div className ='container'>
				{ nav }
				<h1>Users</h1>
				{ view }
			</div>
		);
	}
}
class Product extends Component{
	constructor(){
		super();
		this.state = {products: []};
		this.onDelete = this.onDelete.bind(this);
    	this.onSelect = this.onSelect.bind(this);
    	this.onDeselect = this.onDeselect.bind(this);
	}
	onSelect(product){
		this.setState({product});
	}
	onDelete(product){
		const products= this.state.products.filter(_product=>_product.id!==product.id);
		this.setState({products});
		axios.delete('api/products/${product.id}')
	}
	onDeselect(){
		this.setState({product:null})
	}
	componentDidMount(){
		axios.get('api/products')
		.then(response => response.data)
		.then(products => this.setState({products}))
	}
	render(){
		let nav = <Nav onSelect={this.onSelect}/>;
		let form = <Form/>;
		let view 
		if(!this.state.product){
			view = <ProductList products = {this.state.products} onDelete={this.onDelete} onSelect={this.onSelect}/>;
		}
		return (
			<div className ='container'>
				{ nav }
				{ form }
				<h1>Products</h1>
				{ view }
			</div>
		);
	}
}


ReactDOM.render(<User />, root);
