(() => {
  type Sizes = "S" | "M" | "L" | "XL";
  type Product = {
    title: string,
    createAt: Date,
    stock: number,
    size?: Sizes
  }
  const products: Product[] = [];
  const addProduct = (data: Product) => {
    products.push(data);
  }
  addProduct({
    title: 'producto 1',
    createAt: new Date(1993, 1, 1),
    stock: 120
  });
  addProduct({
    title: 'producto 2',
    createAt: new Date(2005, 10, 1),
    stock: 25,
    size: 'L'
  });
  products.push({
    title: 'producto 3',
    createAt: new Date(2020, 0, 15),
    stock: 6,
    size: 'XL'
  })
  console.log(products);
})();
