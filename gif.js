$(document).on('click','button', function() {
    $("#giphy-view").empty();
    var gifItem = $(this).val();
    var gifURL = "https://api.giphy.com/v1/gifs/search?api_key=sKYmnUIjhERlGh0oJCv82J2pKvVCfeeU&q="+gifItem+"&limit=10&offset=0&rating=G&lang=en";
    $.ajax({
        url: gifURL,
        method: "GET"
    }).then(function(response){
        for(var i = 0; i < 11; i++){
            $("#giphy-view").append("<div>");
            $("#giphy-view div:last-child").attr("class", "giphyDiv");
            $("#giphy-view div:last-child").append("<img>");
            $(".giphyDiv img:last-child").attr("src", response.data[i].images.downsized_still.url);
            $(".giphyDiv img:last-child").attr("data-animate", response.data[i].images.downsized_large.url);
            $(".giphyDiv img:last-child").attr("data-static", response.data[i].images.downsized_still.url);
            $(".giphyDiv:last-child").append("<span>");
            $("giphyDiv span:last-child").text("Rating: " + response.data[i].rating);
        }
    });
});


$("input[type=submit]").on("click", function(){
    var newGiphy = $("#giphy-input").val();
    $("#buttons-view").append("<button>");
    $("#buttons-view button:last-child").attr("class", newGiphy);
    $("#buttons-view button:last-child").attr("class", "giphyDiv");
    $("#buttons-view button:last-child").attr("class", "btn btn-primary");
    $("#buttons-view button:last-child").attr("value", newGiphy);
    $("#buttons-view button:last-child").text(newGiphy);
    event.preventDefault();
});

$(document).on("click","img", function() {
    var staticImage = $(this).attr("data-static");
    var movingImage = $(this).attr("data-animate");
    var actualImage = $(this).attr("src");
    if (actualImage ==  staticImage ) {
        $(this).attr("src", movingImage);
    }else {
        $(this).attr("src", staticImage);
    }
});


