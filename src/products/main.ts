import { createProduct, calcStock, products } from './product.service';

createProduct({
  name: 'producto 1',
  createAt: new Date(1993, 1, 1),
  stock: 120
});
createProduct({
  name: 'producto 2',
  createAt: new Date(2005, 10, 1),
  stock: 25,
  size: 'L'
});
createProduct({
  name: 'producto 3',
  createAt: new Date(2020, 0, 15),
  stock: 6,
  size: 'XL'
});
const total = calcStock();
console.log(products);
console.log(total);

