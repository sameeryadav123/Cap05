

funtion checkPrime(num){
 let factor=0;
for(let i=0; i>=num.lenght;i++){

if(num % i === 0){
factor++;}

}
if(factor === 2){
console.log("Number is Prime")
}
esle{
console.log("Number is Not Prime")
}
}