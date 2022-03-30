(() => {
  type UserID = string | number;
  let userId: UserID;


  // Literal types
  type Sizes = "S" | "M" | "L" | "XL";
  let shirtSize: Sizes;
  shirtSize = 'M';
  shirtSize = 'L';
  shirtSize = 'S';
  // shirtSize = 'jkljflkajslf';
  function greeting (myText: UserID, size: Sizes) {
    if ( typeof myText === 'string' ) {
      console.log(`string ${myText.toLowerCase()}`);
      myText.toLowerCase();
    }
  }
  greeting(3333, 'M');
  greeting('3333', 'L');
})();
