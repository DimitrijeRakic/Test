let m=12;
let n=36;
let prosek=0;

for(let i=m;i<=n;i++){
    if(i%7==0){
        prosek+=i/4;
    }
}
console.log(`Prosek brojeva deljivih sa 7 u intervalu od ${m} do ${n} iznosi ${prosek}`);