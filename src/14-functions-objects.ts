(() => {
  type Sizes = "S" | "M" | "L" | "XL";
  const login = (data: {email: string, password: number}) => {
    console.log(data.email, data.password);
  }
  // login('abc@gmail.com', '123');
  login({
    email: 'abc@gmail.com',
    password: 123456
  });

  const products: any[] = [];
  const addProduct = (data: {
    title: string,
    createAt: Date, // en este caso TS permite el objeto Date
    stock: number,
    size?: Sizes
  }) => {
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
  console.log(products);
})();
