var numbers = [3, 6, 12, 18, 21, 24, 27];

var sort = numbers.slice().sort(function(a, b) {
  return a - b;
});

var smallest = sort[0],                      
    largest  = sort[sort.length - 1];

console.log('Smallest: ' + smallest);
console.log('Largest: ' + largest);