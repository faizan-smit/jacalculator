

function print(a){
var inp = document.getElementById('my')
    inp.value += a

}

function cls(){
    document.getElementById('my').value = ' '
}

function result(){
var inp = document.getElementById('my')
    inp.value = eval(inp.value)
}

function del1(){
    var myarr, $1, $2, $3;
    $1 = []
    var inp = document.getElementById('my')
    myarr = inp.value
    $1 = myarr.split("");
    $1.pop();
    $2 = $1.join("");
    inp.value = $2;
    // console.log(myarr);
    // console.log($1);
    // console.log($2);
    
    

}