// var giphys = ['dogs','cats','elephants', 'bird', 'skunk', 'rabbit','chicken'];

$(document).on('click','button', function() {
    $("#giphy-view").empty();
    var gifItem = $(this).val();
    var gifURL = "https://api.giphy.com/v1/gifs/search?api_key=sKYmnUIjhERlGh0oJCv82J2pKvVCfeeU&q=" + gifItem + "&limit=10&offset=0&rating=G&lang=en";
    $.ajax({
        url: gifURL,
        method: "GET"
    }).then(function(response){
        for(var i = 0; i < 11; i++) {
            $("#giphy-view").append("<div>");
            $("#giphy-view div:last-child").attr('class', 'GIFStyle');
            $("#giphy-view div:last-child").append("<img>");
            $(".GIFStyle img:last-child").attr('src', response.data[i].images.downsized_still.url);
            $(".GIFStyle img:last-child").attr("data-animate",response.data[i].images.downsized_large.url);
            $(".GIFStyle img:last-child").attr("data-still",response.data[i].images.downsized_still.url);
            $(".GIFStyle:last-child").append("<span>");
            $(".GIFStyle span:last-child").text("Rating " + response.data[i].rating);
        }
    }); 
});

$("input[type=submit]").on('click', function() {
    var newGIF = $("input[type=text]").val();
    $("#buttons-view").append("<button>");
    $("#buttons-view button:last-child").attr("value", newGIF);
    $("#buttons-view button:last-child").text(newGIF);
    event.preventDefault();
});

$(document).on('click','img', function() {
    var staticImage = $(this).attr("data-still");
    var movingImage = $(this).attr("data-animate");
    var actualImage = $(this).attr('src');
    if (actualImage == staticImage) {
        $(this).attr('src', movingImage);
    }else {
        $(this).attr('src', staticImage);
    }
});





// function renderButtons() {
//         $("#buttons-view").empty();
//         for (var i = 0; i < giphys.length; i++) {
//             var buttonCreate = $("<button>");
//             buttonCreate.addClass("giphys");
//             buttonCreate.attr("data-giphy", giphys[i]);
//             buttonCreate.text(giphys[i]);
//             $('#buttons-view').append(buttonCreate);
//         }
// }

// renderButtons();

// $("#add-giphy").on('click',function() {
//         event.preventDefault();
//         var gifVal = $("#giphy-input").val();
//         var u = "https://api.giphy.com/v1/gifs/search?api_key=sKYmnUIjhERlGh0oJCv82J2pKvVCfeeU&q=" + gifVal + "&limit=10&offset=0&rating=G&lang=en";
//         // console.log(u);
        
//         $.ajax({
//             url: u,
//             method: "GET"
//         }).then(function(response){
//             console.log(response);

//             for (var i = 0; i < response.data.length; i++) {
//                 var a = $("<img>");
//                 a.attr('src', response.data[i].images.downsized_still.url);
//                 $('#giphy-view').append(a);  
                
//             }
//             giphys.push(gifVal);
//             renderButtons(gifVal);            
//         });
// });

// $(".giphys").on('click', function() {
//     event.preventDefault();
//         var gifVal = $(".giphys").val();
//         var u = "https://api.giphy.com/v1/gifs/search?api_key=sKYmnUIjhERlGh0oJCv82J2pKvVCfeeU&q=" + gifVal + "&limit=10&offset=0&rating=G&lang=en";
//         // console.log(u);
        
//         $.ajax({
//             url: u,
//             method: "GET"
//         }).then(function(response){
//             console.log(response);

//             for (var i = 0; i < response.data.length; i++) {
//                 var a = $("<img>");
//                 a.attr('src', response.data[i].images.downsized_still.url);
//                 $('#giphy-view').append(a);  
                
//             }
//             // giphys.push(gifVal);
//             renderButtons(gifVal);            
//         });
// });