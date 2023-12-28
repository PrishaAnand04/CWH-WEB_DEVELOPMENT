let a=prompt("enter the number whose factorial is needed ");

let fact=1;
for(let i=a;i>0;i--){
    fact=fact*i;
}

console.log("the factorial is "+ fact);