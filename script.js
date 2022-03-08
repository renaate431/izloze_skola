const vardi=['Jana Kalnina', 'toms brivmurnieks', 'roberts lengdons', 'luize freska', 'andris dridzis'];
const balvas=['phone', 'house', 'ledusskapis', 'kamera', 'TV'];
const naudaKopa=100000000000;
let uzvaretajuSkaits=5;
let rand= Math.random()* vardi.length;

rand=Math.floor(rand); // noapaļo uz leju
console.log(vardi[rand]);

for(let i=0; i<uzvaretajuSkaits; i++){
    let rand=Math.random()*vardi.length;
    rand=Math.floor(rand);
}
    let uzvaretajs= vardi[rand];
    console.log[vardi];

    let rindas= document.querySelector('.rindas'); // pievieno mainīgo
    uzvaretajs= vardi[rand];// console.log vietaa
    rindas.innerHTML +=` // PIEVIENO + LAI PIESKAITĪTU NAKAMO
