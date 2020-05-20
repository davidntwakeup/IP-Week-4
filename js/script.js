function getPizzaOrder(pizzaType,pizzaQuantity,extraToppings,crustType,pizzaSize,delivery) {
    this.pizzaType = pizzaType;
    this.pizzaQuantity = pizzaQuantity;
    this.extraToppings = extraToppings;
    this.crustType = crustType;
    this.pizzaSize = pizzaSize;
    this.delivery = delivery;
    this.sizePrice = 0;
    this.crustPrice = 0;
    this.toppingsPrice = 0;
    this.deliveryPrice = 0;
    this.price = 0;
};
getPizzaOrder.prototype.finalCost = function() {
  if (this.pizzaSize === "small") {
    this.sizePrice = 300;
  } else if (this.pizzaSize === "medium") {
    this.sizePrice = 600;
  } else if (this.pizzaSize === "large") {
    this.sizePrice = 850;
  } ;

  if (this.crustType === "stuffed") {
    this.crustPrice = 150;
  } else if (this.crustType === "thick") {
    this.crustPrice = 100;
  } else if (this.crustType === "thin") {
    this.crustPrice = 100;
  } else if (this.crustType === "gluten-free") {
    this.crustPrice = 200;
  }; 

  if (this.pizzaSize === "small") {
    this.toppingsPrice = 100;
  } else if (this.pizzaSize === "medium") {
    this.toppingsPrice = 150;
  } else if (this.pizzaSize === "large") {
    this.toppingsPrice = 200;
  };
  this.price = ((this.sizePrice + this.crustPrice + this.toppingsPrice) * this.pizzaQuantity);
};
getPizzaOrder.prototype.toBeDelivered = function (){
  if(this.delivery === "delivered"){
    this.price += 300;
  } else if(this.delivery === "collected"){
    this.price += 0;
  };
};
function resetFieldValues(){
  pizzaSize = "";
  pizzaType = "";
  extraToppings = "";
  crustType = "";
  $("#pizza-quantity").val("");
};

//User Logic //
$(function(){
  var modal = $(".order");
  var placeOrder = $(".place-order");
  var close = $(".close");
  placeOrder.click(function(){
    modal.show();
  });
  close.click(function(){
    modal.hide();
  });
  $(".custom-pizza").submit(function(event) {
    event.preventDefault();
    var pizzaSize = $("#pizza-size").val();
    var pizzaType = $("#pizza-type").val();
    var crustType = $("#crust-type").val();
    var extraToppings = $("#topping-type").val();
    var pizzaQuantity = parseInt($("#pizza-quantity").val());
    var delivery = $("#delivery").val();
    var newPizzaOrder = new getPizzaOrder(pizzaType,pizzaQuantity,extraToppings,crustType,pizzaSize,delivery);
    newPizzaOrder.finalCost();
    newPizzaOrder.toBeDelivered();    
    alert("You have ordered " + pizzaQuantity + " " + pizzaSize + " " + pizzaType + " pizza(s) with a " + crustType + " crust and " + extraToppings + " toppings. It will be " + delivery + ".");
    alert("The total is " + newPizzaOrder.price + " Ksh");
    resetFieldValues();
  }); 
});