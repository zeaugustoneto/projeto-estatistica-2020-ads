import mergeSort2 from '../lib/mergeSort2.js'
import buscaBinaria from '../lib/buscaBinaria.js'

var acmFreq = 0, vetFreq_porcento = [], vetFreq_porcento_fixed = []
let facArray = [], fac = 0, vetorFac_Porcento = [], inicioVetor = [], fimVetor = [], inicioMediana = []
function freqPorcentoContinua(frequenciasimples, vetorPorcento, reduce) { // função para frequencia continua porcento
  for (let y = 0; y < frequenciasimples.length; y++) {
    let aux = frequenciasimples[y] / reduce
    aux = aux * 100
    vetorPorcento.push(aux)
  }
}

function freqPorcento(repeticao, vetor) { // função para frequencia normal porcento
  let aux = repeticao / vetor.length

  let percentual = aux * 100

  vetFreq_porcento.push(percentual.toFixed(2))
  vetFreq_porcento = vetFreq_porcento.map(x => parseFloat(x)) // conversão para number
}

let novoVetor = [], vetorFiltrado = [], vetorFrequencia_Simples = [], vetorSortido, mediana, moda = [], mediaAux = 0

let media
let resultadoSeparatriz

function descritiva() {

  const tipoDado = document.getElementById('tipoCalculo');
  const varNome = document.getElementById('nomeVar').value;
  var inputDados = document.getElementById('entradaDados').value;

  if (inputDados === '') {
    alert('Insira os dados para dar continuidade!')
  } else {

    if (tipoDado.value === "qualitativaNominal" || tipoDado.value === "qualitativaOrdinal") { //selecionador de quantitativa ou qualitativa
      qualitativa(inputDados);

    }
    else if (tipoDado.value === "quantitativaDiscreta") {
      quantitativaDiscreta(inputDados);
    }
    else if (tipoDado.value === 'quantitativaContinua') {
      quantitativaContinua(inputDados)
    } else {
      alert("Selecione um tipo de dado para continuar a operação!")
    }
  }
  function qualitativa(array) {
    if (Array.isArray(array)) {
      novoVetor = array
    } else {
      novoVetor = array.split(";")
    }
    vetorSortido = mergeSort2(novoVetor) // organiza o vetor por ordem

    if (tipoDado.value === "qualitativaOrdinal") {
      var inputOrdinal = document.createElement('input');
      var botao = document.createElement('button')

      document.getElementById('ordenarBTN').appendChild(inputOrdinal)
      document.getElementById('ordenarBTN').appendChild(botao)

      inputOrdinal.setAttribute('placeholder', 'INSIRA SEPARADO POR ;')
      inputOrdinal.setAttribute('id', 'entradaOrdinal')

      //click
      botao.addEventListener('click', function () {
        var entradaOrdinal = document.getElementById('entradaOrdinal').value
        entradaOrdinal = entradaOrdinal.split(';')
        var vetorUser = []

        // comparação e reodernação pelo usuario
        for (let i = 0; i < entradaOrdinal.length; i++) {  // função que compara um item do vetor com outro e caso for true, adiciona um contador para fazer frequencia normal
          for (let x = 0; x < vetorSortido.length; x++) {
            if (entradaOrdinal[i] === vetorSortido[x]) {
              vetorUser.push(vetorSortido[x])
            } else {
              continue;
            }
          }
        }

        console.log(entradaOrdinal + ' entrada ordinal')
        console.log(vetorUser.length == vetorSortido.length)
        if (vetorUser.length != vetorSortido.length) {
          alert('Os dados estão errados ou incompletos. Verifique e tente novamente.')
        } else {
          console.log(vetorSortido)
          console.log(vetorUser)
          vetorSortido = vetorUser

          let somaMediana = (vetorSortido.length / 2) - 1
          if (vetorSortido.length % 2 == 0) {
            mediana = [vetorSortido[somaMediana], vetorSortido[somaMediana + 1]]
          } else {
            somaMediana = Math.trunc(somaMediana)
            mediana = vetorSortido[somaMediana]
          }

          //----------------------------FREQUENCIAS------------------------

          let x
          for (let i = 0; i < vetorSortido.length; i = x) {  //função que compara um item do vetor com outro e caso for true, adiciona um contador para fazer frequencia normal
            let freqCont = 1;
            for (x = i + 1; x < vetorSortido.length; x++) {
              if (vetorSortido[i] == vetorSortido[x]) {
                freqCont++;
              } else {
                break;
              }
            }
            fac += freqCont // acumulador para frequencia acumulada
            facArray.push(fac) // push no array de frequencia acumulada
            vetorFrequencia_Simples.push(freqCont); // push no array de frequencia normal
          }
          let maior = Math.max.apply(null, vetorFrequencia_Simples)
          let indiceMaior = (vetorFrequencia_Simples.indexOf(maior))

          //------------------------FIM FREQUENCIAS -------------------------

          vetorFiltrado = vetorSortido.filter((este, i) => vetorSortido.indexOf(este) === i) // tira todos itens repetidos
          console.log(vetorFiltrado === entradaOrdinal)
          console.log(vetorFiltrado)
          console.log(entradaOrdinal)
          moda = vetorFiltrado[indiceMaior]

          criarTabela()
        }
      }
      )
    }


    else if (tipoDado.value === "qualitativaNominal") { //selecionador de quantitativa ou qualitativa

      //---------------MEDIANA-------------


      let somaMediana = (vetorSortido.length / 2) - 1
      if (vetorSortido.length % 2 == 0) {
        mediana = [vetorSortido[somaMediana], vetorSortido[somaMediana + 1]]
      } else {

        somaMediana = Math.trunc(somaMediana)
        mediana = vetorSortido[somaMediana]
      }

      //----------------------------FREQUENCIAS------------------------

      let x
      for (let i = 0; i < vetorSortido.length; i = x) {  //função que compara um item do vetor com outro e caso for true, adiciona um contador para fazer frequencia normal
        let freqCont = 1;

        for (x = i + 1; x < vetorSortido.length; x++) {
          if (vetorSortido[i] == vetorSortido[x]) {
            freqCont++;
          } else {
            break;
          }
        }
        fac += freqCont // acumulador para frequencia acumulada
        facArray.push(fac) // push no array de frequencia acumulada
        vetorFrequencia_Simples.push(freqCont); // push no array de frequencia normal
      }
      let maior = Math.max.apply(null, vetorFrequencia_Simples)
      let indiceMaior = (vetorFrequencia_Simples.indexOf(maior))

      //------------------------FIM FREQUENCIAS -------------------------

      vetorFiltrado = vetorSortido.filter((este, i) => vetorSortido.indexOf(este) === i) // tira todos itens repetidos
      for (let i = 0; i <= vetorFrequencia_Simples.length; i++) {
        if (vetorFrequencia_Simples[i] == maior) {
          moda.push(vetorFiltrado[i])
        }
        else {
          continue
        }
      }



      criarTabela()
    }
  }








  function quantitativaDiscreta(array) {  //falta adicionar o nome, mas isso é o de menos


    //testes 25;98;54;12;0;1;2;6;4;71;5;30;20;84;4    1;2;2;5;4;1;2;6;4;1;2



    novoVetor = array.split(";").map(x => parseFloat(x));  //separa o array por ";" e com map() passa tudo para Number float
    vetorSortido = mergeSort2(novoVetor)   //novoVetor.sort((a, b) => a - b); //function que o Glenio me passou para ordernar o vetor por ordem crescente
    //mediana 


    let somaMediana = (vetorSortido.length / 2) - 1
    if (vetorSortido.length % 2 == 0) {
      mediana = [vetorSortido[somaMediana] + vetorSortido[somaMediana + 1]] / 2                                                             // [vetorSortido[somaMediana], vetorSortido[somaMediana + 1]]
    } else {



      somaMediana = Math.trunc(somaMediana)
      mediana = vetorSortido[somaMediana]
    }




    let x
    for (let i = 0; i < vetorSortido.length; i = x) {  // função que compara um item do vetor com outro e caso for true, adiciona um contador para fazer frequencia normal
      let freqCont = 1;

      for (x = i + 1; x < vetorSortido.length; x++) {
        if (vetorSortido[i] == vetorSortido[x]) {
          freqCont++;
        } else {
          break;
        }
      }
      fac = fac + freqCont // acumulador para frequencia acumulada
      facArray.push(fac) // push no array de frequencia acumulada
      vetorFrequencia_Simples.push(freqCont); // push no array de frequencia normal

    }

    // moda -------------

    vetorFiltrado = vetorSortido.filter((este, i) => vetorSortido.indexOf(este) === i); // função que filtra o vetor para tirar todos números repetidos
    let maior = Math.max.apply(null, vetorFrequencia_Simples)
    for (let i = 0; i <= vetorFrequencia_Simples.length; i++) {
      if (vetorFrequencia_Simples[i] == maior) {
        moda.push(vetorFiltrado[i])
      }
      else {
        continue
      }
    }
    console.log(maior)
    console.log(moda)


    let indiceMaior = (vetorFrequencia_Simples.indexOf(maior))






    //moda = vetorFiltrado[indiceMaior]

    criarTabela()

  }
  //------------------------continua

  function quantitativaContinua(array) {
    console.log(array)
    novoVetor = array.split(";").map(x => parseFloat(x));  //separa o array por ";" e com map() passa tudo para Number float
    console.log(novoVetor)
    const continua = novoVetor.sort((a, b) => a - b); //function que o Glenio me passou para ordernar o vetor por ordem crescente
    //23;65;36;58;74;5;2;1;5;4;6;8;5;2;2;554;8;5;6;98;65;68;67;69      
    // 1000; 1234; 1235; 1543; 2345; 2654; 3456; 3567; 5678; 6000; 4326; 4120; 2000; 2000; 1000; 1765; 1990; 2541; 3210; 4280; 5390; 5980; 4234; 3789; 3210; 3876; 1876; 2876; 2165; 2760
    console.log(continua)
    const menor = continua[0], maior = continua[continua.length - 1]

    let amplitude = maior - menor, linhas = 0, ic = 0
    console.log(amplitude + ' amplitude')
    const j = Math.trunc(continua.length ** 0.5)
    const i = j - 1
    const k = j + 1
    console.log(j, i, k)
    do {
      amplitude++
      if (amplitude % i == 0) {
        linhas = i, ic = amplitude / i
        break
      }
      else if (amplitude % j == 0) {
        linhas = j, ic = amplitude / j
        break
      }
      else if (amplitude % k == 0) {
        linhas = k, ic = amplitude / k
        break
      }
    } while (amplitude % ic != 0)//(amplitude < maior)
    console.log(menor)
    console.log(ic, linhas)
    criarTabelaContinua(menor, linhas, ic, continua)

  }

  function criarTabelaContinua(menor, linhas, ic, continua) {
    // elemento
    var linha = document.createElement('tr')
    document.getElementById("cabecalho").appendChild(linha)
    var nomev = document.createElement('th');
    var frequenciaSimples = document.createElement('th')
    var vetFreq_porcento_html = document.createElement('th')
    var frequenciaAcumulada = document.createElement('th')
    var frequenciaAcumulada_Porcento = document.createElement('th')

    // vincular

    linha.appendChild(nomev)
    linha.appendChild(frequenciaSimples)
    linha.appendChild(vetFreq_porcento_html)
    linha.appendChild(frequenciaAcumulada)
    linha.appendChild(frequenciaAcumulada_Porcento)

    nomev.innerHTML = varNome
    frequenciaSimples.innerHTML = "Frequencia Simples"
    vetFreq_porcento_html.innerHTML = "Frequencia Simples %"
    frequenciaAcumulada.innerHTML = "Frequencia Acumulada"
    frequenciaAcumulada_Porcento.innerHTML = "Frequencia Acumulada %"

    let elementos = [menor]//[menor - 1]
    let frequenciaSimplesContinua = [], inicio, fim


    console.log(elementos)
    console.log(menor)

    for (let i = 1; i <= linhas; i++) { // 
      elementos.push(elementos[i - 1] + ic)
      frequenciaSimplesContinua.push((continua.filter(a => a >= elementos[i - 1] && a < elementos[i])).length) //freq simples

    }

    console.log(elementos)

    console.log(frequenciaSimplesContinua + ' freq simples continua')
    let freqReduce = frequenciaSimplesContinua.reduce((acumulado, n) => acumulado + n)
    freqPorcentoContinua(frequenciaSimplesContinua, vetFreq_porcento, freqReduce)
    for (let i = 0; i < linhas; i++) {

      var linha2 = document.createElement('tr')
      document.getElementById("coluna").appendChild(linha2)
      let coluna1 = document.createElement("td");

      let coluna2 = document.createElement("td")
      let coluna3 = document.createElement("td")
      let coluna4 = document.createElement("td")
      let coluna5 = document.createElement("td")

      linha2.appendChild(coluna1);
      linha2.appendChild(coluna2);
      linha2.appendChild(coluna3);
      linha2.appendChild(coluna4);
      linha2.appendChild(coluna5);
      if (inicio == 0) inicio = fim
      !inicio ? inicio = continua[0] : inicio = fim

      fim = inicio + ic



      fac += frequenciaSimplesContinua[i]
      facArray.push(fac)
      acmFreq += vetFreq_porcento[i]

      vetorFac_Porcento.push(acmFreq)

      inicioVetor.push(inicio + ' |--- ' + fim)
      fimVetor.push((inicio + fim) / 2)
      inicioMediana.push(inicio)

      coluna1.innerHTML = inicioVetor[i]
      coluna2.innerHTML = frequenciaSimplesContinua[i]
      coluna3.innerHTML = vetFreq_porcento[i].toFixed(1) + '%'
      coluna4.innerHTML = facArray[i]
      coluna5.innerHTML = vetorFac_Porcento[i].toFixed(1) + '%'

    }
    for (let z = 0; z < vetFreq_porcento.length; z++) {
      vetFreq_porcento_fixed.push((vetFreq_porcento[z].toFixed(1)))
    }
    console.log(fim, inicio)
    let chart = new Chart(document.getElementById('myChart'), {
      //tipo de gráfico
      type: 'bar',

      // dados pro dataset
      data: {
        labels: inicioVetor,       // inicioVetor +" |--- " + fimVetor,
        datasets: [{
          label: varNome,

          backgroundColor:
            ['rgb(255,99,132, 0.5)',
              'rgba(54, 162, 235, 0.5)',
              'rgba(255, 206, 86, 0.5)',
              'rgba(75, 192, 192, 0.5)',
              'rgba(153, 102, 255, 0.5)',
              'rgba(25, 159, 64, 0.5)',
              //-------------------//
              'rgb(25,9,132, 0.5)',
              'rgba(54, 150, 35, 0.5)',
              'rgba(55, 206, 6, 0.5)',
              'rgba(75, 92, 12, 0.5)',
              'rgba(13, 102, 25, 0.5)',
              'rgba(55, 59, 64, 0.5)'
            ],
          borderColor: '#000',
          data: vetFreq_porcento_fixed,// vetFreq_porcento_fixed,
          borderWidth: 0

        }],

      },
      options: {
        scales: {
          xAxes: [{
            display: false,
            barPercentage: 1.25,
            ticks: {
              max: 3,
            }
          }, {
            display: true,
            ticks: {
              autoSkip: false,
              max: 4,
            }
          }],
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    })

    //---------------medidas de tendencias centrais

    //media
    for (let i = 0; i < fimVetor.length; i++) {
      mediaAux += (fimVetor[i] * frequenciaSimplesContinua[i])
    }

    media = mediaAux / freqReduce

    //mediana

    let posicaoMediana = Math.round(freqReduce / 2), indiceVetor = 0
    console.log(posicaoMediana + ' posicao mediana')
    for (let i = 0; i < facArray.length; i++) {

      if (posicaoMediana <= facArray[i]) {
        break
      }
      indiceVetor++

    }

    console.log(indiceVetor + ' indice vetor')
    console.log(inicioMediana + ' inicio mediana')
    if (indiceVetor <= 0) {
      //if(facArray[indiceVetor] < posicaoMediana){
      mediana = inicioMediana[indiceVetor] + (((posicaoMediana - (facArray[indiceVetor] - facArray[indiceVetor])) / frequenciaSimplesContinua[indiceVetor]) * ic)
      //} else{
      //  mediana = inicioMediana[indiceVetor] + (((facArray[indiceVetor] - posicaoMediana) / frequenciaSimplesContinua[indiceVetor]) * ic)

      //}
    } else {
      mediana = inicioMediana[indiceVetor] + (((posicaoMediana - facArray[indiceVetor - 1]) / frequenciaSimplesContinua[indiceVetor]) * ic)
    }
    console.log(mediana + ' mediana')
    // moda

    let modaAux = Math.max.apply(null, frequenciaSimplesContinua)
    console.log(buscaBinaria(frequenciaSimplesContinua, modaAux))


    console.log(modaAux)
    /* let modaCont = uenciaSimplesContinua[0]
     for (let i = 0; i < frequenciaSimplesContinua.length; i++) {
       if (frequenciaSimplesContinua[i] < modaCont) {
         modaCont++
       } else {
         continue
       }
     }
 */
    let auxiliarModa = (frequenciaSimplesContinua.indexOf(modaAux))
    console.log(typeof (modaAux))
    //console.log(mouda + ' mouda')
    console.log(frequenciaSimplesContinua)
    let moda = fimVetor[auxiliarModa]
    console.log(moda + ' moda')
    console.log(fimVetor)


    //medidas de dispersão

    //desvio padrão

    let somatoriaDP = 0, desvioPadrao = 0, coeficienteVariacao = 0

    for (let i = 0; i < fimVetor.length; i++) {
      somatoriaDP += (((fimVetor[i] - media) ** 2) * frequenciaSimplesContinua[i])
    }

    let amostra_populacao = document.getElementById('amostra_populacao')

    if (amostra_populacao.value == 'populacao') {
      desvioPadrao = Math.sqrt(somatoriaDP / freqReduce)

    } else if (amostra_populacao.value == 'amostra') {
      desvioPadrao = Math.sqrt(somatoriaDP / (freqReduce - 1))
    }

    coeficienteVariacao = (desvioPadrao / media) * 100

    //----------------- medidas separatrizes

    let porcento, posicao, partesIguais

    let medidasUsuario = document.getElementById('medidasUsuario').value
    let separatriz = document.getElementById('separatriz').value

    if (separatriz == 'quartil') {
      partesIguais = 4
    } else if (separatriz == 'quintil') {
      partesIguais = 5
    } else if (separatriz == 'decil') {
      partesIguais = 10
    } else if (separatriz == 'porcentil') {
      partesIguais = 100
    }
    porcento = (100 / partesIguais)
    let medidaPorcento = (porcento * medidasUsuario) / 100
    posicao = (freqReduce * medidaPorcento)
    console.log(!indiceVetor)
    for (let i = 0; i < facArray.length; i++) {
      if (posicao <= facArray[i]) {

        if (indiceVetor == 0) resultadoSeparatriz = (inicioMediana[i] + (((posicao - 0) / frequenciaSimplesContinua[indiceVetor]) * ic)).toFixed(2)
        else if (indiceVetor != 0) resultadoSeparatriz = (inicioMediana[i] + (((posicao - facArray[indiceVetor - 1]) / frequenciaSimplesContinua[indiceVetor]) * ic)).toFixed(2)
        break
      }

      else {
        continue
      }
    }

    console.log(inicioMediana, posicao,)


    if (resultadoSeparatriz == undefined) resultadoSeparatriz = 'Separatriz não selecionada'

    document.getElementById('resultadoMedidasSeparatrizes').innerHTML = "Resultado Separatriz: " + resultadoSeparatriz

    document.getElementById('desvio_Padrao').innerHTML = "Desvio padrão: " + desvioPadrao.toFixed(1)
    document.getElementById('coef_Variacao').innerHTML = "Coeficiente de variação: " + coeficienteVariacao.toFixed(1) + "%"
    document.getElementById('moda').innerHTML = "Moda: " + moda
    document.getElementById('media').innerHTML = "Média: " + media.toFixed(1)
    document.getElementById('mediana').innerHTML = "Mediana: " + mediana.toFixed(2)

  }

  function criarTabela() {

    // elemento
    var linha = document.createElement('tr')
    document.getElementById("cabecalho").appendChild(linha)
    var nomev = document.createElement('th');
    var frequenciaSimples = document.createElement('th')
    var vetFreq_porcento_html = document.createElement('th')
    var frequenciaAcumulada = document.createElement('th')
    var frequenciaAcumulada_Porcento = document.createElement('th')

    // vincular

    linha.appendChild(nomev)
    linha.appendChild(frequenciaSimples)
    linha.appendChild(vetFreq_porcento_html)
    linha.appendChild(frequenciaAcumulada)
    linha.appendChild(frequenciaAcumulada_Porcento)

    nomev.innerHTML = varNome
    frequenciaSimples.innerHTML = "Frequencia Simples"
    vetFreq_porcento_html.innerHTML = "Frequencia Simples %"
    frequenciaAcumulada.innerHTML = "Frequencia Acumulada"
    frequenciaAcumulada_Porcento.innerHTML = "Frequencia Acumulada %"

    for (let i = 0; i < vetorFiltrado.length; i++) {

      freqPorcento(vetorFrequencia_Simples[i], vetorSortido)

      var linha2 = document.createElement('tr')
      document.getElementById("coluna").appendChild(linha2)
      let coluna1 = document.createElement("td");
      let coluna2 = document.createElement("td")
      let coluna3 = document.createElement("td")
      let coluna4 = document.createElement("td")
      let coluna5 = document.createElement("td")

      linha2.appendChild(coluna1);
      linha2.appendChild(coluna2);
      linha2.appendChild(coluna3);
      linha2.appendChild(coluna4);
      linha2.appendChild(coluna5);

      acmFreq += vetFreq_porcento[i]
      coluna1.innerHTML = vetorFiltrado[i]
      coluna2.innerHTML = vetorFrequencia_Simples[i]
      coluna3.innerHTML = vetFreq_porcento[i] + " %"
      coluna4.innerHTML = facArray[i]
      coluna5.innerHTML = Math.round(acmFreq) + ' %'

      // media
      mediaAux += vetorFiltrado[i] * vetorFrequencia_Simples[i]
    }

    if (tipoDado.value === "qualitativaOrdinal" || tipoDado.value === "qualitativaNominal") { //selecionador de quantitativa ou qualitativa
      //---------------graficos--------------- QUALITATIVA
      let chart = new Chart(document.getElementById('myChart'), {
        //tipo de gráfico
        type: 'pie',

        // dados pro dataset
        data: {
          labels: vetorFiltrado,
          datasets: [{
            label: '%',
            backgroundColor:
              ['rgb(255,99,132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
                'rgba(153, 102, 255, 0.5)',
                'rgba(25, 159, 64, 0.5)',
                //-------------------//
                'rgb(25,9,132, 0.5)',
                'rgba(54, 150, 35, 0.5)',
                'rgba(55, 206, 6, 0.5)',
                'rgba(75, 92, 12, 0.5)',
                'rgba(13, 102, 25, 0.5)',
                'rgba(55, 59, 64, 0.5)'
              ],
            borderColor: '#000',
            data: vetFreq_porcento,
            borderWidth: 0.5
          }]
        },
        options: {
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true
              }
            }]
          },
          title: {
            display: true,
            text: varNome
          }

        }
      })
    }
    else if (tipoDado.value === "quantitativaDiscreta") {
      //------graficos--------QUANTITATIVA
      let chart = new Chart(document.getElementById('myChart'), {
        //tipo de gráfico

        type: 'bar',

        // dados pro dataset
        data: {
          labels: vetorFiltrado,
          datasets: [
            {
              label: 'Frequência',
              backgroundColor: ['rgb(255,99,132)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgb(25,9,132, 0.5)',
                'rgba(54, 150, 35, 0.5)',
                'rgba(55, 206, 6, 0.5)',
                'rgba(75, 92, 12, 0.5)',
                'rgba(13, 102, 25, 0.5)',
                'rgba(55, 59, 64, 0.5)'
              ],
              borderColor: 'rgb(255,99,132)',
              data: vetFreq_porcento,
              borderWidth: 1
            }]
        },
        options: {
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true
              }
            }]
          },
          title: {
            display: true,
            text: varNome
          }

        }
      })
    }
    else {
      alert("INVALIDO")
    }

    let freqReduce = vetorFrequencia_Simples.reduce((acumulado, n) => acumulado + n)

    if (tipoDado.value === "qualitativaOrdinal" || tipoDado.value === "qualitativaNominal") {

      media = "Não há média"
      let desvioPadrao = "Não há desvio padrão"
      let coeficienteVariacao = "Não há coeficiente de variação"

      document.getElementById('desvio_Padrao').innerHTML = "Desvio padrão: " + desvioPadrao
      document.getElementById('coef_Variacao').innerHTML = "Coeficiente de variação: " + coeficienteVariacao
      document.getElementById('moda').innerHTML = "Moda: " + moda
      document.getElementById('media').innerHTML = "Média: " + media
      document.getElementById('mediana').innerHTML = "Mediana: " + mediana

    }
    else if (tipoDado.value == 'quantitativaDiscreta') {

      media = mediaAux / freqReduce
      let somatoriaDP = 0, desvioPadrao = 0, coeficienteVariacao = 0
      for (let i = 0; i < vetorFiltrado.length; i++) {
        somatoriaDP = (((vetorFiltrado[i] - media) ** 2) * vetorFrequencia_Simples[i]) + somatoriaDP
      }
      let amostra_populacao = document.getElementById('amostra_populacao')

      if (amostra_populacao.value == 'populacao') {
        desvioPadrao = Math.sqrt(somatoriaDP / freqReduce)
      } else if (amostra_populacao.value == 'amostra') {
        desvioPadrao = Math.sqrt(somatoriaDP / (freqReduce - 1))
      }

      coeficienteVariacao = (desvioPadrao / media) * 100

      document.getElementById('desvio_Padrao').innerHTML = "Desvio padrão: " + desvioPadrao.toFixed(2)
      document.getElementById('coef_Variacao').innerHTML = "Coeficiente de variação: " + Math.round(coeficienteVariacao) + "%"
      document.getElementById('moda').innerHTML = "Moda: " + moda
      document.getElementById('media').innerHTML = "Média: " + media
      document.getElementById('mediana').innerHTML = "Mediana: " + mediana

    }

    let porcento, posicao, partesIguais

    let medidasUsuario = document.getElementById('medidasUsuario').value
    let separatriz = document.getElementById('separatriz').value

    if (separatriz == 'quartil') {
      partesIguais = 4
    } else if (separatriz == 'quintil') {
      partesIguais = 5
    } else if (separatriz == 'decil') {
      partesIguais = 10
    } else if (separatriz == 'porcentil') {
      partesIguais = 100
    }
    porcento = (100 / partesIguais)
    let medidaPorcento = (porcento * medidasUsuario) / 100
    posicao = facArray[facArray.length - 1] * medidaPorcento

    for (let i = 0; i < facArray.length; i++) {
      if (posicao <= facArray[i]) {
        resultadoSeparatriz = vetorFiltrado[i]
        break
      }
    }

    if(resultadoSeparatriz == undefined) resultadoSeparatriz='Não há ou não foi possível encontrar a separatriz'

    document.getElementById('resultadoMedidasSeparatrizes').innerHTML = "Resultado Separatriz: " + resultadoSeparatriz
  }
}

btnCalcular.addEventListener("click", descritiva)


