# Dynamic Content Creation

 A dynamic shopping cart application to practice and reinforce your DOM manipulation skills. The application will allow users to add, update, and remove items dynamically while keeping track of the total price.

## Table of contents

- [Overview](#overview)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)
- [Acknowledgments](#acknowledgments)



## Overview
- Add items to their cart dynamically.
- View the items they have added, along with their prices and quantities.
- Update the quantity of items in the cart, reflecting real-time price changes.
- Remove items from the cart.



## Reflections

-How did you dynamically create and append new elements to the DOM?
    --Using document.createElement() to build each part of the list item, then using appendChild() to attatch them to the list item, and append the list item to unordered list in the cart. 

-What steps did you take to ensure accurate updates to the total price?
    --Storing the unit price on each list item using dataset.price so it can always be referenced later. 

-How did you handle invalid input for product name or price?
    --Checking both fields before creating anything. If the name was returned empty or was blank. This includess if the price was not a number or was a invalid number. Nothing will be added to the cart until both fields passed. 

-What challenges did you face when implementing the remove functionality?
    --The main challenge was making sure that the total cecreased by the right number. So i decided to read the current amount input at remval and then multiply by the stored unit price. 

### Links

- Solution URL:(https://github.com/KwadwoDanso/dom-manipulation-lab-one.git)


## My process
-The bas for the HTML, CSS, AND JS were provided.
-In the JS script file, reference all DOM elements at the top with getElementById so they were ready to be used through out the script.
-The updateTotalPrice() was written first since every other function is dependent on it.
-addProduct() - Read the 2 inputs, validates them, then builds the list tem individually with createElement and appendChild
- removeItem() - Read the stored price and current quantity off the list item, calls th updateTotalPrice() with a negative value to subtract, then removes the element from the DOM. 
-updateQuantity() - This was for handling the optional quantity feature. It calculates the difference between the old and new quantity, adjusts the total by the difference and updates the subtotal. 

### Built with

-Javascript
-HTML/CSS



### What I learned

- The use of DOM.
- Updating the DOM to reflect changes in user input.
- Using event handling for interactivity for adding, updating and removing items. 


## Author
-Author is Kwadwo 

## Acknowledgments


- MDN Web Docs
- w3schools
- Per Scholas JS lessons
- https://eloquentjavascript.net/14_dom.html


