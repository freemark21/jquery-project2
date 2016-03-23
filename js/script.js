$(function() {
    function loadJSON(){
    $.getJSON('js/info.json')
    .done(function (data){
        for (var i = 0; i < data.things.length; i++){
            addContent(data.things[i]);
        };
        $('img').hide();
        $('p').hide();
        $('h1').on('click', function(){
            $(this).siblings().slideToggle();
        });
        
    });
    };

function addContent(obj){
    $('body').append('<div class="'+obj.name+'"><h1>' + obj.name + '</h1><img src ="' + obj.img + '"/>');
    for (var i = 0; i < obj.favs.length; i++){
        $('.' + obj.name).append('<p>' + obj.favs[i] + '</p></div>');
    };
};

function addFavs(obj){
    for (var i = 0; i < obj.favs.length; i++){
        $('body').append('<p>' + obj.favs[i] + '</p></div>');
    };
};    
    
    
loadJSON();


});