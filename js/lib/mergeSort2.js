  function mergeSort2(vetor) {
  
    //function mergeSort2(vetor) {
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

export default mergeSort2