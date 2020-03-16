document.querySelector("#add-data").addEventListener("click", function() {
  let typeOfData = document.getElementById("type");
  let varName = document.getElementById("var-name").value;
  let input = document.getElementById("dataInput").value;

  if (typeOfData.value === "quantitativa") {
    quantitativeFunc(varName, input);
  } else {
    qualitativeFunc(varName, input);
  }
});
let newArray;

//testes 25;98;54;12;0;1;2;6;4;71;5;30;20;84;4    1;2;2;5;4;1;2;6;4;1;2

function quantitativeFunc(name, array) {
  newArray = array.split(";").map(x => parseFloat(x));

  //   let sortArray = selectionSort(newArray);
  let sortArray = newArray.sort((a, b) => a - b);
  let freqArray = [];
  let x;
  for (let i = 0; i < sortArray.length; i = x) {
    let freqCont = 1;

    for (x = i + 1; x < sortArray.length; x++) {
      if (sortArray[i] == sortArray[x]) {
        freqCont++;
      } else {
        break;
      }
    }

    freqArray.push(freqCont);
    // console.log(`Elemento = ${sortArray[i]}; frequencia = ${freqCont}`);
  }

  sortArray = sortArray.filter((este, i) => sortArray.indexOf(este) === i);
  console.log(sortArray);
  console.log(freqArray);

  writeTable(sortArray, freqArray);
  //writeTable(freqArray)
}

function writeTable(element, freq) {
  let linha = document.getElementById("linha");

  for (let i = 0; i < sortArray; i++) {
    let coluna = document.createElement("td");
    linha.appendChild(coluna);
  }

  celula.innerText = element;
  celula2.innerText = freq;

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
