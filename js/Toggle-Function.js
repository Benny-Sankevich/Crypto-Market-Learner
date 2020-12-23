///<reference path="jquery-3.5.1.js"/>

// toggle function
$("#row").on("click", "input", function (event) {
  let symbol = $(this).attr("id");
  // if user choice more then  option 
  if ($(this).prop("checked") && allChoice.length >= 5) {
    event.preventDefault();
    showModel(allChoice);
    return;
  }
  // if user turn on coin toggle
  if ($(this).prop("checked")) {
    saveDataInArray(symbol);
  }
  // if user turn off toggle coin 
  else {
    removeDataFromArray(symbol);
  }
})

//function where checked is true add symbol to array
function saveDataInArray(symbol) {
  allChoice.push(symbol);
  localStorage.setItem("allChoice", allChoice);
}

// where checked is false remove symbol from array
function removeDataFromArray(symbol) {
  let count = 0;
  for (const item of allChoice) {
    if (item == symbol) {
      allChoice.splice(count, 1);
      // if array is clear remove []
      if (allChoice.length === 0) {
        localStorage.clear();
        return
      }
      localStorage.clear();
      localStorage.setItem("allChoice",allChoice);
    }
    count++;
  }
}