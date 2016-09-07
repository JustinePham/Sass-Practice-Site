$('.hover-wrapper').hover(function() {
    $(this).children().stop().animate({"opacity": "0.3"}, "slow");
    
}, function() {
    $(this).children().stop().animate({"opacity": "1"}, "slow");
});