 let bo=document.querySelector(".con").children

 function getRanCol(){
    let v1=Math.ceil(0+Math.random()*255);
    let v2=Math.ceil(0+Math.random()*255);
    let v3=Math.ceil(0+Math.random()*255);
    return `rgb(${v1},${v2},${v3})`;
}

 Array.from(bo).forEach(e=>{
    e.style.backgroundColor= getRanCol();
    e.style.color= getRanCol();
 })

 

// console.log(e);
// for(let i=0;i<5;i++){
//     // e.childnode[i].style.backgrounColor="beige"
//     if((i%2)==0){
//         e[i].style.backgroundColor="pink";
//         e[i].style.color="green";
//     }
//     else{
//         e[i].style.backgroundColor="green";
//         e[i].style.color="pink";
//     }
// }