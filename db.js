const Sequelize = require('sequelize');

const conn = new Sequelize(process.env.DATABASE_URL);

const User = conn.define('user', {
	name: conn.Sequelize.STRING
});

const Product = conn.define('product', {
	name: conn.Sequelize.STRING
});

const sync = ()=>conn.sync({ force:true });

const seed = ()=>{
	var usernames = ['curly', 'larry', 'moe'];
	var productnames = ['foo', 'buzz', 'bazz'];
	return sync()
	.then(()=> Promise.all(usernames.map(name => User.create({name}))))
	.then(()=>Promise.all(productnames.map(name => Product.create({name}))))
	.catch(e=>console.log(e))
};

module.exports = {
	sync,
	seed,
	models: {
		User,Product
	}
};