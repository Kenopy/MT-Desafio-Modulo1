/*Elabore uma função que recebe três parâmetros:

    capital inicial - exemplo: 1000
    taxa de juros - exemplo: 0.02
    tempo da aplicação - exemplo: 36

A função retornará o montante da aplicação financeira sob o regime de juros compostos.

Nome da função: juros

Paramêtros: (number, number, number)

Retorno: number
*/

function juros(capital, taxa, tempo){
    let montante = (capital*(1+taxa)**tempo).toFixed(2);
    return montante;
}