function contagemRegressiva(numero){
    if(numero > 0){
        console.log(numero);
        contagemRegressiva(numero - 1);
    } else{
        console.log("lançamento!")
    }
}

contagemRegressiva(5);