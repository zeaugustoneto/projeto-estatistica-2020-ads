document.querySelector("#add-data").addEventListener("click", function () {
  let typeOfData = document.getElementById("type");
  let varName = document.getElementById("var-name").value;
  let input = document.getElementById("dataInput").value;





  if (typeOfData.value === "quantitativa") { //selecionador de quantitativa ou qualitativa
    quantitativeFunc(varName, input);
  } else {
    qualitativeFunc(varName, input);
  }





});
let newArray;








function qualitativeFunc(name, array) {



  //testes branco;azul;preto;preto;branco;branco;vermelho;azul;amarelo;verde

  if (name == '') {
    name = 'Nome não escolhido'
  }
  document.getElementById('headVar').innerText = name
  newArray = array.split(";")

  let sortArray = newArray.sort()

  let mediana
  let somaMediana = (sortArray.length / 2) - 1
  if (sortArray.length % 2 == 0) {
    mediana = [sortArray[somaMediana], sortArray[somaMediana + 1]]
  } else {



    somaMediana = Math.trunc(somaMediana)
    mediana = sortArray[somaMediana]
  }



  console.log(sortArray)

  let freqArray = [], facArray = []
  let x, fac = 0
  for (let i = 0; i < sortArray.length; i = x) {  //função que compara um item do vetor com outro e caso for true, adiciona um contador para fazer frequencia normal
    let freqCont = 1;

    for (x = i + 1; x < sortArray.length; x++) {
      if (sortArray[i] == sortArray[x]) {
        freqCont++;
      } else {
        break;
      }
    }
    fac += freqCont // acumulador para frequencia acumulada
    facArray.push(fac) // push no array de frequencia acumulada
    freqArray.push(freqCont); // push no array de frequencia normal

  }
  let maior = Math.max.apply(null, freqArray)
  let indiceMaior = (freqArray.indexOf(maior))


  let media = "Não há"

  let filteredArray = sortArray.filter((este, i) => sortArray.indexOf(este) === i)
  let moda = filteredArray[indiceMaior]
  console.log(filteredArray)

  writeTable(filteredArray, freqArray, facArray, sortArray, moda, media, mediana) // chamada da função de escrever tabela

  //-----------------grafico----------------//
  let chart = new Chart(document.getElementById('myChart'), {
    //tipo de gráfico
    type: 'pie',

    // dados pro dataset
    data: {
      labels: filteredArray,
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
        data: freqIpercentArray,
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
        text: name
      }

    }
  })




}








function quantitativeFunc(name, array) {  //falta adicionar o nome, mas isso é o de menos

  //testes 25;98;54;12;0;1;2;6;4;71;5;30;20;84;4    1;2;2;5;4;1;2;6;4;1;2


  if (name == '') {
    name = 'Nome não escolhido'
  }
  document.getElementById('headVar').innerText = name
  newArray = array.split(";").map(x => parseFloat(x));  //separa o array por ";" e com map() passa tudo para Number float


  let sortArray = newArray.sort((a, b) => a - b); //function que o Glenio me passou para ordernar o vetor por ordem crescente

  //mediana 

  let mediana
  let somaMediana = (sortArray.length / 2) - 1
  if (sortArray.length % 2 == 0) {
    mediana = [sortArray[somaMediana], sortArray[somaMediana + 1]]
  } else {



    somaMediana = Math.trunc(somaMediana)
    mediana = sortArray[somaMediana]
  }



  let freqArray = [], facArray = []
  let x, fac = 0
  for (let i = 0; i < sortArray.length; i = x) {  // função que compara um item do vetor com outro e caso for true, adiciona um contador para fazer frequencia normal
    let freqCont = 1;

    for (x = i + 1; x < sortArray.length; x++) {
      if (sortArray[i] == sortArray[x]) {
        freqCont++;
      } else {
        break;
      }
    }
    fac += freqCont // acumulador para frequencia acumulada
    facArray.push(fac) // push no array de frequencia acumulada
    freqArray.push(freqCont); // push no array de frequencia normal

  }

  // moda -------------

  let maior = Math.max.apply(null, freqArray)
  let indiceMaior = (freqArray.indexOf(maior))




  let filteredArray = sortArray.filter((este, i) => sortArray.indexOf(este) === i); // função que filtra o vetor para tirar todos números repetidos 







  let moda = filteredArray[indiceMaior]

  writeTable(filteredArray, freqArray, facArray, sortArray, moda, mediana) // chamada da função de escrever tabela



  //--------------------grafico----------------//

  let chart = new Chart(document.getElementById('myChart'), {
    //tipo de gráfico
    type: 'bar',

    // dados pro dataset
    data: {
      labels: filteredArray,
      datasets: [{
        label: '%',
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
        data: freqIpercentArray,
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
        text: name
      }

    }
  })



}

let freqIpercentArray = [], acmFreq = 0

function freqIpercent(repetition, array) { // função de frequencia normal porcento
  let aux = repetition / array.length
  let percentual = aux * 100
  freqIpercentArray.push(percentual.toFixed(0))
  freqIpercentArray = freqIpercentArray.map(x => parseFloat(x)) // conversão para number

}


function writeTable(element, freq, fac, array, moda, mediana) { //função para escrever na tabela



  let mediaAux = 0






  for (let i = 0; i < element.length; i++) { //escreve a tabela
    var linha = document.createElement("tr");
    document.getElementById("col").appendChild(linha)
    var coluna1 = document.createElement("td");
    var coluna2 = document.createElement("td")
    var coluna3 = document.createElement("td")
    var coluna4 = document.createElement("td")
    var coluna5 = document.createElement("td")





    linha.appendChild(coluna1);
    linha.appendChild(coluna2);
    linha.appendChild(coluna3);
    linha.appendChild(coluna4);
    linha.appendChild(coluna5);



    freqIpercent(freq[i], array)

    console.log(freqIpercentArray)

    acmFreq += Math.floor(freqIpercentArray[i]) // frequencia acumulada porcento

    mediaAux += element[i] * freq[i]

    coluna1.innerText = element[i]
    coluna2.innerText = freq[i]
    coluna3.innerText = freqIpercentArray[i] + '%'
    coluna4.innerText = fac[i]
    coluna5.innerText = acmFreq + '%'



  }
  // media
  let freqReduce = freq.reduce((acumulado, n) => acumulado + n)

  let media = mediaAux/freqReduce

  document.getElementById('moda').innerHTML = "Moda: " + moda
  document.getElementById('media').innerHTML = "Média: " + media
  document.getElementById('mediana').innerHTML = "Mediana: " + mediana
  // desvio padrao
  let somatoriaDP =0

  for (let i = 0; i < element.length; i++){
    somatoriaDP = (((element[i] - media) **2) * freq[i]) + somatoriaDP
   
  }

  let amostra_populacao = document.getElementById("type03");


  let desvioPadrao
  if (amostra_populacao.value == "populacao"){
   desvioPadrao = Math.sqrt(somatoriaDP/freqReduce)
  } else {
    desvioPadrao = Math.sqrt(somatoriaDP/(freqReduce-1))

  }

  // coeficiente de variação

  let coefVariacao = (desvioPadrao/media)*100

  document.getElementById('desvio_Padrao').innerHTML = "Desvio padrão: " + desvioPadrao.toFixed(2)
  console.log(typeof(desvioPadrao))
  document.getElementById('coef_Variacao').innerHTML = "Coeficiente de variação: " + Math.round(coefVariacao) + "%"


}
