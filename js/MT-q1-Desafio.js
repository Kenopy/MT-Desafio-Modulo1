/*
Todas as informações em um computador são armazenadas em uma sequência de códigos, por ser uma máquina eletrônica, o computador só “entende” duas informações: presença ou ausência de energia, aceso ou apagado.

Dessa forma, matematicamente só podemos trabalhar com dois algarismos: 1 e 0. Utilizamos eles para escrever todos os outros valores numéricos e, por serem apenas dois algarismos, chamamos o sistema de binário.

Escreva uma função cujo objetivo é transformar um valor numérico na base 10, para um valor binário (base 2).

Nome da função: binario

Paramêtros: (number)

Retorno: string
*/

function binario(valor){
    let result = valor.toString(2);
    return(result);
}

binario(10.5)