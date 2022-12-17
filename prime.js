let x=13;

let checkPrime = (x) => {
  if(x === 1) return false;
  let count=0;
  for(let i=1 ; i<=Math.sqrt(x) ; i++) if(x%i==0) count++;
  return count === 1 ? true : false;
}

let isPrime = checkPrime(x)
isPrime?console.log("Prime"):console.log("Non-prime")

if(isPrime){
  let nextPrime=1, getNextPrime=false, x1=x+1;
  
  while(!getNextPrime){
    checkPrime(x1) ? getNextPrime=true : nextPrime++;
    x1++
  }
  console.log(nextPrime)
}