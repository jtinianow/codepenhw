// Set up the function
(function() {
  
  // Define Variables

  var Menu = (function() {
    // Get elements by class names
    var burger = document.querySelector('.burger');
    var menu = document.querySelector('.menu');
    var menuList = document.querySelector('.menu__list');
    var brand = document.querySelector('.menu__brand');
    var menuItems = document.querySelectorAll('.menu__item');
    
    // Set the default state to not active
    var active = false;
    
    // Set up menu toggle function
    var toggleMenu = function() {
      // Define behavior when the menu is not active
      if (!active) {
        // Add active class to menu element
        menu.classList.add('menu--active');
        // Add active class to menu__list elements
        menuList.classList.add('menu__list--active');
        // Add active class to menu__brand element
        brand.classList.add('menu__brand--active');
        // Change state of hamburger icon to close
        burger.classList.add('burger--close');
        // Loop through all menuItems elements and change class to active
        for (var i = 0, ii = menuItems.length; i < ii; i++) {
          menuItems[i].classList.add('menu__item--active');
        }
        
        // Change the Menu's state to active
        active = true;

        // Define behavior when the menu is active
      } else {
        // Remove active class from the menu element
        menu.classList.remove('menu--active');
        // Remove the active class from the menu__list elements
        menuList.classList.remove('menu__list--active');
        // Remove the active class from the menu__brand element
        brand.classList.remove('menu__brand--active');
        // Change state of close icon to hamburger
        burger.classList.remove('burger--close');
        // Loop through all menuItems elements and remove the active class
        for (var i = 0, ii = menuItems.length; i < ii; i++) {
          menuItems[i].classList.remove('menu__item--active');
        }
        
        // Change the Menu's state to not active
        active = false;
      }
    };
    
    // Set up click function
    var bindActions = function() {
      // Bind the toggleMenu function to the hamburger element
      burger.addEventListener('click', toggleMenu, false);
    };
    
    // Initialize click function
    var init = function() {
      // Run the bindActions functions
      bindActions();
    };
    
    // Define init function as an object literal
    return {
      init: init
    };
    
  }());
  
  // Initialize Menu function
  Menu.init();
  
}());