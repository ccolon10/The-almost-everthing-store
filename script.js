var names = [];
var prices = [];

$(".newItem").click(function(){
   var name = $(".itemName").val();
   var price =parseInt($(".itemPrice").val());

   names.push(name);
   prices.push(price);
   
   //console.log(names);
   //console.log(prices);
   console.log(name);
   console.log(price);
});

$(".purchase").click(function(){
   var priceTotal=0;
   prices.forEach(function(element){
       priceTotal += element;
   });
   $(".totalPrice").text(priceTotal);
});