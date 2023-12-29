let adj=prompt("enter your adjectives, atleast 3 seperated by commas(',') ");
// let ad2=prompt("enter your adjectives (2/3) ");
// let ad3=prompt("enter your adjectives (3/3) ");
// let adj=ad1+","+ad2+","+ad3;

let shopname=prompt("enter shop name, atleast 3 seperated by commas (',') ");
// let sh2=prompt("enter shop name (2/3) ");
// let sh3=prompt("enter shop name (3/3) ");
// let shopname=sh1+","+sh2+","+sh3;

let anoword=prompt("enter another words, atleast 3 seperated by commas (',') ");
// let aw2=prompt("enter another word (2/3) ");
// let aw3=prompt("enter another word (3/3) ");
// let anoword=aw1+","+aw2+","+aw3;
let totalwords=""
let n=0
for( let i=0;i<3;i++){
    for( let j=0;j<3;j++){
        for( let k=0;k<3;k++){
            totalwords+=(anoword.split(",")[k]+" "+adj.split(",")[i]+" "+shopname.split(",")[j]);
            totalwords+=",";
            n++;
            // alert("name is: "+ anoword.split(",")[k]+" "+adj.split(",")[i]+" "+shopname.split(",")[j]);
        }
    }
}

function randomNum(min,max){
    return Math.random()*(max-min)+min;
}

let a=randomNum(0,n+1);

console.log(totalwords.split(",")[a]);
