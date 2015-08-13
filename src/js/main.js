/*
*   Third party
*/

//= ../../bower_components/jquery/dist/jquery.js

/*
*   Custom
*/

$(function(){
    $('.js-makeit-fabulous').on('click', function(e){
        e.preventDefault();
        $('.logo, .post-img--podcast').toggleClass('fabulous');
    });

    $('.unactive').on('click', function(e){
        e.preventDefault();
    })
});
