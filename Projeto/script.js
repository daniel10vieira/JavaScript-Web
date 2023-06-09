const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")

function convertValues(){
  const inputCurrencyValue = document.querySelector(".input-currency").value
  const currencyValueToConvert = document.querySelector(".currency-value-to-convert") // Valor em Real.
  const currencyValueConverted = document.querySelector(".currency-value") // Outras moedas.

  const dolarToday = 5.2
  const euroToday = 6.2
  const libraToday = 6.18


  if(currencySelect.value == "dolar"){
    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD"
    }).format(inputCurrencyValue / dolarToday)
  }
  if(currencySelect.value == "euro"){
    currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR"
    }).format(inputCurrencyValue / euroToday)
  }
  if(currencySelect.value == "libra"){
    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-UK", {
      style: "currency",
      currency: "GBP"
    }).format(inputCurrencyValue / libraToday)
  }

  currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
    style: "currency", 
    currency: "BRL"
  }).format(inputCurrencyValue)
}

function changeCurrency (){
  const  currencyName = document.getElementById("currency-name")
  const currencyImage = document.querySelector(".currency-img")

  if(currencySelect.value == "dolar"){
    currencyName.innerHTML = "Dólar americano"
    currencyImage.src = "./assets/estados-unidos.svg"
  }
  if(currencySelect.value == "euro"){
    currencyName.innerHTML = "Euro"
    currencyImage.src = "./assets/Euro.svg"
  }
  if(currencySelect.value == "libra"){
    currencyName.innerHTML = "Libra esterlina"
    currencyImage.src = "./assets/libra.svg"
  }

  convertValues()
}



currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)