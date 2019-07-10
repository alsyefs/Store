function btnClicked() {
    alert('ok');
    // The below calls a GET endpoint:
    $.ajax({
        url: "/button",
        type: 'GET',
        contentType: "application/json",
        dataType: 'json',
        success: function (result) {
            console.log(result);
        }
    });
    alert('You just clicked me :) now I\'ll post back');
    // The below calls a post endpoint:
    $.ajax({
        url: "/button",
        type: 'post',
        contentType: "application/json",
        dataType: 'json',
        success: function (result) {
            console.log(result);
        }
    });
}