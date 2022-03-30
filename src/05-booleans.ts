(() => {
  let isEnabled = true;
  // isEnabled = 'abl';
  // isEnabled = 134;
  isEnabled = false;
  let isNew: boolean = false;
  console.log('isNew', isNew);
  isNew = true;
  console.log('isNew', isNew);

  const random = Math.random();
  console.log('random', random);
  isNew = random >= 0.5 ? true : false;
  console.log('isNew', isNew);

  const myBoolean: Boolean = true;
  // NOTA: al igual que en los number no hay que utilizar
  //       el objeto Boolean, sino el tipo boolean
  // A diferencia de javascript que permite que una variable
  // que es declarada como boolean se le asigne null o bien
  // undefined, en Typescript no es aceptado
})()
