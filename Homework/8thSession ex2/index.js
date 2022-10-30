// Excercise 2
const orders =[
   {
     "id": 1,
     "products": [
       {
         "id": 59,
         "title": "Spring and summershoes",
         "price": 20,
         "quantity": 3,
         "total": 60,
         "discountPercentage": 8.71,
         "discountedPrice": 55
       },
       {
         "id": 88,
         "title": "TC Reusable Silicone Magic Washing Gloves",
         "price": 29,
         "quantity": 2,
         "total": 58,
         "discountPercentage": 3.19,
         "discountedPrice": 56
       },
       {
         "id": 18,
         "title": "Oil Free Moisturizer 100ml",
         "price": 40,
         "quantity": 2,
         "total": 80,
         "discountPercentage": 13.1,
         "discountedPrice": 70
       },
       {
         "id": 95,
         "title": "Wholesale cargo lashing Belt",
         "price": 930,
         "quantity": 1,
         "total": 930,
         "discountPercentage": 17.67,
         "discountedPrice": 766
       },
       {
         "id": 39,
         "title": "Women Sweaters Wool",
         "price": 600,
         "quantity": 2,
         "total": 1200,
         "discountPercentage": 17.2,
         "discountedPrice": 994
       }
     ],
     "total": 2328,
     "discountedTotal": 1941,
     "userId": 97,
     "totalProducts": 5,
     "totalQuantity": 10
   },
   {
     "id": 2,
     "products": [
       {
         "id": 96,
         "title": "lighting ceiling kitchen",
         "price": 30,
         "quantity": 2,
         "total": 60,
         "discountPercentage": 14.89,
         "discountedPrice": 51
       },
       {
         "id": 91,
         "title": "Black Motorbike",
         "price": 569,
         "quantity": 3,
         "total": 1707,
         "discountPercentage": 13.63,
         "discountedPrice": 1474
       },
       {
         "id": 9,
         "title": "Infinix INBOOK",
         "price": 1099,
         "quantity": 1,
         "total": 1099,
         "discountPercentage": 11.83,
         "discountedPrice": 969
       },
       {
         "id": 16,
         "title": "Hyaluronic Acid Serum",
         "price": 19,
         "quantity": 1,
         "total": 19,
         "discountPercentage": 13.31,
         "discountedPrice": 16
       },
       {
         "id": 54,
         "title": "Pubg Printed Graphic T-Shirt",
         "price": 46,
         "quantity": 3,
         "total": 138,
         "discountPercentage": 16.44,
         "discountedPrice": 115
       }
     ],
     "total": 3023,
     "discountedTotal": 2625,
     "userId": 30,
     "totalProducts": 5,
     "totalQuantity": 10
   },
   {
     "id": 3,
     "products": [
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
     ],
     "total": 460,
     "discountedTotal": 403,
     "userId": 63,
     "totalProducts": 5,
     "totalQuantity": 10
   }
]

// 1 - sa se calculeze totalul pe fiecare factura
const totalBill = () => {
  const copyOrders = orders.map(data => {
    
    const sumBill = data.products.reduce((total,accumulator) => total + accumulator.total ,0);
    return {
      ...data,
      total: sumBill,
    }
  })
  const totalSum = copyOrders.reduce((a,b) => a + b.total, 0)
  console.log('Sum bill is:', totalSum, 'And new array is:', copyOrders);
};

// 2/3 - sa se adauge pe primul nivel numarul de produse din cart 
const cartProducts = () => {
  const copyOrders2 = orders.map(data => {
    return data
  })
  const totalProducts = orders.reduce((previousProd, currentProd) => previousProd + currentProd.totalQuantity,0);
  const objProducts = {'Products in cart':totalProducts};
  copyOrders2.splice(0, 0, objProducts);
  console.log(copyOrders2,);
};

// 4 - sa se afiseze totalul discount - la fel ca mai sus dar cu discount

const discountedBill = () => {
 /* let objId = 1;
  const copyOrders3 = orders.map(data => {
    if (data.id === objId) {
      const discountBill = data.products.reduce((total,accumulator) => total + accumulator.discountedPrice ,0);
      console.log('Discounted Bill n.'+ objId, discountBill);
    }
    objId ++;
  }) */

  const copyOrders3 = orders.map(data => {
    const sumDiscount = data.products.reduce((accumulator, value) => accumulator + value.discountedPrice, 0)
    return {
      ...data,
      discountedPrice: sumDiscount
    }
  })
  const totalSumDiscount = copyOrders3.reduce((accumulator, value) => accumulator + value.discountedTotal, 0)
  console.log('New array:', copyOrders3,'\nTotal discount is:', totalSumDiscount)
};

// 5 - se modifica factura cu id-ul 2 - se sterge produsul cu id 16 si se reface factura cu cerintele de mai sus

const modifyObj = () => {
 /* const idIndex = orders.findIndex(index => index.id === 2)
  const copyProducts = orders.map(data => {
    if (data.id === 2) {
      const productIndex = data.products.findIndex(innerData => innerData.id === 16);
      data.products.splice(productIndex, 1);
      data.total = data.products.reduce((previousValue,currentValue) => previousValue + currentValue.total, 0);
      data.discountedTotal = data.products.reduce((previousValue,currentValue) => previousValue + currentValue.discountedPrice, 0);
      data.totalProducts = data.products.length;
      data.totalQuantity = data.products.reduce((previousValue,currentValue) => previousValue + currentValue.quantity, 0);
    }
    return {...data}
  }) */  // aici se lucreaza pe aceasi alocarea de memorie al arrayului orders, trebue sa schimbam doar copyProducts 

  const copyProducts = orders.map(data => {
    if (data.id === 2) {
      const deleteProduct = data.products.filter(product => product.id !== 16)
      const newTotalSum = deleteProduct.reduce((a,b) => a + b.total, 0)
      const newTotalDiscount = deleteProduct.reduce((a,b) => a + b.discountedPrice, 0)
      return {
        ...data,
        products: deleteProduct,
        total: newTotalSum,
        discountedTotal: newTotalDiscount
      }
    }
    return {
      ...data
    }
  })

  const totalSum = copyProducts.reduce((a,b) => a + b.total, 0)
  const totalDiscount = copyProducts.reduce((a,b) => a + b.discountedTotal, 0)

  console.log('We changed bill n. 2:',copyProducts,'\n..so total sum is:', totalSum,'...and total discount is:', totalDiscount);
};

// 6- se modifica pretul si cantitatea la factura cu nr 3 si produs id 90 si la fel se reface factura

const modifyObj2 = () => {
/*  const copyProducts1 = orders.map(data => {
    if (data.id === 3) {
      data.products.map(innerData => {
        if (innerData.id === 90) {
          innerData.price = 40;
          innerData.quantity = 2;
          innerData.total = innerData.price * innerData.quantity;
          innerData.discountedPrice = parseInt(innerData.total - (innerData.total * (innerData.discountPercentage/100)));
          console.log('inner',innerData)
        }
      })
    data.total = data.products.reduce((previousValue,currentValue) => previousValue + currentValue.total, 0);
    data.totalQuantity = data.products.reduce((previousValue,currentValue) => previousValue + currentValue.quantity, 0);
    data.discountedTotal = data.products.reduce((previousValue,currentValue) => previousValue + currentValue.discountedPrice, 0);
    }
    return data;
  }) */

  const copyProducts1 = orders.map(data => {
    if (data.id === 3) {
      const newProducts1 = data.products.map(product => {
        if (product.id === 90) {
          return {
            ...product,
            price: 200,
            quantity: 10,
            total: 200 * 10,
            discountedPrice: parseInt((2000-(2000*product.discountPercentage/100)))
          }
        }
        return {
          ...product
        }
      })
      const sum = newProducts1.reduce((a,b) => a + b.total,0)
      const discount = newProducts1.reduce((a,b) => a + b.discountedPrice,0)

      return {
        ...data,
        products: newProducts1,
        total: sum,
        discountedTotal: discount
      }
    }
    return {
      ...data
    }
  })

  const totalSum = copyProducts1.reduce((a,b) => a + b.total, 0)
  const totalDiscount = copyProducts1.reduce((a,b) => a + b.discountedTotal, 0)

  console.log('Modifying product n.90 we have:', copyProducts1,'\n..so now total sum is:', totalSum,'...and total discount is:', totalDiscount);
};