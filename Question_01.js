 let students=["subh","anjali","shivani","shivangi","deepika","disha","lauren","shraddha"]

 let houses=[]

 for(const student of students){
    if(student.length<6){
        houses.push("white")
    }
    else if(student.length<8){
        houses.push("red")
    }
    else{
        houses.push("purple")
    }
 }

 console.log(houses)