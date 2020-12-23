///<reference path="jquery-3.5.1.js"/>

// Function to show data where user click on more info
function getInformation(id) {
  //display progress bar when load data
  displayProgress(id);
  //get data from session storage
  let currencyInformation = sessionStorage.getItem(id);
  // check if user close the more info box
  const ariaExpenderBol = $(`#button${id}`).attr("aria-expanded");
  if (ariaExpenderBol === "false") {
    // check if have data in session storage load get data from session storage
    if (currencyInformation != null) {
      const item = JSON.parse(currencyInformation)
      displayInformationInMoreInfoBox(id, item.dollarInfo, item.shekelInfo, item.euroInfo, item.imageInfo);
    }
    // if there is no information in session storage get information from API
    else {
      getJsonFromRemoteServer("https://api.coingecko.com/api/v3/coins/" + id)
        .then(currency => saveCoinInfo(currency, id))
        .catch(err => console.log("Error! Status: " + err.status + ", Text: " + err.statusText));
    }
  }
};

// Function to show progress bar
function displayProgress(id) {
  $("#box" + id).empty().append(`
    <div class="spinner-border text-primary" role="status">
    <span class="sr-only">Loading...</span>
  </div>`);
}

// get coin information from API and send to function that show data
function saveCoinInfo(currencyInformation, id) {
  let dollarInfo = (currencyInformation.market_data.current_price.usd).toFixed(4);
  let shekelInfo = ((currencyInformation.market_data.current_price.usd) * 3.3755).toFixed(4);
  let euroInfo = ((currencyInformation.market_data.current_price.usd) * 0.8457).toFixed(4);
  let imageInfo = currencyInformation.image.thumb;
  displayInformationInMoreInfoBox(id, dollarInfo, shekelInfo, euroInfo, imageInfo);
}

//Display information in more info box
function displayInformationInMoreInfoBox(id, dollarInfo, shekelInfo, euroInfo, imageInfo) {
  $("#box" + id).empty().append(`    
                         <p>Dollar: ${dollarInfo}$</p>
                         <p>Shekel: ${shekelInfo}₪</p>
                         <p>Euro: ${euroInfo}€</p>
                         <img src="${imageInfo}" style="width:25px;height:25px;">
                     `);
  // save data in session storage 
  saveCoinInSessionStorage(id, dollarInfo, shekelInfo, euroInfo, imageInfo);
}

// save information coin to tow minute and after tow minute remove data from session storage
function saveCoinInSessionStorage(id, dollarInfo, shekelInfo, euroInfo, imageInfo) {
  const coin = { dollarInfo, shekelInfo, euroInfo, imageInfo };
  let allCoinsJsonString = JSON.stringify(coin);
  sessionStorage.setItem(id, allCoinsJsonString);
  setTimeout(() => {
    sessionStorage.removeItem(id)
  }, 120000);
}