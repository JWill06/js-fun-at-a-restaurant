function createRestaurant(name, menus){
  var pizzaRestaurant = {
    name: name,
    menus: {
      lunch: [],
      breakfast: [],
      dinner: []
    }
  }
  return pizzaRestaurant
}

function addMenuItem(restaurant, item){
var type = item.type;
var exists = restaurant.menus[type].some(function(existingItem){
  return existingItem.name === item.name 
})
  if(!exists){
    restaurant.menus[type].push(item);
  } else {
  }
  return restaurant.menus
}

function removeMenuItem(restaurant, itemName, menuType) {

  if (!restaurant.menus || !restaurant.menus[menuType]) {
     return;
  }
 
  var itemIndex = restaurant.menus[menuType].findIndex(function(menuItem) {
     return menuItem.name === itemName;
  });
 
  // If the item is found, remove it from the menu
  if (itemIndex !== -1) {
     restaurant.menus[menuType].splice(itemIndex, 1);
     return `No one is eating our ${itemName} - it has been removed from the ${menuType} menu!`;
  } else {
     return `Sorry, we don't sell ${itemName}, try adding a new recipe!`;
  }
 }
 
 function checkForFood(restaurant, item) {
  console.log("REST:", restaurant);
  console.log("FOOD:", item);
 
  var menuType = item.type; // This should be 'lunch', 'breakfast', or 'dinner'
 
  if (!restaurant.menus || !restaurant.menus[menuType]) {
     return "The restaurant object is not structured correctly or the menu type is invalid.";
  }
 
  var menuIndex = restaurant.menus[menuType].findIndex(function(menuItem) {
     return menuItem.name === item.name;
  });
 
  if (menuIndex !== -1) {
     return `Yes, we're serving ${item.name} today!`;
  } else {
     return `Sorry, we aren't serving ${item.name} today.`;
  }
 }
 
 
 
 


module.exports = {
  createRestaurant, 
  addMenuItem,
  removeMenuItem,
  checkForFood
}