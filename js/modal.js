$('.campaign-card').on("click", function() {
    var attribute = $(this).children('div.campaign-img-holder').attr("style");
    $('.modal-header').attr("style", attribute);
    
    var campaignTitle= $('#campaignTitle', this).text();
    var companyName =  $('#companyName', this).text();
    var totalAmt =  $('#total', this).text();
    var antPost =  $('#antPost', this).text();
    var minFollowers =  $('#minFollowers', this).text();
    
    $('.company-name').text(companyName);
    $('.campaign-title').text(campaignTitle);
    $('.total-amount').text(totalAmt);
    $('.ant-post').text(antPost);
    $('.min-followers').text(minFollowers);   
});



