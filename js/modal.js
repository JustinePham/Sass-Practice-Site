$('.campaign-card').on("click", function(){
    var attribute = $(this).children('div.campaign-img-holder').attr("style");
    console.log(attribute);
    $('.modal-header').attr("style", attribute);
});