var giphys = ['dogs','cats','elephants', 'bird', 'skunk', 'rabbit','chicken'];

function renderButtons() {
        $("#buttons-view").empty();
        for (var i = 0; i < giphys.length; i++) {
            var buttonCreate = $("<button>");
            buttonCreate.addClass("giphys");
            buttonCreate.attr("data-giphy", giphys[i]);
            buttonCreate.text(giphys[i]);
            $('#buttons-view').append(buttonCreate);
        }
}

renderButtons();

$("#add-giphy").on('click',function() {
        event.preventDefault();
        var gifVal = $("#giphy-input").val();
        var u = "https://api.giphy.com/v1/gifs/search?api_key=sKYmnUIjhERlGh0oJCv82J2pKvVCfeeU&q=" + gifVal + "&limit=10&offset=0&rating=G&lang=en";
        // console.log(u);
        
        $.ajax({
            url: u,
            method: "GET"
        }).then(function(response){
            console.log(response);

            for (var i = 0; i < response.data.length; i++) {
                var a = $("<img>");
                a.attr('src', response.data[i].images.downsized_still.url);
                $('#giphy-view').append(a);  
            }
            giphys.push(gifVal);
            renderButtons(gifVal);            
        });
});