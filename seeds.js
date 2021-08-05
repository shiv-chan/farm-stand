const mongoose = require('mongoose');
const Product = require('./models/product');

mongoose
	.connect('mongodb://localhost:27017/farmStand', {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => {
		console.log(`Connected to database!`);
	})
	.catch((err) => {
		console.error(`Failed to connect to database: ${err}`);
	});

// const product = new Products({
// 	name: 'Ruby Grapefruit',
// 	price: 1.99,
// 	category: 'fruit',
// });

// product
// 	.save()
// 	.then((product) => console.log(product))
// 	.catch((err) => console.log(err));

const products = [
	{ name: 'Fairy Eggplant', price: 1.0, category: 'vegetable' },
	{ name: 'Organic Mini Seedless Watermelon', price: 3.99, category: 'fruit' },
	{ name: 'Organic Celery', price: 1.5, category: 'vegetable' },
	{ name: 'Chocolate Whole Milk', price: 2.69, category: 'dairy' },
];

Product.insertMany(products)
	.then((res) => console.log(res))
	.catch((err) => console.log(err));
