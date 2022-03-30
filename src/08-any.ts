(() => {
  let myDynamicVar: any;
  myDynamicVar = null;
  myDynamicVar = 133;
  myDynamicVar = {};
  myDynamicVar = '';

  myDynamicVar = 'hola';
  const rta = (myDynamicVar as string).toLowerCase();
  console.log(rta);
  myDynamicVar = 13233;
  const rta2 = (<number>myDynamicVar).toFixed();
  console.log(rta2);


  // NOTA: Se aconseja que el tipo any no sea utlizado

})();
