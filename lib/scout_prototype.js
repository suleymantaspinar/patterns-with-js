const Shopper = require('./Shopper');

const scout_prototype = new Shopper();
scout_prototype.addItemToTheList('camping knife');
scout_prototype.addItemToTheList('tent');
scout_prototype.addItemToTheList('backpack');
scout_prototype.addItemToTheList('map');

module.exports = scout_prototype;