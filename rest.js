function myfunc(...num1){
   let sum=0;
    for(let i of num1){
        sum +=i
    }
    return console.log(sum)
}
myfunc(1,2,3)