


function buscaBinaria(lista, valorBusca) {
    let inicio = 0
    let fim = lista.length - 1
    let comp = 0
    while(fim >= inicio) {
        // Math.floor(): retira as casas decimais de um número
        let meio = Math.floor((fim + inicio) / 2)

        // Verifica se o valor na posição média é o valor de busca
        if(valorBusca === lista[meio]) {
            comp++
            return meio
        }
        else if(valorBusca < lista[meio]) {
            comp += 2
            fim = meio - 1
        }
        else {  // valorBusca > lista[meio]
            comp += 2
            inicio = meio + 1
        }
    }
    return -1       // Valor não encontrado

}

export default buscaBinaria
