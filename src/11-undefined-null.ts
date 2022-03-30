(() => {
  // let myNumber: number;
  // let myString: string;
  let myNull: null = null;
  let myUndefined: undefined = undefined;

  let myNumber: number | null = null;
  myNumber = 33;

  let myString: string | undefined = undefined;
  myString = 'algo';

  function hi(name: string | null) {
    let hello = 'hola ';
    if (name) {
      hello += name;
    } else {
      hello += 'nobody';
    }
    console.log(hello);
  }

  function hi2(name: string | null) {
    let hello = 'hola ';
    hello += name?.toLowerCase() || 'nobody';
    console.log(hello);
  }

  hi(null);
  hi('Rosy');
  hi2(null);
  hi2('Rosy');
  // El Optional chaining o encadenamiento opcional no solo
  // se puede usar con null, sino también con undefined.
  // A su vez se puede usar también con funciones de la
  // siguiente forma:
  // let result = someInterface.customMethod?.();
})();
