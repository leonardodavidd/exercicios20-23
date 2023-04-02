function exe20() {
    var opcao = Number(prompt("Menu de opções \n 1 Média Aritmética \n 2 Média Ponderada \n 3 Sair"))
    if (opcao == 1){
        var nota1 = parseFloat(prompt('Digite a sua nota 1 ! '))
        var nota2 = parseFloat(prompt('Digite a sua nota 2 ! '))
        var media = (nota1 + nota2) / 2
        alert(' Sua nota 1 é ' + nota1 + '\n Sua nota 2 é ' + nota2 + '\n Sua média aritmética é: ' + media)
    }
    if (opcao == 2){
        var nota1 = Number(prompt('Digite a sua nota 1 ! '))
        var peso1 = Number(prompt('Digite o peso da nota 1 '))
        var nota2 = Number(prompt('Digite a sua nota 2 ! '))
        var peso2 = Number(prompt('Digite o peso da nota 2 '))
        var nota3 = Number(prompt('Digite a sua nota 3 ! '))
        var peso3 = Number(prompt('Digite o peso da nota 3 '))
        var media = ((nota1 * peso1 + nota2 * peso2 + nota3 * peso3)) / (peso1 + peso2 + peso3)
        alert('Sua media ponderada de acordo com os pesos é: ' + media)
    }
    if (opcao == 3){
        alert('Finalizando...')
    }
    if (opcao < 1 || opcao > 3){
        alert('Opção inválida ! Reinicie o programa e escolha uma opção adequada !')
    }
}
function exe21() {
    let soma1 = 0
    let soma2 = 0
    let soma3 = 0
    let soma4 = 0
    let soma5 = 0
    let soma6 = 0
    let opcao = 1
    while (opcao != 0) {
        opcao = Number(prompt("Menu de opções \n Vote no candidato 1 \n Vote no candidato 2 \n Vote no candidato 3 \n Vote no candidado 4 \n Vote 5 para Voto em nulo \n Vote 6 para voto em branco \n Digite 0 para sair !"))
        if (opcao == 1){
            soma1 += 1 
        }
        if (opcao == 2){
            soma2 += 1 
        }
        if (opcao == 3){
            soma3 += 1 
        }
        if (opcao == 4){
            soma4 += 1 
        }
        if (opcao == 5){
            soma5 += 1
        }
        if (opcao == 6){
            soma6 += 1 
        }
    }
    let porcentagem = ((soma1 + soma2 + soma3 + soma4 + soma5 + soma6)) / (soma5 * 100)
    let porcentagem2 = ((soma1 + soma2 + soma3 + soma4 + soma5 + soma6)) / (soma6 * 100)
    alert('Total de votos para o candidato 1: ' + soma1)
    alert('Total de votos para o candidato 2: ' + soma2)
    alert('Total de votos para o candidato 3: ' + soma3)
    alert('Total de votos para o candidato 4: ' + soma4)
    alert('Total de votos nulos: ' + soma5)
    alert('Total de votos em branco: ' + soma6)
    alert('Porcentagem de votos nulos sobre o total de votos: ' + porcentagem)
    alert('Porcentagem de votos em branco sobre o total de votos: ' + porcentagem2)
}
function exe22() {
    let cont = 0
    let cont2 = 0
    let opcao = Number(prompt('Digite quantas pessoas você quer cadastrar'))
    for(c=1; c <= opcao; c++){
        let idade = Number(prompt('Digite a sua idade ! '))
        let altura = Number(prompt('Digite a sua altura ! '))
        if (idade > 50){
            cont += 1
            cont2 += altura
        }
    }
    alert('Média das idades das pessoas que tem mais de 50 anos: ' + (cont2 / cont))
}
function exe23() {
    let opcao = Number(prompt('Digite 1 para Novo Salário \n Digite 2 para Férias \n Digite 3 para Décimo Terceiro \n Digite 4 para sair'))
    if (opcao < 1 || opcao > 4){
        alert('Dados inválidos ! Reinicie o programa e insira um dado válido')
    }
    if (opcao == 1){
        var salario = Number(prompt('Digite o seu salário ! '))
        if (salario <= 210){
            let porcentagem = salario * 0.15
            var novo = salario + porcentagem
            alert('Novo salário : ' + novo)
        }
        else if (salario >= 210 && salario <= 600){
            let porcentagem = salario * 0.10
            var novo = salario + porcentagem
            alert('Novo salário : ' + novo)
        }
        else if (salario > 600){
            let porcentagem = salario * 0.05
            var novo = salario + porcentagem
            alert('Novo salário : ' + novo)
        }
    }
    if (opcao == 2){
        var salario = Number(prompt('Digite o seu salário ! '))
        var ferias = salario / 3 
        var soma = salario + ferias
        alert('Seu novo salário é: ' + soma)
    }
    if (opcao == 3){
        var salario = Number(prompt('Digite o seu salário ! '))
        var meses = Number(prompt('Digite quantos meses você já trabalhou na empresa (máximo 12)'))
        var decimo = salario * (meses / 12)
        alert('Valor do décimo terceiro: ' + decimo)
    }   
    if (opcao == 4){
        alert('Finalizando...')
    } 
}
