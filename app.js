
TestRoute = RouteComb(4);
console.log(TestRoute.dest);
console.log(TestRoute.comb);
console.log(TestRoute.comb.length);
console.log(TestRoute.comb[2]);

function RouteComb(numDestn) {
  /*
  Generate route combinations, given a number of destinations, excluding the
  origin. For example, if you are at A and you have 2 destinations (B and C),
  numDestn is 2.
  Note: Currently, we assume you do not return to the origin (A), but in a 
  future update, we will include such a parameter that allows you to return to
  the origin or not.
  */
  
  const RouteComb = {}; // Create an object
  RouteComb.numDestn = numDestn;
  RouteComb.dest = [];
  RouteComb.comb = [];
  
  for (var i=1; i<=numDestn; RouteComb.dest.push(i), i++);
  // Generate an array of destination indices from 1 to n, as 0 is reserved for
  // the origin.

  RouteComb.comb = permutator(RouteComb.dest);
  // Generate all permutations

  var origin = 0;
  for (var i=0; i<RouteComb.comb.length; RouteComb.comb[i].unshift(0), i++);
  // Add origin 0 to the array

  return RouteComb;
}

function permutator(inputArr) {
// Generate all permutations
  var results = [];
  function permute(arr, memo) {
    var cur, memo = memo || [];
  
    for (var i=0; i<arr.length; i++) {
      cur = arr.splice(i, 1);
      if (arr.length === 0) {
        results.push(memo.concat(cur));
      }
      permute(arr.slice(), memo.concat(cur));
      arr.splice(i, 0, cur[0]);
    }
    return results;
  }
  return permute(inputArr);
}



/*
function permutator(inputArr) {
  // This function is for 6 locations, including an origin
    var results = [];
  
    function permute(arr, memo) {
      var cur, memo = memo || [];
  
      for (var i = 0; i < arr.length; i++) {
        cur = arr.splice(i, 1);
        if (arr.length === 0) {
          results.push(memo.concat(cur));
        }
        permute(arr.slice(), memo.concat(cur));
        arr.splice(i, 0, cur[0]);
      }
  
      return results;
    }
  
    return permute(inputArr);
  }

console.log(permutator([0, 1, 2, 3, 4]).length)
*/