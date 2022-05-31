/* 
Palíndromo, do grego palin (novo) e dromo (percurso), é toda palavra ou frase que pode ser lida de trás pra frente e que, independente da direção, mantém o seu sentido.

Dito isto, elabore uma função que recebe uma palavra e retorne um objeto com com duas propriedades:

palindromo: true ou false

palavra: a palavra recebida como argumento da função

Nome da função: palindromo
Paramêtros: (string)
Retorno: { palindromo: boolean, palavra: string} 
*/

function palindromo(nome){
    //Convertendo string para array
    const result = nome.split("");
    console.log(result);
    //Criando um segundo array, sendo inverso do primeiro
    const reverse = result.reverse();
    console.log(reverse);

    const result2 = result;
    const qtd = result2.map(Number);
    console.log(qtd.length)
    
    let cont = 0;
    for (let i = 0; i < qtd.length; i++){
        if(result[i] == reverse[i]){
            cont +=1;
        }
        
    }
    console.log("O contador é igual a: "+cont);

    if (cont == qtd.length){
        console.log("Palindromo: True, palavra: '"+nome+"'");
    }else{
        console.log("Palindromo: False, palavra: '"+nome+"'");
    }
}

palindromo('ANA')