var obj1 = {
    "name":"Sam",
    "class":"MCA",
    "grade":"A+"
};
var obj2 = {
    "class":"MCA",
    "grade":"A+",
    "name":"Sam"
};

var flag=true;

if(Object.keys(obj1).length==Object.keys(obj2).length){
    for(key in obj1) { 
        if(obj1[key] == obj2[key]){
            continue;
        }
        else {
            flag=false;
            break;
        }
    }
}
else {
    flag=false;
}

console.log("Is object equal: "+flag);