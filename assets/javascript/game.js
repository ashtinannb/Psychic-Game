document.addEventListener("keyup", function(event){
    console.log(event.key)
})


var countwins = 0;
var countLoss = 0;
var countguessLeft = 0;
var countguessesNow = 0;

$("#wins").on("click", function() {
    alert("wins");
    countwins++;
    $("#wins-count").text(countwins);
});
