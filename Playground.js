function validaArray(arr, num) {
    try{
        if(!arr && !num) throw new ReferenceError("Envie os parâmetros");

        if(typeof arr !== Object) throw new TypeError("Array precisa ser do tipo object");

        if(typeof num !== Number) throw new TypeError("Array precisa ser do tipo number");

        if(arr.length !== num) throw new RangeError("Tamanho inválido");

        return arr;
    }
    catch(e) {
        if(e instanceof ReferenceError){
            console.log("Este erro é um RefereceError")
            console.log(e.mensage)
        } else if(e instanceof TypeError){
            console.log("Este erro é um TypeError")
            console.log(e.mensage)
        }  else if(e instanceof RangeError){
            console.log("Este erro é um RangeError")
            console.log(e.mensage)
        } else {
            console.log("Tipo de erro não esperado:" + e);
        }
    }
} 

console.log(validaArray());