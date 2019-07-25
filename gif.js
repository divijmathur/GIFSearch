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
