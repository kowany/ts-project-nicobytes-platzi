( () => {
  let productPrice = 100;
  productPrice = 12;
  console.log('product price', productPrice);

  let customerAge: number = 28;
  // customerAge = customerAge + '1'; // 281
  customerAge = customerAge + 1;
  console.log('customer age', customerAge);

  let productStock: number;
  console.log('productStock', productStock);
  if (productStock > 10 ) {
    console.log( 'Is greater');
  }

  let discount = parseInt('120');
  console.log('discount', discount);
  if (discount <= 200) {
    console.log('apply');
  } else {
    console.log('no apply');
  }

  let hex = 0xfff; //15*16*16 + 15*16 + 15*1
  console.log('hex', hex);
  let bin = 0b1010;
  console.log('bin', bin);

  //NOTA: nunca tipar con Number (que es un objeto)
  //      siempre hacerlo con number
})();
