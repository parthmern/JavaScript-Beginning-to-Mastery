// object destructuring

const band = {
    bandName: "led zepplin",
    famousSong: "stairway to heaven",
    year: 1968,
    anotherFamousSong: "kashmir",
};

const bandName1 = band.bandName ;
console.log(bandName1); // led zepplin

//1)) SHoRTCUT

const {bandName,famousSong} = band ;

console.log(bandName1);  // led zepplin
console.log(famousSong); // stairway to heaven

//2)) shortcut with differentvariable

const {bandName:var1,famousSong:var2} = band ;

console.log(var1); // led zepplin
console.log(var2); //stairway to heaven

//3)) for REST elements

const {bandName2,famousSong2,...restProps} = band ;

console.log(restProps); // {year: 1968, anotherFamousSong: 'kashmir'}