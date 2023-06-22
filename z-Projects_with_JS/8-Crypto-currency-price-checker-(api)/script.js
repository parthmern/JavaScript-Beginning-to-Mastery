//selectors
const bitcoin = document.querySelector(".bitcoin-price");
console.log(bitcoin.innerHTML);
const dogecoin = document.querySelector(".dogecoin-price");
const ethereum = document.querySelector(".ethereum-price");



//using api to fetch the value

getPrice();

async function getPrice(){

    const callApi = await fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin&vs_currencies=usd&include_24hr_change=true");

    const convertedApi = await callApi.json();

    console.log("btc=",convertedApi.bitcoin.usd);
    console.log("eth=",convertedApi.ethereum.usd);
    console.log("doge=",convertedApi.dogecoin.usd);

    showvalueFunc(convertedApi);

}

function showvalueFunc(price){

    console.log("price = ", price);

    bitcoin.innerHTML = price.bitcoin.usd ;
    ethereum.innerHTML = price.ethereum.usd;
    dogecoin.innerHTML = price.dogecoin.usd;
}


