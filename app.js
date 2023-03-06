

function print(a){
var inp = document.getElementById('my')
    inp.value += a

}

function clear(){
    document.getElementById('my').value = ''
}

function result(){
var inp = document.getElementById('my')
    inp.value = eval(inp.value)
}
