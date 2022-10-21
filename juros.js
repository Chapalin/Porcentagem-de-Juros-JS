import entrada from 'readline-sync';

console.log("Aplicação Juros\n");


let valorDivida = entrada.question("Informe o valor da dívida: ");


if (valorDivida > 0 && !isNaN(valorDivida)) {
    let diasAtraso = entrada.question("Informe a quantos dias está vencida: ");

    if (diasAtraso < 31) {
        if (!isNaN(diasAtraso)) {

            if (diasAtraso > 0 ) {
                let juros = diasAtraso <= 15 ? 5 : 10; 
        
                valorDivida = Number(valorDivida);
                diasAtraso = Number(diasAtraso);
        
                let total_juros = (valorDivida / 100) * juros;
                let valor_total = total_juros + valorDivida;
        
                console.log("\nValor dívida: " + valorDivida + "R$")
                console.log( "Dias de atráso: " + diasAtraso);
                console.log("Taxa de juros: " + juros + "%");
                console.log("Valor total com juros: " + valor_total + "R$");
        
            } else {
                console.log("Valor dívida: " + valorDivida + "R$")
                console.log("Você está com sorte, sua fatura não esta vencida:)")
                }

        } else {
            console.log("Valor Inválido, tente novamente ou ligue para central de atendimentos (51) 9-9999-9999") 
            }

    } else {
        console.log("Sua fatura venceu a mais de 31 dias, ligue para central de atendimentos para mais infornações (51) 9-9999-9999") 
        
        }

} else {
    console.log("Valor Inválido, tente novamente!") 
    }

    











