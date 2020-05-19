document.querySelector("#add-data").addEventListener("click", function() {
  let typeOfData = document.getElementById("type");
  let varName = document.getElementById("var-name").value;
  let input = document.getElementById("dataInput").value;



  /*function criarCabecalho(name){
  let cabecalho = document.getElementById('cabecalho')

  let titulo = document.createElement("th");
  let freqSimples = document.createElement("th")
  let freqSimples_porcento = document.createElement("th")
  let freqAcm = document.createElement("th")
  let freqAcm_porcento = document.createElement("th")
  



  
  cabecalho.appendChild(titulo);
  cabecalho.appendChild(freqSimples);
  cabecalho.appendChild(freqSimples_porcento);
  cabecalho.appendChild(freqAcm);
  cabecalho.appendChild(freqAcm_porcento);

  titulo.innerText = name
  freqSimples.innerText = 'Frequência Simples'
  freqSimples_porcento.innerText = 'Frequência Simples %'
  freqAcm.innerText = 'Frequência Acumulada'
  freqAcm_porcento.innerText = 'Frequência Acumulada %'
  }
*/

  if (typeOfData.value === "quantitativa") { //selecionador de quantitativa ou qualitativa
    quantitativeFunc(varName, input);
  } else {
    qualitativeFunc(varName, input);
  }
});
let newArray;

//testes 25;98;54;12;0;1;2;6;4;71;5;30;20;84;4    1;2;2;5;4;1;2;6;4;1;2



/*function quantitativaContinua(array) {
  let novoArray = array.split(';')

  novoArray.sort((a, b) => a - b);

  let at = novoArray[novoArray.length - 1] - novoArray[0]
  let k = Math.floor(Math.sqrt(novoArray.length))
  let cont, aux


  do {
    at++
    
    if( at % k == 0){
      aux = at/k
    } else if( at % (k-1) == 0){
      aux = at / (k-1)
      k--
    } else if ( at % (k+1) == 0){
      aux = at / (k+1)
      k++
    }


  } while (aux == '')





}*/







function qualitativeFunc(name, array){

  //testes branco;azul;preto;preto;branco;branco;negro;azul;amarelo;yellow
  document.getElementById('headVar').innerText = name
  newArray = array.split(";")

  let sortArray = newArray.sort() 

  let mediana
  let somaMediana = (sortArray.length/2)-1
  if(sortArray.length % 2 == 0 ){
     mediana = [sortArray[somaMediana], sortArray[somaMediana+1]]
  }else{
  
  
 
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
    
    // console.log(`Elemento = ${sortArray[i]}; frequencia = ${freqCont}`);
  }
  let maior = Math.max.apply(null, freqArray)
  let indiceMaior = (freqArray.indexOf(maior))
 

let media = "Não há"

let filteredArray = sortArray.filter((este, i) => sortArray.indexOf(este) === i)
let moda = filteredArray[indiceMaior]
console.log(filteredArray)

writeTable(filteredArray, freqArray,facArray, sortArray, moda, media, mediana) // chamada da função de escrever tabela



}








function quantitativeFunc(name, array) {  //falta adicionar o nome, mas isso é o de menos

  document.getElementById('headVar').innerText = name
  newArray = array.split(";").map(x => parseFloat(x));  //separa o array por ";" e com map() passa tudo para Number float
  let soma = newArray.reduce((acumulado, n) => acumulado + n)

  let sortArray = newArray.sort((a, b) => a - b); //function que o Glenio me passou para ordernar o vetor por ordem crescente
  
  //mediana 

let mediana
    let somaMediana = (sortArray.length/2)-1
    if(sortArray.length % 2 == 0 ){
       mediana = [sortArray[somaMediana], sortArray[somaMediana+1]]
    }else{
    
    
   
   somaMediana = Math.trunc(somaMediana)
    mediana = sortArray[somaMediana]
    }
  


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
    
    // console.log(`Elemento = ${sortArray[i]}; frequencia = ${freqCont}`);
  }

  // moda -------------

  let maior = Math.max.apply(null, freqArray)
  let indiceMaior = (freqArray.indexOf(maior))
 



  let filteredArray = sortArray.filter((este, i) => sortArray.indexOf(este) === i); // função que filtra o vetor para tirar todos números repetidos 

  let media = soma/newArray.length
  let moda = filteredArray[indiceMaior]
  /*console.log(sortArray);
  console.log(freqArray);*/

 //let freqTotal = accumulate(freqArray)



writeTable(filteredArray, freqArray,facArray, sortArray, moda, media, mediana) // chamada da função de escrever tabela

  }

  let freqIpercentArray = [], acmFreq = 0


  function accumulate(vet){
    for( i of vet){
      if(i > 0){
        vet[i] += vet[i -1]
      }
    }
    return vet
  }

//  writeTable(sortArray, freqArray);
  

// teste para git

function writeTable(element, freq , fac, array, moda, media, mediana) { //função para escrever na tabela


  function freqIpercent(repetition , array){ // função de frequencia normal porcento
    let aux = repetition / array.length
    let percentual = aux * 100
    freqIpercentArray.push(percentual.toFixed(0))
    freqIpercentArray = freqIpercentArray.map(x => parseFloat(x)) // conversão para number
   // return percentualFixed

  }  

 
  document.getElementById('moda').innerHTML = "Moda: " + moda
  document.getElementById('media').innerHTML = "Média: " + media

  document.getElementById('mediana').innerHTML = "Mediana: " + mediana

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
     


    coluna1.innerText = element[i]
    coluna2.innerText = freq[i]
    coluna3.innerText = freqIpercentArray[i]
    coluna4.innerText = fac[i]
    coluna5.innerText = acmFreq
    
    //let coluna2 = document.getElementsByClassName('coluna2')
    //coluna1.innerT = element


  }

    /*linha.removeChild(coluna1);
    linha.removeChild(coluna2);
    linha.removeChild(coluna3);
    linha.removeChild(coluna4);
    linha.removeChild(coluna5);*/

 /* celula.innerText = element;
  celula2.innerText = freq;*/

  /* document.getElementById('col').innerText=''
        let col1
        document.querySelector('#headVar').innerHTML = name  
        for (element of elements){ 
        col1 = document.createElement("tr")
        //col2 = document.createElement("tr")
        col1.innerText = element
       // col2.innerText = freq
        document.getElementById('col').appendChild(col1)
        //document.getElementById('col').appendChild(col2) }*/
}
