let btnCalcular = document.getElementById('calcularCorrelacao')
btnCalcular.addEventListener('click', function correlacao() {

  let x = document.getElementById('valoresX').value
  let y = document.getElementById('valoresY').value

  let xy = [], aux

  x = x.split(";").map(x => Number(x))
  y = y.split(";").map(x => Number(x))
  const n = y.length

  //alimenta vetor do x*y
  for (let i = 0; i < y.length; i++) {
    aux = x[i] * y[i]
    xy.push(aux)

  }

  //cria vetor para x e y elevados a 2
  let xElevado = x.map(elevar)
  let yElevado = y.map(elevar)

  function elevar(num) {
    return num ** 2
  }

  let somatorioX = x.reduce((acumulado, n) => acumulado + n), somatorioY = y.reduce((acumulado, n) => acumulado + n), somatorioXY = xy.reduce((acumulado, n) => acumulado + n), somatorioX_Elevado = xElevado.reduce((acumulado, n) => acumulado + n), somatorioY_Elevado = yElevado.reduce((acumulado, n) => acumulado + n)

  // COEFICIENTE CORRELAÇÃO 

  let coefCorrelacao = (n, x, y, xy, x2, y2) => {   // função de correlação
    return (n * xy - (x * y)) / ((Math.sqrt(n * x2 - (x ** 2))) * (Math.sqrt(n * y2 - (y ** 2))))
  }
  let coeficienteFeito = Number((coefCorrelacao(n, somatorioX, somatorioY, somatorioXY, somatorioX_Elevado, somatorioY_Elevado) * 100).toFixed(2))

  if (coeficienteFeito < 0) {
    coeficienteFeito = coeficienteFeito * (-1)
  }
  document.getElementById('resultadoCoeficiente').innerHTML = "Correlação: " + coeficienteFeito + '%'



  let chart = new Chart(document.getElementById('myChart'), {
    type: 'scatter',
    data: {
      datasets: [{
        label: 'Scatter Dataset',
        pointBackgroundColor: 'blue',
        data: x.map((a, b) => ({
          x: a,
          y: y[b]
        }))

      }]
    },
    options: {
      title: {
        text: 'Regressão',
        fontSize: 15,
        display: true
      },
      legend: {
        display: false
      },
      scales: {
        xAxes: [{
          type: 'linear',
          position: 'bottom'
        }]
      }
    }
  });



})

const btn_projecao = document.getElementById('btn_projetar')
btn_projecao.addEventListener('click', function regressao() {
  let x = document.getElementById('valoresX').value
  let y = document.getElementById('valoresY').value

  let xy = [], aux

  x = x.split(";").map(x => Number(x))
  y = y.split(";").map(x => Number(x))
  const n = y.length

  for (let i = 0; i < y.length; i++) {
    aux = x[i] * y[i]
    xy.push(aux)

  }

  let xElevado = x.map(elevar)
  let yElevado = y.map(elevar)

  function elevar(num) {
    return num ** 2
  }


  let somatorioX = x.reduce((acumulado, n) => acumulado + n), somatorioY = y.reduce((acumulado, n) => acumulado + n), somatorioXY = xy.reduce((acumulado, n) => acumulado + n), somatorioX_Elevado = xElevado.reduce((acumulado, n) => acumulado + n), somatorioY_Elevado = yElevado.reduce((acumulado, n) => acumulado + n)

  // COEFICIENTE CORRELAÇÃO novamente pois é preciso os dados de novo

  let coefCorrelacao = (n, x, y, xy, x2, y2) => {
    return (n * xy - (x * y)) / ((Math.sqrt(n * x2 - (x ** 2))) * (Math.sqrt(n * y2 - (y ** 2))))
  }
  let coeficienteFeito = Number((coefCorrelacao(n, somatorioX, somatorioY, somatorioXY, somatorioX_Elevado, somatorioY_Elevado) * 100).toFixed(2))

  if (coeficienteFeito < 0) {
    coeficienteFeito = coeficienteFeito * (-1)
  }


  // REGRESSÃO LINEAR
  let x_ou_y = document.getElementById('projecao').value
  let r = document.getElementById('valorRegrecao').value
  r = Number(r)
  let a = (((n * somatorioXY - (somatorioX * somatorioY)) / (n * somatorioX_Elevado - (somatorioX ** 2))))
  let b = ((somatorioY / n) - (a * (somatorioX / n)))
  let resultadoR

  if (x_ou_y == 'x') {
    resultadoR = ((a * r) + b).toFixed(2)
  } else if (x_ou_y == 'y') {
    resultadoR = ((r - b) / a).toFixed(2)
  }

  document.getElementById('resultadoCoeficiente').innerHTML = `Correlação: ${coeficienteFeito}%  ||  Regressão Linear (Projeção): ${resultadoR}`




})

