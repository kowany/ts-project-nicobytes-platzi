(() => {
  let price = [1,3,3,2,4,8,7,9, 'hola', true];
  // price.push('asf');
  // price.push(true);
  // price.push({});
  price.push(258);
  price = [1,3,3,4,5];

  let products = ['hola', true];
  products.push(false);

  const mixed: (number | string | boolean | Object)[] = ['hola', true];
  // NOTA: todos los elementos en javascript son Object
  mixed.push(258);
  mixed.push('adf');
  mixed.push(false);
  mixed.push({});
  mixed.push([]);

  let numbers = [1,3,3,2,4,8,7,9];
  numbers.map( item => item * 2);
})();
