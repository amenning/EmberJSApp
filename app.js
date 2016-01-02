var App = Ember.Application.create({
  LOG_TRANSITIONS: true
});

App.Router.map(function() {
  this.route('about');
  this.route('credits', {path: 'thanks'});
  this.resource('products');
});

App.IndexController = Ember.Controller.extend({
	productCount: 6,
	logo: 'images/logo-small.png',
	time: function(){
		return (new Date()).toDateString()
	}.property()
});

App.AboutController = Ember.Controller.extend({
  contactName: '',
  avatar: 'images/avatar.png',
  open: function(){
    if((new Date()).getDay() !== 0){
    	return 'Open';
    }else{
    	return 'Closed';
    }
  }.property()
});

App.PRODUCTS = [
	{
		title: 'Flint',
		price: 99,
		description: 'Flint is...',
		isOnSale: true,
		image: 'images/products/flint.png'
	},
	{
		title: 'Kindling',
		price: 249,
		description: 'Easily...',
		isOnSale: false,
		image: 'images/products/kindling.png'
	}	
];

App.ProductsRoute = Ember.Route.extend({
	model: function(){
		return App.PRODUCTS;
	}
});