/*let vetorOrdinal = ["Ensino Superior","Ensino Superior","Ensino Superior","Ensino Superior","Ensino Superior","Ensino Médio","Ensino Médio","Ensino Médio","Ensino Médio","Ensino Médio","Ensino Médio","Ensino Fundamental","Ensino Fundamental","Ensino Fundamental","Ensino Fundamental","Ensino Fundamental","Ensino Fundamental", "Ensino Fundamental"]

let vetorUser=[], freqCont

let vetorFiltrado = ["Ensino Médio", "Ensino Fundamental","Ensino Superior" ]
let i, x
for ( i = 0; i < vetorFiltrado.length; i++) {  // função que compara um item do vetor com outro e caso for true, adiciona um contador para fazer frequencia normal
    freqCont = 0

    for (x = 0 ; x < vetorOrdinal.length; x++) {
      if (vetorFiltrado[i] === vetorOrdinal[x]) {
        vetorUser.push(vetorOrdinal[x])
         freqCont++;
      } else {
        continue;
      }
    }
  console.log(freqCont)

  }
  console.log('vetor ordinal ' + vetorOrdinal )
  console.log('vetor filtrado ' + vetorFiltrado )

  console.log('vetor user ' + vetorUser )*/


// contínua = 1000; 1234; 1235; 1543; 2345; 2654; 3456; 3567; 5678; 6000; 4326; 4120; 2000; 2000; 1000; 1765; 1990; 2541; 3210; 4280; 5390; 5980; 4234; 3789; 3210; 3876; 1876; 2876; 2165; 2760
//continua ainda = 61;70;78;80;87;88;90;92;93;95;96;97;101;102;103;104;105;107;108;110;11;112;112;112;113;113;114;114;115;115;116;118;117;121;122;123;125;127;128;128;128;138
/*let vetorSemFiltrar = [20,20,20,20,20,20,20,20,20,20,21,21,21,21,21,21,21,21,22,22,22,22,22,22,25,25,25,25,25,25,25,25,25,25,25,25,27,27,27,27]    // 20;20;20;20;20;20;20;20;20;20;21;21;21;21;21;21;21;21;22;22;22;22;22;22;25;25;25;25;25;25;25;25;25;25;25;25;27;27;27;27  [22,22,22,25,25,25,25,26,26,26,30,30,30,0,30,30,40,40,40,40]
let vetorDadosFiltrado =[20,21,22,25,27] //["muito bom", 'bom', 'razoavel', 'ruim', 'muito ruim']          muito bom;bom;razoável;ruim;muito ruim                muito bom;muito bom;muito bom;muito bom;muito bom;muito bom;bom;bom;bom;bom;bom;bom;bom;bom;razoável;razoável;razoável;razoável;razoável;ruim;ruim;ruim;ruim;ruim;ruim;ruim;muito ruim;muito ruim;muito ruim;muito ruim                 
let freqSimples = [10,8,6,12,4] //[6,8,5,7,4] 
let freqAcumulada =[10,18,24,36,40] //[6,14,19,26,30]
let medidaSeparatriz = [ 4, 5, 10, 100]

/*quartil = [1,2,3,4],
  quintil = [1,2,3,4,5],
  decil = [1,2,3,4,5,6,7,8,9,10],
  porcentil = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100]*/
/*let inputUser = 95
  let porcento, medida, posicao, resultado
   function descobrirSeparatriz() {
     porcento = ( 100/medidaSeparatriz[3])
     medidaPorcento = (porcento * inputUser) / 100
     console.log(medidaPorcento)
     posicao = freqAcumulada[freqAcumulada.length - 1] * medidaPorcento
    console.log(posicao)



    for(let i = 0; i < freqAcumulada.length; i++){
      if(posicao <= freqAcumulada[i]){
        resultado = vetorDadosFiltrado[i]
        break
      }
      
      
  }console.log('RESULTADO = ' + resultado)

  }
  descobrirSeparatriz()*/


/* let somatoriamd = 99 + (((21-12)/9)*13)
 console.log(somatoriamd)*/
/*let media = 5.4

 let fimVetor = [3,5,7]
 let frequenciaSimplesContinua = [5,6,9], somatoriaDP = 0


 for (let i = 0; i < fimVetor.length; i++) {
  somatoriaDP += (((fimVetor[i] - media) ** 2) * frequenciaSimplesContinua[i])

}
let desvioPadrao = somatoriaDP/20

console.log(Math.sqrt(desvioPadrao))*/





/*let porcento, posicao, partesIguais = 4
    
       let medidasUsuario = 1 /* document.getElementById('medidasUsuario').value
        let separatriz = document.getElementById('separatriz').value
    
        if (separatriz == 'quartil') {
          partesIguais = 4
        } else if (separatriz == 'quintil') {
          partesIguais = 5
        } else if (separatriz == 'decil') {
          partesIguais = 10
        } else if (separatriz == 'porcentil') {
          partesIguais = 100
        }*/
/*let indice = 0
        let facArray = [15,20,30,50], vetorFiltrado = 0

        porcento = (100 / partesIguais)
        let medidaPorcento = (porcento * medidasUsuario) / 100
        console.log(medidaPorcento)
        posicao =facArray[facArray.length - 1] * medidaPorcento
        console.log(posicao)


        if (!facArray-1){ 
          let resultadoSeparatriz = 1000 + (((posicao - facArray[indice-1])/15)*500)
          facArray = 0
        } else {
          facArray = 1 
        }


        console.log(indice - 1)
       
        console.log(resultadoSeparatriz)
    */


/*for (let i = 0; i < facArray.length; i++) {
  if (posicao <= facArray[i]) {
    resultadoSeparatriz = vetorFiltrado[i]
    break
  }
 
 
}   */



/*

        
        
        function fatorial(n){
          if(n == 0 || n == 1){
              return 1;
          }else{
              return n * (fatorial(n -1));
          }
      }
      
      function AnaliseCombinatoria(a,b){
          if(b == 1) return a
          if(a != b && b != 0){
              let r;
              r = fatorial(a) / (fatorial((a-b)) * fatorial(b));
              return r;
          }else{
              return 1;
          }
      }

     // console.log(AnaliseCombinatoria(4,2))


      function BinomialCalculo(k){
        let n = 4
        let p = 70
        let q = (100 - p) / 100 ;
        p = p / 100;
        if ( k > n ){
            return ("A amostra precisa ser maior ou igual ao número de eventos!")
        }else{
            var resultado = (AnaliseCombinatoria(n,k) * ( p ** k )) * (q ** ( n - k))
        resultado = resultado * 100
        }
        return resultado
    }

    var elementos = [2,3,4]
    var resultados = elementos.map(a => BinomialCalculo(a))
   // if (resultados.length > 1 ){
    resultados=resultados.reduce((a,b) => a+b)
    resultados = resultados.toFixed(2) + (' %')
       //else( resultados= resultados[0].toFixed(2) + (' %'))
    console.log(resultados)*/
/*let z = 1.67, l = Math.floor(z*10), c = (((z*10) - l) * 10).toFixed()

const tabelona= [
  [0.0000, 0.0040, 0.0080, 0.0120, 0.0160, 0.0199, 0.0239, 0.0279, 0.0319, 0.0359],
  [0.0389, 0.0438, 0.0478, 0.0517, 0.0557, 0.0596, 0.0636, 0.0675, 0.0714, 0.0754],
  [0.0793, 0.0832, 0.0871, 0.0910, 0.0948, 0.0987, 0.1026, 0.1064, 0.1103, 0.1141],
  [0.1179, 0.1217, 0.1255, 0.1293, 0.1331, 0.1368, 0.1406, 0.1443, 0.1480, 0.1517],
  [0.1554, 0.1591, 0.1628, 0.1664, 0.1700, 0.1736, 0.1772, 0.1808, 0.1844, 0.1879],
  [0.1915, 0.1950, 0.1985, 0.2019, 0.2054, 0.2088, 0.2123, 0.2157, 0.2190, 0.2224],
  [0.2258, 0.2291, 0.2324, 0.2357, 0.2389, 0.2422, 0.2454, 0.2486, 0.2518, 0.2549],
  [0.2580, 0.2612, 0.2642, 0.2673, 0.2704, 0.2734, 0.2764, 0.2794, 0.2823, 0.2852],
  [0.2881, 0.2910, 0.2939, 0.2967, 0.2996, 0.3023, 0.3051, 0.3078, 0.3106, 0.3133],
  [0.3159, 0.3186, 0.3212, 0.3238, 0.3264, 0.3289, 0.3315, 0.3340, 0.3365, 0.3389],
  [0.3413, 0.3438, 0.3461, 0.3485, 0.3508, 0.3531, 0.3554, 0.3577, 0.3599, 0.3621],
  [0.3643, 0.3665, 0.3686, 0.3708, 0.3729, 0.3749, 0.3770, 0.3790, 0.3810, 0.3830],
  [0.3849, 0.3869, 0.3888, 0.3907, 0.3925, 0.3944, 0.3962, 0.3980, 0.3997, 0.4015],
  [0.4032, 0.4049, 0.4066, 0.4082, 0.4099, 0.4115, 0.4131, 0.4147, 0.4162, 0.4177],
  [0.4192, 0.4207, 0.4222, 0.4236, 0.4251, 0.4265, 0.4279, 0.4292, 0.4306, 0.4319],
  [0.4332, 0.4345, 0.4357, 0.4370, 0.4382, 0.4394, 0.4406, 0.4418, 0.4429, 0.4441],
  [0.4452, 0.4463, 0.4474, 0.4484, 0.4495, 0.4505, 0.4515, 0.4525, 0.4535, 0.4545],
  [0.4554, 0.4564, 0.4573, 0.4582, 0.4591, 0.4599, 0.4608, 0.4616, 0.4625, 0.4633],
  [0.4641, 0.4649, 0.4656, 0.4664, 0.4671, 0.4678, 0.4686, 0.4693, 0.4699, 0.4706],
  [0.4713, 0.4719, 0.4726, 0.4732, 0.4738, 0.4744, 0.4750, 0.4756, 0.4761, 0.4767],
  [0.4772, 0.4778, 0.4783, 0.4788, 0.4793, 0.4798, 0.4893, 0.4808, 0.4812, 0.4817],
  [0.4821, 0.4826, 0.4830, 0.4834, 0.4838, 0.4842, 0.4846, 0.4850, 0.4854, 0.4857],
  [0.4861, 0.4864, 0.4868, 0.4871, 0.4875, 0.4878, 0.4881, 0.4884, 0.4887, 0.4890],
  [0.4893, 0.4896, 0.4898, 0.4901, 0.4904, 0.4906, 0.4909, 0.4911, 0.4913, 0.4916],
  [0.4918, 0.4920, 0.4922, 0.4925, 0.4927, 0.4929, 0.4931, 0.4932, 0.4934, 0.4936],
  [0.4938, 0.4940, 0.4941, 0.4943, 0.4045, 0.4946, 0.4948, 0.4949, 0.4951, 0.4952],
  [0.4953, 0.4955, 0.4956, 0.4957, 0.4959, 0.4960, 0.4961, 0.4962, 0.4963, 0.4964],
  [0.4965, 0.4966, 0.4967, 0.4968, 0.4969, 0.4970, 0.4971, 0.4972, 0.4973, 0.4974],
  [0.4974, 0.4975, 0.4976, 0.4977, 0.4977, 0.4978, 0.4979, 0.4979, 0.4980, 0.4981],
  [0.4981, 0.4982, 0.4982, 0.4983, 0.4984, 0.4984, 0.4985, 0.4985, 0.4986, 0.4986],
  [0.4986, 0.4987, 0.4987, 0.4988, 0.4988, 0.4989, 0.4989, 0.4989, 0.4990, 0.4990],
  [0.4990, 0.4991, 0.4991, 0.4991, 0.4992, 0.4992, 0.4992, 0.4992, 0.4993, 0.4993],
  [0.4993, 0.4993, 0.4994, 0.4994, 0.4994, 0.4994, 0.4994, 0.4995, 0.4995, 0.4995],
  [0.4995, 0.4995, 0.4995, 0.4996, 0.4996, 0.4996, 0.4996, 0.4996, 0.4996, 0.4997],
  [0.4997, 0.4997, 0.4997, 0.4997, 0.4997, 0.4997, 0.4997, 0.4997, 0.4997, 0.4998],
  [0.4998, 0.4998, 0.4998, 0.4998, 0.4998, 0.4998, 0.4998, 0.4998, 0.4998, 0.4998],
  [0.4998, 0.4998, 0.4999, 0.4999, 0.4999, 0.4999, 0.4999, 0.4999, 0.4999, 0.4999],
  [0.4999, 0.4999, 0.4999, 0.4999, 0.4999, 0.4999, 0.4999, 0.4999, 0.4999, 0.4999],
  [0.4999, 0.4999, 0.4999, 0.4999, 0.4999, 0.4999, 0.4999, 0.4999, 0.4999, 0.4999],
  [0.5000, 0.5000, 0.5000, 0.5000, 0.5000, 0.5000, 0.5000, 0.5000, 0.5000, 0.5000]
];


console.log("l= " + l + ' c= ' + c)
//let l = Math.floor(z*10),
let elemento = tabelona[l][c]
console.log(elemento)

const vet = [1, 2, 3, 4, 5]*/


/*const binSearch = (vetor, left, right, valor) => {
  if (right >= left) {
    var indice = (left + (right - left) / 2)
    if (vetor[indice] === valor) {
      return valor
    } 
    else if (vetor[indice] > valor) {
      return binSearch(vetor, left, indice - 1, valor)
    }
   else return binSearch(vetor, indice + 1, right, valor)
  }
  else {
    return -1
  }
}*/


/*let comp = 0
function buscaBinaria(lista, valorBusca) {
    let inicio = 0
    let fim = lista.length - 1
    
    while(fim >= inicio) {
        // Math.floor(): retira as casas decimais de um número
        let meio = Math.floor((fim + inicio) / 2)

        // Verifica se o valor na posição média é o valor de busca
        if(valorBusca === lista[meio]) {
            comp++
            return valorBusca
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


console.log(buscaBinaria(tabelona[l][c],0.4992))




// uniformeeeeeeeee
/*const maximo = 1800
const minimo = 800

let vetorMinMax = []
vetorMinMax.push(minimo,maximo)
console.log(vetorMinMax)

let intervalo = 300 //vetorMinMax[1] - vetorMinMax[0]
console.log(intervalo)
let media = ((vetorMinMax[1] + vetorMinMax[0])/2).toFixed(2)
console.log(media)
let dp = Math.sqrt((((maximo-minimo))**2/12)).toFixed(2)
console.log(dp)
let cv = ((dp/media)*100).toFixed(2) + "%"
console.log(cv)

function prob (){
  return ((1/(maximo-minimo))*intervalo)
}

console.log(prob)


*/
/*
const x = [33,25,24,18,12,10,8,4]
const y = [300,400,500,600,700,800,900,1000]
const n = y.length
let xy = [], aux


console.log(n)
for(let i = 0; i < y.length; i++){
  aux = x[i] * y[i]
  xy.push(aux)

}

let xElevado = x.map(elevar)
let yElevado = y.map(elevar)

function elevar(num){
  return num ** 2
}

let somatorioX = x.reduce((acumulado, n) => acumulado + n) , somatorioY = y.reduce((acumulado, n) => acumulado + n) , somatorioXY = xy.reduce((acumulado, n) => acumulado + n) , somatorioX_Elevado = xElevado.reduce((acumulado, n) => acumulado + n) , somatorioY_Elevado = yElevado.reduce((acumulado, n) => acumulado + n)


// COEFICIENTE CORRELAÇÃO

let coefCorrelacao = (n, x, y, xy, x2,y2) =>{
  return (n*xy - (x*y))/((Math.sqrt(n*x2 - (x**2)))*(Math.sqrt(n*y2-(y**2))))
}

let coeficienteFeito = (coefCorrelacao(n,somatorioX,somatorioY,somatorioXY,somatorioX_Elevado,somatorioY_Elevado)*100).toFixed(2)

if (coeficienteFeito < 0){
  coeficienteFeito = coeficienteFeito *(-1)
}



console.log(xy)

console.log(xElevado)
console.log(yElevado)

console.log(coeficienteFeito + '%')

// REGRESSÃO LINEAR


//let b = bRegressao

let a = (((n*somatorioXY-(somatorioX*somatorioY))/(n*somatorioX_Elevado - (somatorioX ** 2)))).toFixed(2)
let b =  ((somatorioY/n) - (a * (somatorioX/n))).toFixed(2)


console.log(a)
console.log(b)*/

/*let a = -24.22, b=1055.69 , r = 15

  let resultado1 =  (a*r)+b

  let resultado2 = (r-b)/a

  console.log(resultado1)*/

 

  // fnComp -> função de comparação
  // Parâmetros: dois valores a serem comparados
  // Retorno:
  // - true: se primeiro valor for MAIOR que segundo
  // - false: caso contrário

  
 
  
  let vet = ["branco","azul","preto","branco","branco","vermelho","azul","amarelo","verde"]

  function mergeSort2(vetor) {
   let comparacoes = 0, divisoes = 0, juncoes = 0
      // Recebe dois vetores JÁ ORDENADOS PREVIAMENTE e os mescla
      // em um único vetor, também ORDENADO
      function mesclarVetores(vetEsq, vetDir) {
          let vetRes = [], posEsq = 0, posDir = 0, sobra
  
          while(posEsq < vetEsq.length && posDir < vetDir.length) {
              comparacoes++
              if(vetEsq[posEsq] < vetDir[posDir]) {
                  vetRes.push(vetEsq[posEsq])
                  posEsq++
              }
              else { // vetDir[posDir] < vetEsq[posEsq]
                  vetRes.push(vetDir[posDir])
                  posDir++
              }
          }
          
          // slice(): retorna um subvetor a partir da posição espeficada até o fim
          
          // Sobra no vetor da esquerda
          if(posEsq < posDir) sobra = vetEsq.slice(posEsq)
          // Sobra no vetor da direita
          else sobra = vetDir.slice(posDir)
  
          //console.log({posEsq, posDir, sobra})
          
          // A sobra é acrescentada ao resultado final
          return vetRes.concat(sobra)
      }
      
      if(vetor.length > 1) {
          // Encontra o meio do vetor
          let meio = Math.floor(vetor.length / 2)
          let vetEsq = vetor.slice(0, meio) // A posição do meio NÃO entra
          let vetDir = vetor.slice(meio)
          divisoes++
          //console.log('ANTES:', {vetor, vetEsq, vetDir})
          vetEsq = mergeSort2(vetEsq)
          vetDir = mergeSort2(vetDir)
          //console.log('DEPOIS:', {vetEsq, vetDir})
          juncoes++
          return mesclarVetores(vetEsq, vetDir)        
      }
      return vetor
  }
  console.log(mergeSort2(vet)) 


