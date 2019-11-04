let n=4;
let k=5;
let gornjaSuma=0;
let donjaSuma=0;
let ukupnaSuma=0;

for(let i=0;i<=n;i++){
    gornjaSuma+=i+1;
    donjaSuma+=k+i;
    ukupnaSuma=gornjaSuma/donjaSuma;
}
console.log(ukupnaSuma);