var stillURL;
var animateURL;
var i=0;
var userSearch;

function createGIF(x){
    for (i=0;i<x.data.length;i++){
    var gifImage=document.createElement("img");
    $(gifImage).attr("width","300px");
    $(gifImage).attr("data-still",x.data[i].images.original_still.url);
    $(gifImage).attr("data-animate",x.data[i].images.original.url);
    $(gifImage).attr("src",x.data[i].images.original.url);
    $(gifImage).appendTo("#gif-results");
    console.log("data-still",x.data[i].images.original_still.url)
    }
}



$("button").on("click", function(){
    $("#gif-start-message").hide();
    var userSearch=$("input").val();
    var queryURL= "http://api.giphy.com/v1/gifs/search?q="+userSearch+"&api_key=3tDe0S1PsQj5U8TPiAv56eEWd2umYfKI&limit=5";

    console.log(userSearch);
    $.ajax({
        url:queryURL,
        method:"GET"
    }).then(function(response){createGIF(response)});
});

