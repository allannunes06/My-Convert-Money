const button = document.getElementsByTagName('button')[0]
const select = document.getElementById("currency-select")
const select1 = document.getElementById("selection")




const convertValues = async () => {
    const inputReal = document.getElementById('input-real').value
    const realValueText = document.getElementById('real-value-text')
    const currencyValueText = document.getElementById('currency-value-text')


    const data = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL").then(response => response.json())

    const dolar = data.USDBRL.high
    const euro = data.EURBRL.high
    const bitcoin = data.BTCBRL.high
    console.log(data)

    realValueText.innerHTML = inputReal

    realValueText.innerHTML = new Intl.NumberFormat("pt-br", {
        style: "currency",
        currency: "BRL",
    }).format(inputReal)

    if (select1.value === "R$ Real brasileiro" && select.value === "US$ Dólar americano") {
        currencyValueText.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
        }).format(inputReal / dolar);
    }

    if (select1.value === "R$ Real brasileiro" && select.value === "€ Euro") {
        currencyValueText.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR",
        }).format(inputReal / euro);
    }

    if (select1.value === "R$ Real brasileiro" && select.value === "₿ Bitcoin") {
        currencyValueText.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "BTC",
        }).format(inputReal * bitcoin);
    }

    if (select1.value === "US$ Dólar americano" && select.value === "R$ Real brasileiro") {
        realValueText.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
        }).format(inputReal)

        currencyValueText.innerHTML = new Intl.NumberFormat("pt-br", {
            style: "currency",
            currency: "BRL",
        }).format(dolar * inputReal);
    }

    if (select1.value === "€ Euro" && select.value === "R$ Real brasileiro") {
        realValueText.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR",
        }).format(inputReal)

        currencyValueText.innerHTML = new Intl.NumberFormat("pt-br", {
            style: "currency",
            currency: "BRL",
        }).format(euro * inputReal);
    }

    if (select1.value === "₿ Bitcoin" && select.value === "R$ Real brasileiro") {
        realValueText.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "BTC",
        }).format(inputReal)

        currencyValueText.innerHTML = new Intl.NumberFormat("pt-br", {
            style: "currency",
            currency: "BRL",
        }).format(inputReal * bitcoin);
    }

}







changeCurrency = () => {
    const currencyName = document.getElementById("currency-name");
    const currencyImg = document.getElementById("currency-img");

    if (select.value === "US$ Dólar americano") {
        currencyName.innerHTML = "Dólar americano";
        currencyImg.src = "./assets/eua.png";
    }

    if (select.value === "€ Euro") {
        currencyName.innerHTML = "Euro";
        currencyImg.src = "./assets/euro.png";
    }

    if (select.value === "₿ Bitcoin") {
        currencyName.innerHTML = "Bitcoin";
        currencyImg.src = "./assets/bitcoin.png";
    }

    if (select.value === "R$ Real brasileiro") {
        currencyName.innerHTML = "Real";
        currencyImg.src = "./assets/brasil.png";
    }
    convertValues()
};

changeCurrency1 = () => {
    const currencyName1 = document.getElementById("currency-name1");
    const currencyImg1 = document.getElementById("currency-img1");

    if (select1.value === "US$ Dólar americano") {
        currencyName1.innerHTML = "Dólar americano";
        currencyImg1.src = "./assets/eua.png";
    }

    if (select1.value === "€ Euro") {
        currencyName1.innerHTML = "Euro";
        currencyImg1.src = "./assets/euro.png";
    }

    if (select1.value === "₿ Bitcoin") {
        currencyName1.innerHTML = "Bitcoin";
        currencyImg1.src = "./assets/bitcoin.png";
    }

    if (select1.value === "R$ Real brasileiro") {
        currencyName1.innerHTML = "Real";
        currencyImg1.src = "./assets/brasil.png";
    }
    convertValues()
};




button.addEventListener("click", convertValues)
select.addEventListener("change", changeCurrency)
select1.addEventListener("change", changeCurrency1)