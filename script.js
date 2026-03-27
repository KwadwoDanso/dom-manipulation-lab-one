// Get references to the DOM elements
var productNameInput = document.getElementById("product-name");
var productPriceInput = document.getElementById("product-price");
var addProductButton = document.getElementById("add-product");
var cart = document.getElementById("cart");
var totalPriceSpan = document.getElementById("total-price");
var errorMessage = document.getElementById("error-message");

// Running total
var totalPrice = 0;

// Update the displayed total price
function updateTotalPrice(amount) {
    totalPrice += amount;
    // Prevent floating point from producing -0.00
    if (totalPrice < 0) { totalPrice = 0; }
    totalPriceSpan.textContent = totalPrice.toFixed(2);
}

// Remove an item from the cart
function removeItem(event) {
    var item = event.target.closest("li");
    var qty = parseInt(item.querySelector("input[type='number']").value);
    var price = parseFloat(item.dataset.price);
    updateTotalPrice(-(price * qty));
    item.remove();
}

// Update the total when a quantity input changes
function updateQuantity(event) {
    var input = event.target;
    var item = input.closest("li");
    var price = parseFloat(item.dataset.price);
    var oldQty = parseInt(item.dataset.qty);
    var newQty = parseInt(input.value);

    // Reject invalid quantity — reset to previous value
    if (isNaN(newQty) || newQty < 1) {
        input.value = oldQty;
        return;
    }

    // Adjust total by the difference
    var difference = newQty - oldQty;
    updateTotalPrice(price * difference);

    // Store the new quantity on the element
    item.dataset.qty = newQty;

    // Update the item subtotal label
    item.querySelector(".item-subtotal").textContent =
        "$" + (price * newQty).toFixed(2);
}

// Add a new product to the cart
function addProduct() {
    var name = productNameInput.value.trim();
    var price = parseFloat(productPriceInput.value);

    // Validate inputs
    if (!name) {
        errorMessage.textContent = "Please enter a product name.";
        return;
    }
    if (isNaN(price) || price <= 0) {
        errorMessage.textContent = "Please enter a valid price greater than 0.";
        return;
    }

    errorMessage.textContent = "";

    // Create the list item
    var li = document.createElement("li");
    li.className = "cart-item";
    li.dataset.price = price.toFixed(2);
    li.dataset.qty = "1";

    // Product name
    var nameSpan = document.createElement("span");
    nameSpan.textContent = name + " ($" + price.toFixed(2) + " each)";
    li.appendChild(nameSpan);

    // Quantity label
    var qtyLabel = document.createElement("label");
    qtyLabel.textContent = "Qty:";
    li.appendChild(qtyLabel);

    // Quantity input
    var qtyInput = document.createElement("input");
    qtyInput.type = "number";
    qtyInput.value = "1";
    qtyInput.min = "1";
    qtyInput.onchange = updateQuantity;
    li.appendChild(qtyInput);

    // Subtotal
    var subtotalSpan = document.createElement("span");
    subtotalSpan.className = "item-subtotal";
    subtotalSpan.textContent = "$" + price.toFixed(2);
    li.appendChild(subtotalSpan);

    // Remove button
    var removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.onclick = removeItem;
    li.appendChild(removeButton);

    cart.appendChild(li);
    updateTotalPrice(price);

    // Clear the inputs
    productNameInput.value = "";
    productPriceInput.value = "";
    productNameInput.focus();
}

// Wire up the Add Product button
addProductButton.onclick = addProduct;

