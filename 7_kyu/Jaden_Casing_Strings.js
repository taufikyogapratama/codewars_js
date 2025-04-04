/*
We want to be able to call 'toJadenCase()' directly on a string like so:
'most trees are blue'.toJadenCase(); // returns 'Most Trees Are Blue'
For that, we need to add a method to the String prototype:
*/

Object.defineProperty(
    String.prototype,
    'toJadenCase',
    { value :
     function toJadenCase() {
        const arr = this.split(" ");
      let result = "";
      for(let i = 0; i < arr.length; i++){
          result += `${arr[i][0].toUpperCase()}${arr[i].slice(1)} `
      }
      return result.slice(0,result.length - 1);
     }
    }
  );

toJadenCase()