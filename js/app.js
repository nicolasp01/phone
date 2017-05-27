var myPhone = (function(){

$("button").click(function() {
    var clickedButton = $(this).val();
    $("#display").append(clickedButton);
});

})();