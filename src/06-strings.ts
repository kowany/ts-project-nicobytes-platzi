(() => {
  let productTitle = 'My amazing product';
  // productTitle = null;
  // productTitle = () => {};
  // productTitle = 123;
  productTitle = 'My amazing product change';
  console.log('productTitle', productTitle);
  const productDescription = "bla bla bla bla";
  console.log('productDescription', productDescription);

  const productPrice: number = 12;
  let isNew: boolean = false;

  let summary = `
  primera linea
  segunda linea
  tercera linea
  `;
  console.log('summary', summary);
  summary = `
  title: ${productTitle},
  description: ${productDescription},
  price: ${productPrice},
  isNew: ${isNew}
  `;
  console.log('summary', summary);

  const myString: string = 'algo';
  // NOTA: recordar no tipo con un objeto String, aunque
  // TS lo acepte es mala práctica
})();
