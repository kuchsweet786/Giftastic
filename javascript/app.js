// $("#addShow").on("click", function(event) {
//     event.preventDefault();
//     var newShow = $("#netflixInput").val().trim();
//     topics.push(newShow);
//     console.log(topics);
//     $("#netflixInput").val('');
//     displayButtons();
// // });

$( document ).ready(function() {

    var moods = [];
    function reDraw(){
        $("#gifButtons").empty()
        for (i=0; i < county.length; i++) {
            $("#gifButtons").append(
                $("<button>").attr("data-country", country[i]).text(country[i]).addClass("btn btn-primary gifButton")

            )
        }
    }



$(".gifButtons").on("click", function() {

    var state = $(this).attr("data-country");

    if (state === "still") {
        $(this).attr("src", $(this).attr("data-animate"));
        $(this).attr("data-state", "animate");
    } else {
        $(this).attr("src", $(this).attr("data-still"));
        $(this).attr("data-state", "still");
    }
});