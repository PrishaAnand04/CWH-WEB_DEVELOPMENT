

const randomDelay=()=>{
    return new Promise((resolve,reject)=>{
        timeout=1+6*Math.random();
        setTimeout(()=>{
            resolve()
        },timeout*1000);
    })
}
const additem = async (item)=>{
    await randomDelay();
    let div=document.createElement("div");
    div.innerHTML=item;
    document.querySelector(".Hacker").append(div)
}

let text=["intialisizing hacking","Reading all files","Password files detected","sending all fiels","Cleanging up"]

document.querySelector(".btn").addEventListener("click",()=>{
    document.body.style.backgroundColor="black";
    document.body.style.color="green";
    for( let i=0;i<text.length;i++){
        additem(text[i]);
    }

})
