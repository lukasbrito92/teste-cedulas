function cedulas(){

var valor = 151;
var dif = valor;
n100 = parseInt(dif / 100);
if(n100!=0){
  dif=dif-(100*n100);
}
n50 = parseInt(dif / 50);
if(n50!=0){
  dif=dif-(50*n50);
}
n20 = parseInt(dif / 20);
if(n20!=0){
  dif=dif-(20*n20);
}
n10 = parseInt(dif / 10);
if(n10!=0){
  dif=dif-(10*n10);
}
n5 = parseInt(dif / 5);
if(n5!=0){
  dif=dif-(5*n5);
}
n2 = parseInt(dif / 2);
if(n2!=0){
  dif=dif-(2*n2);
}
n1 = parseInt(dif / 1);
if(n1!=0){
  dif=dif-(1*n1);
}
console.log(valor);
console.log(n100 + " notas de R$100,00");
console.log(n50 + " notas de R$50,00");
console.log(n20 + " notas de R$20,00");
console.log(n10 + " notas de R$10,00");
console.log(n5 + " notas de R$5,00");
console.log(n2 + " notas de R$2,00");
console.log(n1 + " notas de R$1,00");
}

cedulas();
