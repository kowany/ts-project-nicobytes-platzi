(() => {
  type Sizes = "S" | "M" | "L" | "XL";
  function createProductToJson(
    title: string,
    createAt: Date, // en este caso TS permite el objeto Date
    stock: number,
    size: Sizes
  ) {
    return {
      title,
      createAt,
      stock,
      size
    }
  }
  const producto1 = createProductToJson('P1', new Date(), 100, 'L');
  console.log(producto1);
  console.log(producto1.title);
  console.log(producto1.createAt);
  console.log(producto1.stock);
  console.log(producto1.size);

  const createProductToJsonV2 = (
    title: string,
    createAt: Date, // en este caso TS permite el objeto Date
    stock: number,
    size?: Sizes
  ) => {
      return {
        title,
        createAt,
        stock,
        size
      }
    }
    // NOTA: cuando no se envía algo en TS por defecto es undefined
    const producto2 = createProductToJsonV2('P2', new Date(), 15);
    console.log(producto2);
    console.log(producto2.title);
    console.log(producto2.createAt);
    console.log(producto2.stock);
    console.log(producto2.size);
    // Funciones en TS
    // En TS tenemos que declarar el tipo de dato de cada
    // parámetro en la función. Además de que TS nos va a
    // marcar error en caso de que agreguemos más o menos
    // parámetros de los requeridos.
})();
