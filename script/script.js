var queryURL= "http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=3tDe0S1PsQj5U8TPiAv56eEWd2umYfKI&limit=5";
var stillURL;
var animateURL;
var i=0;

function createGIF(response){
    for (i=0;i<response.data.length;i++){
    var gifImage=$("<img>");
    gifImage.attr("src",response.data[i].images.original_still.url);
    gifImage.appendTo("#gif-results");
    }
}

$("button").on("click", function(){
    $("#gif-start-message").hide();
    var userInput=$("input").val();
    console.log(userInput);
    // $.ajax({
    //     url:queryURL,
    //     method:"GET"
    // }).then(createGIF(response));
});

