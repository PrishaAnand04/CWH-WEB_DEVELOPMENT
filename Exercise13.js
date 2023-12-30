function cCard(title,cName,views,monthsOld,duration,thumbnail){
    let viewsS
    if(views<10000000){
        viewsS= views/1000 + "K";
    }
    else if(views>10000000){
        viewsS = views/1000000 + "M";
    }
    else{
        viewsS=views;
    }
    let ih=`<div class="card">
    <div class="image">
        <img src="${thumbnail}" alt="img" height="200px">
        <div class="capsule">${duration}</div>
    </div>
    <div class="text">
        <h1>${title}</h1>
        <p>${cName} . ${viewsS} . ${monthsOld}</p>
    </div>
</div>`

document.querySelector(".container").innerHTML= document.querySelector(".container").innerHTML + ih
}

cCard("The IT GIRL guid for 2024","Aestheticunt","727K","2 months ago","31.06","https://i.pinimg.com/564x/3c/c7/a8/3cc7a86ba245ae9fe3b14e043608362b.jpg")

























