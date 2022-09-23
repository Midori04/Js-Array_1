var array1 = [1,2,3,4,5];
var array2 = [0,1,2,3,4];
var nyList = [];

function list(a,b,c) {
    for (let i = 0; i < 5; i++) {
        // console.log(a[i]+b[i]);
        c.push(a[i]+b[i]);
     } 
    //  console.log(c);
    return c;
}

console.log(list(array1,array2,nyList));