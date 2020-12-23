///<reference path="jquery-3.5.1.js"/>

function showSearchData() {
  const dataSearch = $("#searchBox").val();

  //clear search box
  $("#searchBox").val('');

  // validation if the box clear 
  if (dataSearch == "") {
    alert("Input a currency symbol");
    $("#searchBox").focus();
  }
  else {
    let itemIndex = 0;
    for (const item of allCoins) {
      if (item[0].symbol == dataSearch) {
        showBoxResult(item[0].symbol, item[0].name, item[0].id);
        itemIndex++;
      }
    }
    // if no have coin with name symbol that user input
    if (itemIndex == 0) {
      alert(`There is no currency in the name: "${dataSearch}"`);
      $("#searchBox").focus();
    }
  }
};

// show coin data that user search
function showBoxResult(symbol, name, id) {
  $("#row").empty().append(`
              <div class="col-sm-4">
              <div class="card-body text-left">
              <p class="thick">${symbol}</p>
              <label class="switch">
                <input type="checkbox" id="${symbol}">
                <span class="slider round"></span>
              </label>
              <p class="normal">${name}</p>
              <button onclick="getInformation('${id}')" id="button${id}" class="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapseExample${id}" aria-expanded="false" aria-controls="collapseExample">More Info</button>
            <div class="collapse" id="collapseExample${id}">
              <div class="card card-body" id="box${id}">
              </div>
              </div>
            </div>
              </div>
              `);
  //if coin is checked
  const switchTrueButtons = localStorage.getItem("allChoice");
  if (switchTrueButtons != null) {
    getButtonsFromLocalStorage()
  }
};