$('.campaign-card').on("click", function(){
    var attribute = $(this).children('div.campaign-img-holder').attr("style");
    console.log(attribute);
    $('.modal-header').attr("style", attribute);
});

var campaignTitle = document.getElementById("campaignTitle").innerHTML;
var companyName = document.getElementById("companyName").innerHTML;
var totalAmt = document.getElementById("total").innerHTML;
var antPost = document.getElementById("antPost").innerHTML;
var minFollowers = document.getElementById("minFollowers").innerHTML;


$('.company-name').append(companyName);
$('.campaign-title').append(campaignTitle);
$('.total-amount').append(totalAmt);
$('.ant-post').append(antPost);
$('.min-followers').append(minFollowers);
