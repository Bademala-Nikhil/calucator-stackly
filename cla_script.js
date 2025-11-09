var input = document.querySelector("input");
let resetNext = false; 
function addVal(a){
    if(input.value === "0" || input.value === "error" || resetNext){
        input.value = a;
        resetNext=false;
    }else{
        input.value += a
    }
    
}

function clearVal(){
    input.value = "0";
    resetNext = false;
}
function error(){
    try{
        input.value = eval(input.value);
        resetNext = true;
    }
    catch{
        input.value = "error";
        resetNext = true;
    }
}



function DelFun(){
    input.value = input.value.slice(0,input.value.length-1)
}

function final(){
    input.value =  eval(input.value)
}