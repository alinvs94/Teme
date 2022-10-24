// Excercise 1
const products =  [
   {
     "id": 37,
     "title": "ank Tops for Womens/Girls",
     "price": 50,
     "quantity": 2,
     "total": 100,
     "discountPercentage": 12.05,
     "discountedPrice": 88
   },
   {
     "id": 80,
     "title": "Chain Pin Tassel Earrings",
     "price": 45,
     "quantity": 3,
     "total": 135,
     "discountPercentage": 17.75,
     "discountedPrice": 111
   },
   {
     "id": 68,
     "title": "Stylish Luxury Digital Watch",
     "price": 57,
     "quantity": 3,
     "total": 171,
     "discountPercentage": 9.03,
     "discountedPrice": 156
   },
   {
     "id": 81,
     "title": "Round Silver Frame Sun Glasses",
     "price": 19,
     "quantity": 1,
     "total": 19,
     "discountPercentage": 10.1,
     "discountedPrice": 17
   },
   {
     "id": 90,
     "title": "Cycle Bike Glow",
     "price": 35,
     "quantity": 1,
     "total": 35,
     "discountPercentage": 11.08,
     "discountedPrice": 31
   }
 ];
// 1 - sa se calculeze totalul
 const sumFunction = () => {
   const totalSum = products.reduce((total, accumulator) => total + parseFloat(accumulator.discountedPrice), 0);
   return totalSum;
 };

 const showSumFunction = () => {
   const totalSum = sumFunction();
   console.log('The total is:',totalSum+'$');
 }
// 2- sa se afiseze total cantitate
 const quantityFunction = () => {
   const totalQuantity = products.reduce((previousQuantity, currentQuantity) => previousQuantity + currentQuantity.quantity, 0);
   return totalQuantity;
 };

 const showQuantityFunction = () => {
  const totalQuantity = quantityFunction();
  console.log('You have:',totalQuantity, 'products in the cart');
}
// 3 - sa se afiseze totalul discount
 const discountFunction= () => {
   const totalDiscount = products.reduce((previousValue, currentValue) => parseInt(previousValue + (currentValue.total * (currentValue.discountPercentage / 100)))  , 0);
   return totalDiscount
 };

 const showDiscountFunction = () => {
  const totalDiscount = discountFunction();
  console.log('You saved:',totalDiscount+'$');
}
// 4 - se modifica produsul cu id-ul 90 - se sterge produsul cu id 90 si se reface factura cu cerintele de mai sus
const deleteFunction = () => {
   const copyProducts = products.map(data => {
      return data;
   });
   const deleteObj = copyProducts.filter((product => product.id !== 90 ));
   console.log(deleteObj);
   const newSumArray = products.map(data => {
      if (data.id === 90) {                                                          
         return newTotalSum = sumFunction() - data.discountedPrice;                
      }                                                                            
   });                                                                              
   console.log('New total:',newTotalSum+'$'); 

/*const newTotalSum = sumFunction() - (products.map(data => {        //not working!!!
  if (data.id === 90){
      return data.discountedPrice     
   }}));  
   console.log(newTotalSum);*/

   const newQuantityArray = products.map(data => {
      if (data.id === 90) {                                                          
         return newTotalQuantity = quantityFunction() - data.quantity;            
      }                                                                            
   });                                                                              
   console.log('New total quantity:',newTotalQuantity, 'products');

   const newDIscountArray = products.map(data => {
    if (data.id === 90) {                                                          
       return newTotalDiscount = parseInt(discountFunction() - (data.total * (data.discountPercentage / 100))); 
    }                                                                            
 });                                                                              
 console.log("New total discount:",newTotalDiscount+"$");
};

// 5- se modifica pretul si cantitatea la produsul cu id 80 si se recalculeaza totalul discountPercentage si discountPrice 
// pe produs si dupa pe toate produsele (cerintele 1,2 ,3)
const modifyFunction = () => {

  const newPrice = 68;
  const newQuantity = 5;
  const newTotal = newPrice * newQuantity;

  const copyProducts = products.map(data => {   // cum sa calculam 'total' si 'discountedPrice' fara noi variabile si fara a face un nou .map method
    if (data.id === 80) {
      return {
        ...data,
        price: newPrice,
        quantity: newQuantity,
        total: newPrice * newQuantity,
        discountedPrice: parseInt(newTotal - (newTotal * (data.discountPercentage/100)))
      }
    }
    return data;
  })
  console.log('The new bill:',copyProducts);

  const modifiedObjectSum = copyProducts.reduce((total, accumulator) => total + parseFloat(accumulator.discountedPrice), 0);
  console.log('Upgraded total:',modifiedObjectSum+'$');
  const modifiedObjectQuantity = copyProducts.reduce((previousQuantity, currentQuantity) => previousQuantity + currentQuantity.quantity, 0);
  console.log('In cart there are:',modifiedObjectQuantity, 'products');
  const modifiedObjectDiscount = copyProducts.reduce((previousValue, currentValue) => parseInt(previousValue + (currentValue.total * (currentValue.discountPercentage / 100)))  , 0);
  console.log('You saved:',modifiedObjectDiscount+'$');
};

// 6 - se sorteaza dupa cantitate, dupa discountPrice si dupa total - 3 sortari avem aici

const sortFunction = () => {
  const sortQuantityArray = products.sort((a,b) => a.quantity - b.quantity);
  console.log('Products sorted by quantity:',sortQuantityArray);

  const sortDiscountArray = products.sort((a,b) => a.discountedPrice - b.discountedPrice);
  console.log('Products sorted by discount:', sortDiscountArray);

  const sortTotalArray = products.sort((a,b) => a.total - b.total);
  console.log('Products sorted by total sum:', sortTotalArray);
};