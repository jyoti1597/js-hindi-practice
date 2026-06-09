let a = 10
const b = 20
var c = 30 //gloabl scope

//{} its scope.In function, if else it called scope

if(true){ //inside block value not get out side  it called block scope 
    let a = 10
    const b = 20
    var c = 30   

   // console.log("INNER:", a);
}

//var 

//console.log(a);
//console.log(b);
//console.log(c);


//nested scoop

function one(){
    const username = "jyoti";

    function two (){
        const website = "youtube"
        console.log(username);
    }
    //console.log(website);
    // child can access to parent 
    two()
}

one()


if(true){
    const username = "jyoti"

    if(username === "jyoti"){
        const website = "youtube"
        console.log(username + website);
    }
    //console.log(website)
}

//console.log(username);


//++++++++++++++++++++++ interesting+++++++++++++++++++++++

console.log(addone(5))

function addone(value){
    return num +1
}



addone(5)const addTwo = function(num){// some it called expression . it kind a variable hold json value function
     return num +2
}

addTwo(5)// hoistick can declare before function because it assign in variable

