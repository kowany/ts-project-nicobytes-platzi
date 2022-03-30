(() => {
  let userId: string | number;
  userId = 2134;
  userId = 'lkjf';

  function greeting (myText: string | number) {
    if ( typeof myText === 'string' ) {
      console.log(`string ${myText.toLowerCase()}`);
      myText.toLowerCase();
    } else {
      console.log(`number ${myText.toFixed(2)}`);
    }
  }
  greeting('Héctor');
  greeting(1258.3698);
})();
