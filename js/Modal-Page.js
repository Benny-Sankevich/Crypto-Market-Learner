///<reference path="jquery-3.5.1.js"/>

//show modal and button to remove data
function showModel(choiceArray) {
    //input al coins to object
    const arrayData = choiceArray.map(item => `<button type="button" class="btnSwitch btn-primary btn-lg"  value=${item}>${item}</button>&nbsp&nbsp&nbsp;`);
    //append current data to modal
    $("#myModal").html(" ").append(`
    <div class="modal-dialog" role="document">
    <div class="modal-content">
        <div class="modal-header">
            <h5 class="modal-title">you can choose only 5 currency,<br> If you want to choose another currency you need to select one of the currencies you want to remove.</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
        <div class="modal-body">
        ${arrayData.join().replace(/,/g, '')}
        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        </div>
    </div>
</div>
    `)
    //show model 
    $('#myModal').modal('show');
}

//delete user choice from modal box and hide modal
$("#myModal").on("click", ".btnSwitch", function () {
    const coinUnChoice = $(this).val();
    $(`#${coinUnChoice}`).prop("checked", false);
    $('#myModal').modal('hide');
    removeDataFromArray(coinUnChoice);
});