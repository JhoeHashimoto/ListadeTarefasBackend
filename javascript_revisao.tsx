function encontraMaiorNumero (numeros){

    let maiorNumero = numeros[0];

    for (let i =1; i < maiorNumero.lenght; i++){

        if (numeros[i] > maiorNumero){
            maiorNumero = numeros[i]
        }
    }


    return maiorNumero;


}

function encontraMenorNumero(numeros) {

    let menorNumero = numeros[0];

    for (let i = 1; i < numeros.length; i++) {
        if (numeros[i] < menorNumero) {
            menorNumero = numeros[i];
        }
    }

    return menorNumero;
}