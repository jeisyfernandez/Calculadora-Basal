
const CALCULAR = document.getElementById('calcular');
const ERROR = document.getElementById('error');
const FLU = document.getElementById('flu');
const MAN = document.getElementById('man');

CALCULAR.addEventListener('click', () => {
  const DATO = document.getElementById('value').value;
  console.log('dato ingresado: ', DATO)
  if (DATO > 0){
    ERROR.style.display = 'none'
  if(DATO<=30){ 
    let flujo = calcFlujo(DATO);
    let mantenimiento = flujo*1.5;
    FLU.innerHTML = flujo + ' cc/hr';
    MAN.innerHTML = 'm+m/2 ' + mantenimiento + ' cc/hr';
    FLU.style.display = 'block';
    MAN.style.display = 'block';
  }else{
    let superficie = calcSuperficie(DATO);
    FLU.innerHTML = Math.round((superficie * 1500) * 100) / 100 + 'cc/hr';
    MAN.innerHTML = Math.round((superficie * 2000) * 100) / 100 + 'cc/hr';
  } 
}else{
    ERROR.style.display = 'block';
    FLU.style.display = 'none';
    MAN.style.display = 'none';
  }
});

function calcFlujo(peso){
  let resto = peso;
  let flujo = 0;
  if (resto>20){
      let aux = resto-20;
      flujo += aux*1;
      resto -= aux;
  } 
  if (resto>10){
      let aux = resto-10;
      flujo += aux*2;
      resto -= aux;
  }
  flujo += resto*4;
  return flujo;
}
function calcSuperficie(peso){
  let numerador = (peso * 4) + 7;
  let denominador = peso + 90;
  let result = numerador / denominador;
  if(peso>30){
  return result
  }
}
