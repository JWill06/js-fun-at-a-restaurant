function createRestaurant(name, menus){
  var pizzaRestaurant = {
    name: name,
    menus: {
      lunch: [], // [item.type === lunch]
      breakfast: [],// [item.type === breakfast]
      dinner: [] //[item.type === dinner]
    }
  }
  return pizzaRestaurant
}

function addMenuItem(restaurant, item){
 if(restaurant.menus[item.type].includes(item)){
   return;
} else {
restaurant.menus[item.type].push(item)
   }
}

function removeMenuItem(restaurant, itemName, menuType) {
   // Find the index of the item to remove
   var itemIndex = restaurant.menus[menuType].findIndex(function(menuItem) {
      return menuItem.name === itemName;
   });
  
   // If the item is found, remove it from the menu
   if (itemIndex !== -1) {
      restaurant.menus[menuType].splice(itemIndex, 1);
      return `No one is eating our ${itemName} - it has been removed from the ${menuType} menu!`;
   } else {
      // If the item is not found, return a message indicating that the item is not on the menu
      return `Sorry, we don't sell ${itemName}, try adding a new recipe!`;
   }
  }
  
 
 function checkForFood(restaurant, item) {
//   console.log("REST:", restaurant);
//   console.log("FOOD:", item);
 
  var menuType = item.type; // This should be 'lunch', 'breakfast', or 'dinner'
 
 
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