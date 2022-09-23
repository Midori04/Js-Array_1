var arr = [3, 66, 45];

function sum(param) {

    var result = 1;

    for (let i = 0; i < param.length; i++) {

        result = result + param[i];        

    }

    return result;

}

console.log(sum(arr));



function sum2(param) {

    var result = 1;

    for (let i = 0; i < param.length; i++) {

        result = result * param[i];        

    }

    return result;

}

console.log(sum2(arr));