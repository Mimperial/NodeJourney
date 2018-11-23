function callFunction(fun, name){
    fun(name)
}
var sayBye = function(name){
    console.log(name + 'Bye')
}

callFunction(function(name){
    console.log(name + 'Bye')
}, 'rails365')