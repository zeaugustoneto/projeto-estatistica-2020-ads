// contínua = 1000; 1234; 1235; 1543; 2345; 2654; 3456; 3567; 5678; 6000; 4326; 4120; 2000; 2000; 1000; 1765; 1990; 2541; 3210; 4280; 5390; 5980; 4234; 3789; 3210; 3876; 1876; 2876; 2165; 2760
//continua = 61;70;78;80;87;88;90;92;93;95;96;97;101;102;103;104;105;107;108;110;111;112;112;112;113;113;114;114;115;115;116;118;119;121;122;123;125;127;128;128;128;138

let vetFreq_porcento = [], fac = 0, facArray =[]

function freqPorcento(frequenciasimples, vetorPorcento, reduce) { // função de frequencia normal porcento
  //  console.log(vetor.length + " lenght do parametro vetor")
  for(let y = 0; y < frequenciasimples.length; y++){
    let aux = frequenciasimples[y]/reduce
    aux = aux * 100
    vetorPorcento.push(aux)
   // console.log(aux + " variavel aux")
  }
   /* let percentual = aux * 100
  
   // console.log(percentual + " variavel percentual")
    vetFreq_porcento.push(percentual.toFixed(2))
    vetFreq_porcento = vetFreq_porcento.map(x => parseFloat(x)) // conversão para number
  
   // console.log(vetFreq_porcento + " dentro da função")*/
  
  }
const continua = [61,70,78,80,87,88,90,92,93,95,96,97,101,102,103,104,105,107,108,110,111,112,112,112,113,113,114,114,115,115,116,118,119,121,122,123,125,127,128,128,128,138]
const menor = continua[0], maior = continua[continua.length -1]

let amplitude = maior - menor, linha = 0, ic = 0



const j = Math.trunc(continua.length**0.5)
const i = j - 1
const k = j + 1
console.log(amplitude)
let classes

/*do{
    amplitude++
    console.log(amplitude)
    if(amplitude % i == 0){
        linha = i, ic = amplitude/i
        
        break
    }
    else if(amplitude % j ==0){
        linha = j, ic = amplitude/j  
        break
    }
    else if( amplitude % k == 0){
        linha = k, ic = amplitude/k
        break
    }
} while(amplitude < maior)*/

linha = 6, ic = 13//, inicio = null, fim = null
let elementos = [menor-1]
let frequenciaSimples = []

for(let i = 1; i <= linha; i++){ // Nem acredito que isso funcionou
    elementos.push(elementos[i - 1] + ic)
    frequenciaSimples.push((continua.filter(a => a >= elementos[i-1] && a < elementos[i])).length) //freq simples
    console.log(elementos)


}

let freqReduce = frequenciaSimples.reduce((acumulado, n) => acumulado + n)
let inicio, fim
console.log(freqReduce + ' frequencia simples reduce')

for( let i = 0; i < linha; i++){
    !inicio ? inicio = continua[0] -1 : inicio = fim
    fim = inicio + ic
    fac += frequenciaSimples[i]
    facArray.push(fac)

    console.log(`${inicio} |------ ${fim}`)
freqPorcento(frequenciaSimples, vetFreq_porcento,freqReduce)
    console.log(facArray + ' vetor fac')
console.log(vetFreq_porcento[i]+ ' vetFREQ%')



}
console.log(frequenciaSimples)


console.log(elementos)








