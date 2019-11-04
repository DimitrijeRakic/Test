let mesec=9;
let prestupna=false;
let brDana=0;

switch(mesec){
    case 0:mesec=31;
    break;
    case 1:mesec=28;
    break;
    case 2:mesec=31;
    break;
    case 3:mesec=30;
    break;
    case 4:mesec=31;
    break;
    case 5:mesec=30;
    break;
    case 6:mesec=31;
    break;
    case 7:mesec=31;
    break;
    case 8:mesec=30;
    break;
    case 9:mesec=31;
    break;
    case 10:mesec=30;
    break;
    case 11:mesec=31;
    break;
    default:mesec='Unknown';
    break;
}
console.log(`Oktobar ima ${mesec} dan`);