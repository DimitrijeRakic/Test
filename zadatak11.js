let n = 4;
let k = 5;
let gornjaSuma = 0;
let donjaSuma = 0;
let ukupnaSuma = 0;
let a = Math.pow(-1, 4);

for (let i = 1; i <= n; i++) {
    gornjaSuma += i - i + (a * i + 1);
    for (let j = 0; j <= n; j++) {
        donjaSuma += k + j;
    }
    ukupnaSuma = gornjaSuma / donjaSuma;
}
console.log(ukupnaSuma);