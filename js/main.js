///<reference path="jquery-3.5.1.js"/>

//Array for search function
let allCoins = [];
//Array for coin that user choose and we wont to show to checked
let allChoice = [];

if (localStorage.getItem("allChoice") != null) {
  allChoice = localStorage.getItem("allChoice").split(",");
}

// Function to loud currency from API
async function getCurrency() {
  try {
    const currency = await getJsonFromRemoteServer("https://api.coingecko.com/api/v3/coins/");
    //send the currency data to display function
    displayCurrency(currency);
  }
  catch (err) {
    alert(err)
  }
}

// Function get API url and return data
function getJsonFromRemoteServer(url) {
  return new Promise((resolve, reject) => {
    $.ajax({
      method: "GET",
      url,
      success: currencyArray => resolve(currencyArray),
      error: err => reject(err)
    });
  });
}

// Function to display currency
function displayCurrency(currency) {
  //clear the old data in the page
  $("#row").empty()
  // check if have more then 100 coins
  let index = 0;
  for (const item of currency) {
    if (index > 99) {
      break;
    }
    //Input information to array search
    let coin = [{ symbol: item.symbol,name: item.name, id: item.id }];
    allCoins.push(coin);
    // append data in main div
    $("#row").append(`
            <div class="col-sm-4" >
            <div class="card-body text-left">
            <p class="thick">${item.symbol}</p>
            <label class="switch">
              <input type="checkbox" id="${item.symbol}">
              <span class="slider round"></span>
            </label>
            <p class="normal">${item.name}</p>
            <button onclick="getInformation('${item.id}')" id="button${item.id}" class="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapseExample${item.id}" aria-expanded="false" aria-controls="collapseExample">More Info</button>
          <div class="collapse" id="collapseExample${item.id}">
            <div class="card card-body" id="box${item.id}">
            </div>
            </div>
          </div>
            </div>
            `); index++;
  }
  // if have data in local storage for coin checked show button left side
  const switchTrueButtons = localStorage.getItem("allChoice");
  if (switchTrueButtons != null) {
    getButtonsFromLocalStorage()
  }
}

//switch buttons from Local Storage array
function getButtonsFromLocalStorage() {
 const switchTrueButtons = localStorage.getItem("allChoice").split(",");
  for (const item of switchTrueButtons) {
    $(`#${item}`).prop("checked", true);
  }
}

// on click on home button show all coins in the main page 
$('#homeButton').on("click", function () { getCurrency() });

// show live report Just for example
$('#liveReportButton').on("click", function () {
  $('#row').empty().append(`<div id="chartContainer" style="height: 370px; width: 100%;"></div>
  `)
  // the function  in liveReport.js file
  showGraphReport();
})

// search function 
$("#searchButton").on("click", function () { showSearchData() });

// show all currency when the page start
getCurrency();