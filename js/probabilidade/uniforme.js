const btnUniforme = document.getElementById('botao_uniforme')

let distrib_Nomal = () => {
    const maximo = document.getElementById('pontoMaximo').value
    const minimo = document.getElementById('pontoMinimo').value
    let intervalo
    let select = document.getElementById('opcoes_Duniforme').value
    let elemento = document.getElementById('valor').value

    if (select === "maiorQue") {
        intervalo = maximo - elemento
    } else if (select === 'menorQue') {
        intervalo = elemento - minimo
    } else {
        elemento = elemento.split(';').sort((a, b) => a - b)
        intervalo = elemento[1] - elemento[0]
    }

    let vetorMinMax = []
    vetorMinMax.push(minimo, maximo)
    vetorMinMax = vetorMinMax.map(x => Number(x))

    let media = ((vetorMinMax[1] + vetorMinMax[0]) / 2).toFixed(2)
    let dp = Math.sqrt((((maximo - minimo)) ** 2 / 12)).toFixed(2)

    function prob() {
        return Math.floor((((1 / (maximo - minimo)) * intervalo) * 100).toFixed(2))
    }



    let escrever_resultado = document.getElementById('resultados')
    escrever_resultado.innerHTML = 'A probabilidade é de: ' + prob() + '%'

    document.getElementById('labelMedia').innerHTML = 'Média: ' + media
    document.getElementById('labelDP').innerHTML = 'Desvio Padrão: ' + dp


}
btnUniforme.addEventListener('click', distrib_Nomal)